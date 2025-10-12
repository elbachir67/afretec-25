// src/services/evaluationService.js
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import { updateParticipantPoints } from "./participantService";
import { checkAndUnlockBadges } from "./gamificationService";

export const checkExistingEvaluation = async (participantCode, activityId) => {
  try {
    const q = query(
      collection(db, "micro_evaluations"),
      where("participantCode", "==", participantCode),
      where("activityId", "==", activityId)
    );

    const snapshot = await getDocs(q);
    return !snapshot.empty;
  } catch (error) {
    console.error("Error checking evaluation:", error);
    return false;
  }
};

export const submitMicroEvaluation = async (
  participant,
  activityId,
  responses
) => {
  try {
    // 1. Vérifier si déjà répondu
    const alreadyAnswered = await checkExistingEvaluation(
      participant.code,
      activityId
    );

    if (alreadyAnswered) {
      throw new Error("Already answered");
    }

    // 2. Récupérer activité pour Early Bird
    const activityRef = doc(db, "activities", activityId);
    const activitySnap = await getDoc(activityRef);
    const activity = activitySnap.data();

    const now = new Date();
    const activityEnd = activity.actualEnd
      ? activity.actualEnd.toDate()
      : activity.scheduledEnd.toDate();
    const minutesSinceEnd = (now - activityEnd) / (1000 * 60);
    const isEarlyBird = minutesSinceEnd <= 10;

    // 3. Calculer points
    let pointsEarned = 10; // Base

    if (responses.key_takeaway && responses.key_takeaway.trim().length > 0) {
      pointsEarned += 5; // Bonus commentaire
    }

    if (isEarlyBird) {
      pointsEarned += 15; // Bonus Early Bird
    }

    // 4. Sauvegarder évaluation
    await addDoc(collection(db, "micro_evaluations"), {
      participantCode: participant.code,
      activityId,
      responses,
      pointsEarned,
      isEarlyBird,
      createdAt: serverTimestamp(),
    });

    // 5. Mettre à jour points
    await updateParticipantPoints(participant.id, pointsEarned);

    // 6. Historique
    await addDoc(collection(db, "points_history"), {
      participantCode: participant.code,
      pointsEarned,
      reason: "micro_eval",
      activityId,
      createdAt: serverTimestamp(),
    });

    // 7. Vérifier badges
    await checkAndUnlockBadges(participant);

    return {
      success: true,
      pointsEarned,
      isEarlyBird,
    };
  } catch (error) {
    console.error("Error submitting evaluation:", error);
    throw error;
  }
};

export const submitFinalEvaluation = async (participant, formData) => {
  try {
    // 1. Vérifier si déjà soumis
    const q = query(
      collection(db, "final_evaluations"),
      where("participantCode", "==", participant.code)
    );
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      throw new Error("Final evaluation already submitted");
    }

    // 2. Sauvegarder
    await addDoc(collection(db, "final_evaluations"), {
      participantCode: participant.code,
      ...formData,
      createdAt: serverTimestamp(),
    });

    // 3. Points
    const pointsEarned = 50;
    await updateParticipantPoints(participant.id, pointsEarned);

    await addDoc(collection(db, "points_history"), {
      participantCode: participant.code,
      pointsEarned,
      reason: "final_eval",
      createdAt: serverTimestamp(),
    });

    // 4. Badges
    await checkAndUnlockBadges(participant);

    return { success: true, pointsEarned };
  } catch (error) {
    console.error("Error submitting final evaluation:", error);
    throw error;
  }
};

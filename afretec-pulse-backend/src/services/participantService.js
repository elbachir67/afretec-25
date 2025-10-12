// src/services/participantService.js
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  increment,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";

export const createParticipant = async (email, code, language) => {
  try {
    // Vérifier si code existe déjà
    const q = query(collection(db, "participants"), where("code", "==", code));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      throw new Error("Code already exists");
    }

    // Créer participant
    const docRef = await addDoc(collection(db, "participants"), {
      code,
      email,
      language,
      totalPoints: 0,
      badges: [],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return { success: true, id: docRef.id, code };
  } catch (error) {
    console.error("Error creating participant:", error);
    throw error;
  }
};

export const getParticipantByCode = async code => {
  try {
    const q = query(collection(db, "participants"), where("code", "==", code));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return null;
    }

    const doc = snapshot.docs[0];
    return { id: doc.id, ...doc.data() };
  } catch (error) {
    console.error("Error getting participant:", error);
    throw error;
  }
};

export const updateParticipantPoints = async (participantId, points) => {
  try {
    const participantRef = doc(db, "participants", participantId);

    await updateDoc(participantRef, {
      totalPoints: increment(points),
      updatedAt: serverTimestamp(),
    });

    return true;
  } catch (error) {
    console.error("Error updating points:", error);
    throw error;
  }
};

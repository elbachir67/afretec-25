// src/data/badges.js
const BADGES = [
  {
    id: "network_builder",
    name: {
      en: "Network Builder",
      fr: "Bâtisseur de Réseau",
    },
    icon: "🥇",
    description: {
      en: "Complete 5 micro-evaluations",
      fr: "Complétez 5 micro-évaluations",
    },
    requirement: {
      type: "micro_eval_count",
      value: 5,
    },
    bonusPoints: 10,
  },
  {
    id: "speed_thinker",
    name: {
      en: "Speed Thinker",
      fr: "Penseur Rapide",
    },
    icon: "🔥",
    description: {
      en: "Reply 3 times as Early Bird (<10 min)",
      fr: "Répondez 3 fois en Early Bird (<10 min)",
    },
    requirement: {
      type: "early_bird_count",
      value: 3,
    },
    bonusPoints: 15,
  },
  {
    id: "insight_master",
    name: {
      en: "Insight Master",
      fr: "Maître des Insights",
    },
    icon: "💎",
    description: {
      en: "Write 5 optional comments",
      fr: "Rédigez 5 commentaires optionnels",
    },
    requirement: {
      type: "comments_count",
      value: 5,
    },
    bonusPoints: 10,
  },
  {
    id: "conference_champion",
    name: {
      en: "Conference Champion",
      fr: "Champion de Conférence",
    },
    icon: "👑",
    description: {
      en: "Complete all evaluations + final survey",
      fr: "Complétez toutes les évaluations + enquête finale",
    },
    requirement: {
      type: "all_done",
      value: 1,
    },
    bonusPoints: 30,
  },
  {
    id: "afretec_ambassador",
    name: {
      en: "Afretec Ambassador",
      fr: "Ambassadeur Afretec",
    },
    icon: "🌍",
    description: {
      en: "Reach Top 10% participants",
      fr: "Atteignez le Top 10% des participants",
    },
    requirement: {
      type: "leaderboard_top_10_percent",
      value: 1,
    },
    bonusPoints: 50,
  },
];

module.exports = BADGES;

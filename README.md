# ✅ README MIS À JOUR AVEC TES CONTACTS

**Voici le README avec tes informations personnelles intégrées :**

---

```markdown
# 🎓 Afretec Pulse 2025

**Real-time Conference Engagement & Gamification Platform**

A full-stack mobile application for the Afretec 2025 Innovation & Collaboration Conference (October 20-22, 2025, Dakar). Participants pulse sessions in real-time, earn points, unlock badges, and compete on the leaderboard.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Usage Guide](#usage-guide)
- [Admin Dashboard](#admin-dashboard)
- [Data Export](#data-export)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## ✨ Features

### 📱 Mobile App (Participant Side)

- **Authentication System**

  - Quick registration with email
  - Unique participant code (AF-XXXX format)
  - Code-based login
  - Auto-login persistence

- **Micro-Evaluations (Pulse)**

  - 4 question types: Stars (⭐), Thumbs (👍), Multiple choice, Text input
  - Real-time submission
  - Smart duplicate prevention
  - Instant feedback

- **Gamification System**

  - Points system (base 15 + bonuses)
  - Early Bird bonus (+15 points if answered < 10 min)
  - Comment bonus (+5 points for optional feedback)
  - 5 unlockable badges:
    - 🥇 Network Builder (5 evaluations)
    - 🔥 Speed Thinker (3 Early Birds)
    - 💎 Insight Master (5 comments)
    - 👑 Conference Champion (Complete all + final eval)
    - 🌍 Afretec Ambassador (Top 10%)

- **Leaderboard**

  - Real-time ranking by points
  - Visual podium (🥇🥈🥉)
  - Highlighted personal position
  - Badge display per participant

- **Badges Screen**

  - Progress tracking for each badge
  - Locked/unlocked state visualization
  - Bonus points indication

- **Bilingual Support**
  - English (default) / French
  - Instant language switching
  - Persistent preference

### 💻 Admin Dashboard (Web)

- **Activity Management**

  - 23 pre-loaded conference activities (bilingual)
  - Start/Complete/Reset controls
  - Real-time status tracking
  - Day-based filtering

- **Statistics & Monitoring**

  - Total activities count
  - Completion rate
  - Participant count
  - Response rate per activity
  - Participation percentage

- **Participants View**

  - Complete list with rankings
  - Codes, emails, points, badges, language
  - Sortable table

- **Data Export (CSV)**
  - Participants export (rank, code, email, points, badges)
  - Evaluations export (all responses with details)
  - Statistics export (per-activity metrics)
  - Bulk export (all 3 files)

---

## 🛠 Tech Stack

### Frontend (Mobile)

- **React Native** - Cross-platform mobile framework
- **Expo** (~52.0.11) - Development platform
- **React Navigation** - Navigation library
- **i18next** - Internationalization (EN/FR)
- **AsyncStorage** - Local data persistence
- **React Native Confetti Cannon** - Success animations

### Backend

- **Firebase Firestore** - NoSQL real-time database
- **Firebase Authentication** - (Optional for future)
- **Firebase Hosting** - (Optional for admin dashboard)

### Admin Dashboard

- **Vanilla JavaScript** - No framework needed
- **Firebase JavaScript SDK** - Firestore operations
- **HTML5/CSS3** - Modern responsive UI

---

## 📁 Project Structure
```

afretec-pulse/
│
├── afretec-pulse-app/ # Mobile App (React Native/Expo)
│ ├── src/
│ │ ├── screens/
│ │ │ ├── auth/ # Welcome, Register, Login
│ │ │ ├── main/ # Dashboard, Badges, Leaderboard
│ │ │ └── evaluation/ # MicroEval, Success
│ │ ├── services/
│ │ │ ├── firebase.js
│ │ │ ├── participantService.js
│ │ │ ├── evaluationService.js
│ │ │ └── gamificationService.js
│ │ ├── constants/
│ │ │ ├── questionTemplates.js
│ │ │ └── utils.js
│ │ └── i18n/
│ │ └── index.js # EN/FR translations
│ ├── assets/
│ │ └── images/
│ │ └── logo_ucad.png
│ ├── App.js # Main navigation
│ ├── app.json
│ ├── package.json
│ └── README.md
│
└── afretec-pulse-backend/ # Backend + Admin
├── admin-dashboard.html # Admin Web Dashboard
├── init-activities.js # Script to populate 23 activities
├── package.json
└── README.md

````

---

## 📦 Prerequisites

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn**
- **Expo Go** app on your phone:
  - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
- **Firebase Account** - [console.firebase.google.com](https://console.firebase.google.com)
- **Git** (optional)

---

## 🚀 Installation

### 1. Clone/Download the Project

```bash
# Clone (if using Git)
git clone <your-repo-url>
cd afretec-pulse

# Or simply extract the ZIP file
````

### 2. Install Mobile App Dependencies

```bash
cd afretec-pulse-app
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../afretec-pulse-backend
npm install
```

---

## ⚙️ Configuration

### Firebase Setup

1. **Create Firebase Project**

   - Go to [Firebase Console](https://console.firebase.google.com)
   - Click "Add project"
   - Name: `afretec-pulse`
   - Enable Google Analytics (optional)

2. **Get Firebase Config**

   - In Firebase Console → Project Settings → General
   - Scroll to "Your apps" → Web app
   - Copy the `firebaseConfig` object

3. **Update Mobile App Config**

   Edit `afretec-pulse-app/src/services/firebase.js`:

   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "YOUR_MESSAGING_ID",
     appId: "YOUR_APP_ID",
   };
   ```

4. **Update Admin Dashboard Config**

   Edit `afretec-pulse-backend/admin-dashboard.html` (line ~680):

   ```javascript
   const firebaseConfig = {
     // Same config as above
   };
   ```

5. **Enable Firestore**

   - Firebase Console → Firestore Database
   - Click "Create database"
   - Start in **production mode**
   - Choose location (europe-west or us-central)

6. **Configure Firestore Rules**

   Firebase Console → Firestore → Rules:

   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /activities/{activityId} {
         allow read: if true;
         allow write: if false; // Admin only via dashboard
       }
       match /participants/{participantId} {
         allow read: if true;
         allow create: if true;
         allow update: if true;
       }
       match /micro_evaluations/{evalId} {
         allow read: if true;
         allow create: if true;
       }
       match /points_history/{pointId} {
         allow read: if true;
         allow create: if true;
       }
     }
   }
   ```

---

## 🏃 Running the Application

### Initialize Activities (First Time Only)

```bash
cd afretec-pulse-backend
node init-activities.js
```

**Expected output:**

```
🔄 Deleting old activities...
✅ X old activities deleted
📝 Creating new bilingual activities...
✅ Created: Opening of Meeting / Ouverture de la Réunion
...
🎉 23 bilingual activities created successfully!
```

### Start Mobile App

```bash
cd afretec-pulse-app
npx expo start
```

**Options:**

- `npx expo start --tunnel` - If different WiFi networks
- `npx expo start --clear` - Clear cache if issues
- `npx expo start --android` - Launch Android emulator
- `npx expo start --ios` - Launch iOS simulator (macOS only)

**Scan QR Code:**

1. Open **Expo Go** app on your phone
2. Scan the QR code displayed in terminal
3. App will load on your device

### Open Admin Dashboard

Simply open in Chrome/Firefox:

```
afretec-pulse-backend/admin-dashboard.html
```

Or use Live Server in VS Code for auto-reload.

---

## 📖 Usage Guide

### For Participants

1. **First Time**

   - Open Expo Go → Scan QR code
   - Choose language (EN/FR)
   - Click "Register"
   - Enter email
   - **SAVE YOUR CODE** (AF-XXXX)
   - Screenshot recommended!

2. **Returning User**

   - Open app
   - Click "Login"
   - Enter your code (AF-XXXX)

3. **During Conference**
   - Wait for activity to be completed (admin marks it)
   - Green card appears: "Available Activity"
   - Click "⚡ Pulse Now!"
   - Answer 4 questions
   - Submit & earn points!
   - Check "My Badges" for progress
   - Check "Leaderboard" for ranking

### For Admins

1. **Before Each Session**

   - Open `admin-dashboard.html`
   - Find the activity
   - Click "▶️ Start"

2. **After Each Session**

   - Click "🏁 Complete"
   - Participants can now pulse it!
   - Monitor response rate

3. **During Conference**

   - Click "🔄 Refresh" regularly
   - Check participation rates
   - View "👥 Participants" list

4. **After Conference**
   - Click "📥 Export Data"
   - Export all 3 CSV files
   - Analyze in Excel/Google Sheets

---

## 🎛 Admin Dashboard

### Key Features

**Activity Cards:**

- Green = Completed (participants can pulse)
- Yellow = In Progress
- White = Upcoming

**Stats Panel:**

- Total Activities: 23
- Completed: X
- Participants: Y
- Total Responses: Z

**Day Filtering:**

- All Days
- Day 1 (Oct 20)
- Day 2 (Oct 21)
- Day 3 (Oct 22)

**Actions:**

- **Start** - Begins activity (shows as "In Progress")
- **Complete** - Marks done (participants can pulse)
- **Reset** - Reverts to "Upcoming"

---

## 📊 Data Export

### CSV Files Generated

1. **afretec-participants-YYYY-MM-DD.csv**

   ```
   Rank, Code, Email, Total Points, Badges, Language, Created At
   1, AF-1234, test@example.com, 150, 🥇 🔥, EN, 2025-10-20 09:30:00
   ```

2. **afretec-evaluations-YYYY-MM-DD.csv**

   ```
   Participant Code, Activity, Points Earned, Early Bird, Response Date, Relevance, Clarity, Actionable Ideas, Key Takeaway
   AF-1234, Opening of Meeting, 30, Yes, 2025-10-20 09:45:00, 4, good, yes, "Very interesting session"
   ```

3. **afretec-statistics-YYYY-MM-DD.csv**
   ```
   Day, Activity (EN), Activity (FR), Type, Status, Responses, Participation Rate, Early Birds, Avg Points
   1, Opening of Meeting, Ouverture de la Réunion, plenary, Completed, 45, 90%, 30, 27
   ```

### Analysis Tips

- **Participation Rate** - Which sessions engaged most?
- **Early Bird Count** - How many replied quickly?
- **Key Takeaways** - Sentiment analysis of comments
- **Top Performers** - Reward top 3 participants

---

## 🐛 Troubleshooting

### Mobile App Issues

**App won't load on phone?**

```bash
# Try tunnel mode
npx expo start --tunnel --clear
```

**"Network error" on submission?**

- Check WiFi/4G connection
- Verify Firebase config is correct
- Check Firestore rules allow writes

**Stuck on loading screen?**

- Pull down to refresh
- Close and reopen app
- Clear Expo cache: Settings → Clear cache

### Admin Dashboard Issues

**Activities not showing?**

```bash
# Re-run initialization
cd afretec-pulse-backend
node init-activities.js
```

**Export not downloading?**

- Disable popup blocker
- Try different browser (Chrome recommended)
- Check browser console (F12) for errors

**Participation rate shows 0%?**

- Click "🔄 Refresh"
- Check Firebase Console for data
- Verify `micro_evaluations` collection has documents

### Firebase Issues

**Permission denied errors?**

- Check Firestore Rules
- Ensure reads/writes are allowed
- Verify project ID matches config

**Data not syncing?**

- Check internet connection
- Verify Firebase config
- Look for red errors in browser console (F12)

---

## 🎯 Conference Day Checklist

### Day Before (-1)

- [ ] Test app on multiple devices (Android + iOS)
- [ ] Verify all 23 activities in Firebase
- [ ] Print QR code for Expo Go download
- [ ] Prepare WiFi/4G hotspot backup
- [ ] Test CSV exports

### Day Of (Each Session)

- [ ] Open admin dashboard
- [ ] Click "Start" when session begins
- [ ] Announce to participants
- [ ] Click "Complete" when session ends
- [ ] Remind participants to pulse
- [ ] Monitor response rate

### After Conference

- [ ] Export all data (3 CSV files)
- [ ] Backup to Google Drive/cloud
- [ ] Generate top 3 certificates
- [ ] Share statistics with organizers
- [ ] Collect feedback for v2

---

## 📈 Analytics & Insights

### Key Metrics to Track

1. **Engagement Rate** = (Responses / Participants) × 100
2. **Early Bird Rate** = (Early Birds / Responses) × 100
3. **Comment Rate** = (Comments / Responses) × 100
4. **Average Points per Session**
5. **Most Engaged Session** (highest participation)
6. **Badge Unlock Rate** (% of participants per badge)

### Post-Conference Report Template

```markdown
# Afretec Pulse 2025 - Results Summary

## Participation Overview

- Total Participants: X
- Total Responses: Y
- Average Participation Rate: Z%

## Top 3 Participants

1. 🥇 AF-XXXX - 250 points
2. 🥈 AF-YYYY - 230 points
3. 🥉 AF-ZZZZ - 210 points

## Most Engaged Sessions

1. [Session Name] - 95% participation
2. [Session Name] - 92% participation
3. [Session Name] - 88% participation

## Badge Distribution

- 🥇 Network Builder: X participants
- 🔥 Speed Thinker: Y participants
- 💎 Insight Master: Z participants
- 👑 Conference Champion: A participants
- 🌍 Afretec Ambassador: B participants

## Key Insights

- [Insight from comments]
- [Popular topics]
- [Areas for improvement]
```

---

## 🚀 Future Enhancements

**v2.0 Roadmap:**

- [ ] Push notifications (new activity available)
- [ ] QR code check-in system
- [ ] Final conference evaluation screen
- [ ] Offline mode with sync
- [ ] Live charts in admin dashboard
- [ ] Certificate generation (PDF)
- [ ] Photo gallery per session
- [ ] Networking feature (connect participants)
- [ ] Post-conference survey

---

## 🤝 Contributing

**Developed by:** El Bachir Touré  
**Role:** Software Engineering & AI Researcher  
**Institution:** UCAD (Université Cheikh Anta Diop)  
**For:** Afretec 2025 Conference  
**Date:** October 2025

---

## 📄 License

This project is proprietary software for Afretec 2025 Conference.  
All rights reserved © 2025 Afretec / UCAD.

---

## 🙏 Acknowledgments

- **UCAD (Université Cheikh Anta Diop)** - Host institution
- **Afretec Network** - Conference organizers
- **Firebase** - Backend infrastructure
- **Expo** - Mobile development platform
- **React Native Community** - Open-source libraries

---

## 📞 Support & Contact

### Technical Issues & Development

**El Bachir Touré**  
📧 Email: [elbachir.toure@gmail.com](mailto:elbachir.toure@gmail.com)  
📱 Phone/WhatsApp: [+221 77 358 79 10](tel:+221773587910)

**Available for:**

- Bug reports & technical issues
- Feature requests
- Code contributions
- Technical consultation
- Emergency support during conference

### Conference Information

**Afretec 2025 Organizing Committee**  
📧 General Inquiries: [info@afretec.org](mailto:info@afretec.org)  
🌐 Website: [www.afretec.org](https://www.afretec.org)

---

## 🎓 About the Developer

**El Bachir Touré** is a researcher and educator specializing in Software Engineering and Artificial Intelligence at UCAD. This application was developed to enhance participant engagement and provide real-time feedback mechanisms for academic conferences.

**Research Interests:**

- Software Engineering
- Artificial Intelligence
- Mobile Application Development
- Gamification in Education
- Conference Technology Solutions

---

## 📱 Quick Links

- **Firebase Console:** [console.firebase.google.com/project/afretec-pulse](https://console.firebase.google.com/project/afretec-pulse)
- **Expo Documentation:** [docs.expo.dev](https://docs.expo.dev)
- **React Native Docs:** [reactnative.dev](https://reactnative.dev)
- **Firebase Docs:** [firebase.google.com/docs](https://firebase.google.com/docs)

---

## ⚡ Quick Start Commands

```bash
# Initialize backend
cd afretec-pulse-backend
npm install
node init-activities.js

# Start mobile app
cd ../afretec-pulse-app
npm install
npx expo start --tunnel

# Open admin dashboard
# Just open admin-dashboard.html in Chrome
```

---

**🎉 Built with ❤️ for Afretec 2025 🚀**

**Conference Dates:** October 20-22, 2025  
**Location:** Dakar, Senegal  
**Powered by:** UCAD & Afretec Network

```

---

## ✅ PARFAIT !

**Ton README est maintenant complet avec :**
- ✅ Tes coordonnées (email + téléphone)
- ✅ Ta position (Enseignant-chercheur)
- ✅ Ton domaine (Génie Logiciel & IA)
- ✅ Section "À propos du développeur"
- ✅ Contacts pour support technique

**Sauvegarde ce README.md et tu es prêt ! 🎊**

**Bon courage avec les tests et la conférence ! 🚀**
```

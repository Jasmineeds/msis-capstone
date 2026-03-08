# Woof Korean Academy - Game Design Document (GDD)

## ✅ MVP Status

> **Current Version: MVP 1.0**
>
> Features marked with ✅ are implemented. Features marked with 📋 are planned for future versions.

| Feature | Status |
|---------|--------|
| Korean Alphabet Lessons (4 lessons) | ✅ MVP |
| Quiz System | ✅ MVP |
| XP & Level System | ✅ MVP |
| Audio Feedback | ✅ MVP |
| Nickname System | ✅ MVP |
| VIVERSE Login | ✅ MVP |
| Multiple Scenes | 📋 Future |
| Multiplayer | 📋 Future |
| Avatar SDK | 📋 Future |
| Leaderboard | 📋 Future |

---

## 1. Game Concept

### 1.1 Core Idea
"Woof Korean Academy" is an educational Korean learning game. Players enter a virtual academy run by dog teachers, learning Korean through campus exploration, NPC dialogue, and mini-games.

### 1.2 Target Audience
- **Primary**: Ages 13-25 who want to learn Korean
- **Secondary**: K-pop and K-drama fans
- **Learning Level**: Beginner to Intermediate

### 1.3 Unique Selling Points (USP)
- Cute dog characters reduce learning pressure
- 3D immersive environment increases engagement
- Multiplayer features promote social learning
- VIVERSE cross-platform support (PC, VR, Mobile)

---

## 2. Game Mechanics

### 2.1 Core Loop

**✅ MVP:**
```
Click Teacher → Learn Content → Take Quiz → Earn XP → Level Up
```

**📋 Future:**
```
Explore Campus → Meet Teachers → Learn → Mini-games → Rewards → Unlock Areas
```

### 2.2 Learning System

#### Korean Alphabet (한글)
| Stage | Content | Game Mode |
|-------|---------|----------|
| Vowels | ㅏㅓㅗㅜㅡㅣ | Listen & Select |
| Consonants | ㄱㄴㄷㄹㅁㅂㅅ... | Stroke Practice |
| Combinations | 가나다라... | Spelling Game |

#### Vocabulary Learning
- **Card Matching**: Korean ↔ English meaning
- **Picture Selection**: Choose Korean word from image
- **Listening Quiz**: Select correct word from pronunciation

#### Conversation Practice
- **Situational Dialogue**: Café ordering, asking directions, self-introduction
- **Response Selection**: Choose correct Korean response based on context
- **Role Play**: Practice dialogue with other players

### 2.3 Progress System

**✅ MVP:**
```
Level 1-10: Beginner (한글 vowels & consonants)
```

**📋 Future:**
```
Level 1-10: Beginner (한글 + Basic Words)
Level 11-20: Intermediate (Daily Conversations)
Level 21-30: Advanced (Complex Sentences)
```

#### XP Rewards
| Activity | XP | Status |
|----------|-----|--------|
| Complete a lesson | +50 XP | ✅ MVP |
| Perfect quiz score | +30 XP | 📋 Future |
| Daily login | +10 XP | 📋 Future |
| Multiplayer win | +40 XP | 📋 Future |

### 2.4 Reward System 📋 Future

- **Dog Stickers**: Collect various dog emoji stickers
- **Campus Decorations**: Unlock new campus area appearances
- **Avatar Costumes**: Dress up your Avatar
- **Leaderboard Badges**: Top 10 weekly players get special badges

---

## 3. Scene Design

### 3.1 Campus Map

**✅ MVP:** Single outdoor scene with Shiba Teacher

**📋 Future:**
```
        [Library]
           |
[Café]--[Courtyard]--[Classroom]
           |
        [Playground]
```

### 3.2 Scene Details

#### 🏫 Classroom ✅ MVP (Simplified)
- **Function**: Learn Korean alphabet, basic grammar
- **NPC**: Shiba Teacher
- **Interaction**: Dialogue teaching, quizzes
- **Atmosphere**: Warm, bright, outdoor campus

#### ☕ Café 📋 Future
- **Function**: Practice daily conversations, ordering
- **NPC**: Husky Barista
- **Interaction**: Menu ordering, NPC dialogue
- **Atmosphere**: Korean-style café, modern comfort

#### 📚 Library 📋 Future
- **Function**: Vocabulary learning, card matching
- **NPC**: Corgi Librarian
- **Interaction**: Browse books, vocabulary card wall
- **Atmosphere**: Quiet, wooden decor, bookish

#### 🏃 Playground 📋 Future
- **Function**: Multiplayer quiz competition, leaderboard
- **NPC**: Referee Dog
- **Interaction**: Join matches, view leaderboard
- **Atmosphere**: Lively, competitive, outdoor sports

---

## 4. Character Design

### 4.1 Dog Teachers

#### Shiba Teacher (시바샘) MVP
- **Personality**: Gentle, patient, encouraging
- **Teaches**: Beginner Korean, alphabet
- **Catchphrase**: "Well done! 화이팅!"
- **Appearance**: 3D Shiba with graduation cap

#### Husky Teacher (허스키샘) Future
- **Personality**: Energetic, funny, playful
- **Teaches**: Intermediate conversations
- **Catchphrase**: "Haha! This is easy~"
- **Appearance**: Baseball cap, café apron

#### Corgi Teacher (코기샘) Future
- **Personality**: Strict, serious, high standards
- **Teaches**: Advanced challenges, grammar
- **Catchphrase**: "Try harder!"
- **Appearance**: Suit, holding books

### 4.2 Player Character

**MVP:** Nickname-based identity

**Future:**
- VIVERSE Avatar SDK integration
- Custom appearance
- VR full-body tracking

---

## 5. User Interface (UI)

### 5.1 HUD Elements
```
┌─────────────────────────────────────┐
│ [Level Lv.5]  [XP ████░░ 230/500]   │
│                                     │
│                                     │
│              (Game View)            │
│                                     │
│                                     │
│ [📖Lessons] [🎮Games] [👥Multi] [⚙️Settings] │
└─────────────────────────────────────┘
```

### 5.2 Dialogue Interface
```
┌─────────────────────────────────────┐
│  🐕 Shiba Teacher                    │
│  ─────────────────────────────────  │
│  "안녕하세요! What shall we learn?"   │
│                                     │
│  [A] Learn 한글                       │
│  [B] Practice Words                 │
│  [C] Maybe Later                    │
└─────────────────────────────────────┘
```

---

## 6. Audio

### 6.1 Background Music 📋 Future
- **Campus Theme**: Cute K-pop style
- **Classroom**: Calm piano
- **Café**: Lofi hip-hop
- **Library**: Quiet ambient
- **Playground**: Energetic sports music

### 6.2 Sound Effects

**✅ MVP (Web Audio API generated tones):**
- Correct answer: High tone (880Hz)
- Wrong answer: Low tone (220Hz)
- Level up: Melody (523→659→784Hz)
- Lesson complete: Celebration melody

**📋 Future:**
- Dog bark sounds
- UI click sounds
- Korean pronunciation audio

---

## 7. Learning Content

### 7.1 Beginner (Lv.1-10)

| Lesson | Content | Status |
|--------|---------|--------|
| Lesson 1 | Korean Vowels: ㅏ ㅓ ㅗ ㅜ ㅣ | ✅ MVP |
| Lesson 2 | Korean Consonants: ㄱ ㄴ ㄷ ㄹ ㅁ | ✅ MVP |
| Lesson 3 | Basic Phrases: 안녕하세요, 감사합니다 | ✅ MVP |
| Lesson 4 | Numbers: 일 이 삼 사 오... | ✅ MVP |
| Lesson 5 | Self-introduction: 저는 ___입니다 | 📋 Future |
| Lesson 6 | Numbers 1-10 (native) | 📋 Future |
| Lesson 7 | Basic Words: Family | 📋 Future |
| Lesson 8 | Basic Words: Food | 📋 Future |
| Lesson 9 | Basic Words: Colors | 📋 Future |
| Lesson 10 | Beginner Review | 📋 Future |

### 7.2 Intermediate (Lv.11-20) 📋 Future

| Lesson | Content |
|--------|--------|
| Lesson 11 | Café Ordering |
| Lesson 12 | Asking Directions |
| Lesson 13 | Shopping Dialogue |
| Lesson 14 | Time Expressions |
| Lesson 15 | Weather Conversations |
| ... | ... |

---

## 8. Multiplayer 📋 Future

### 8.1 Multiplayer Classroom
- Up to 8 players in one class
- Learn together from teacher
- Practice dialogue with each other

### 8.2 Quiz Competition
- Real-time PK mode (1v1)
- Team battles (4v4)
- Weekly leaderboard

### 8.3 Social Features
- Friend system
- Study groups
- Chat room (practice Korean typing)

---

## 9. Future Roadmap

### Phase 2 (Next)
- [ ] More lessons (5-10)
- [ ] Leaderboard integration
- [ ] Avatar SDK integration
- [ ] Background music

### Phase 3
- [ ] Multiple scenes (Café, Library)
- [ ] More dog teacher characters
- [ ] Card matching mini-game
- [ ] Daily login rewards

### Phase 4
- [ ] Multiplayer classroom
- [ ] Real-time PK battles
- [ ] VR-specific interactions
- [ ] AI conversation practice
- [ ] Korean culture trivia
- [ ] Achievement system

# ✈️ Plane Quiz Adventure 💥

> A fun, interactive web game where **knowledge fuels your flight**!  
> Answer quiz questions correctly to help your airplane ✈️ advance along the progress bar 🚀  
> Unravel the story as you go — every right answer reveals a new chapter of your journey 📖  

---

## 🌍 Overview

Welcome to **Plane Quiz Adventure** – an educational + adventure mini-game designed with **PHP**, **JavaScript**, and **CSS**, running in a lightweight **Docker** environment 🐳.

### 💡 Goal:
Advance your airplane along a horizontal **progress bar runway** 🛫 by answering questions correctly. Each good answer **unlocks** a new **story panel**, drawing the player into a continuous narrative.

---

## 🎮 Gameplay Mechanics

- **🚀 Progress Bar Flight:**
  - Your airplane icon 🛩️ moves forward with each correct answer.
  - Wrong answers? ❌ Your plane stalls (but you can try 8 times per round).
  
- **📚 Story Mode:**
  - Every correct answer reveals a new part of the **story**.
  - Story can be historical, sci-fi, adventure — modular and customizable.
  
- **✅ Quiz Format:**
  - Multiple choice questions (MCQ)
  - 1 correct answer → 1 story panel unlocked + plane moves forward
  - Optional: timer ⏱️ for extra challenge

---

## 🛠️ Technologies Used

| Tech        | Description |
|-------------|-------------|
| 🐘 PHP       | Backend logic: questions, scoring, story logic |
| 🧠 JavaScript | Frontend interactivity, animations, progress control |
| 🎨 CSS       | Game interface styling, animations for plane, progress bar |
| 🐳 Docker    | Containerized setup for easy development & deployment |

## 📦 Docker Setup (Quick Start)

```bash
# Build and run the container
docker-compose up --build

# Visit the game at:
http://localhost:9000
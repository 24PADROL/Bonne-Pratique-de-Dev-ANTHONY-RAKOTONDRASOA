# Atelier KISS (Keep It Simple, Stupid) – Frontend

Atelier pour pratiquer le principe **KISS** : garder le code le plus simple possible tout en répondant au besoin.

---

## 🎯 Objectifs pédagogiques

- Identifier du code **trop complexe** pour un besoin simple.
- Simplifier la logique (conditions, structures, abstractions) sans changer le comportement.
- Appliquer KISS sur :
  - des conditions imbriquées,
  - des fonctions "over-engineered",
  - des abstractions inutiles.

> Rappel : **KISS ≠ code “sale”**, c’est du code clair, direct, sans sur-complexité.

---

## 🧱 Contexte de l’exercice

On développe une petite **liste de tâches** (todo list) avec 3 filtres :

- **Toutes** les tâches  
- Tâches **en cours**  
- Tâches **terminées**

Le code fonctionne, mais il a été écrit par quelqu’un qui aime **trop** les abstractions 😅  
Ton rôle : le **simplifier**.

---

## 📁 Structure du projet

Proposition de structure :

```text
.
├── index.html   # une page simple avec la liste et 3 boutons de filtre
└── main.js      # le code ci-dessous à simplifier

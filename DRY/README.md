# Atelier DRY (Don’t Repeat Yourself) – 

Atelier pour pratiquer le principe **DRY** en JavaScript (DOM + logique d’affichage).

---

## 🎯 Objectifs pédagogiques

- Identifier la **duplication de code** dans une base existante.
- Appliquer le principe **DRY** pour :
  - centraliser la logique d’affichage,
  - réduire le code dupliqué,
  - rendre le code plus facile à maintenir.
- Manipuler le DOM en JavaScript vanilla (sans framework).

---

## 🧱 Contexte de l’exercice

On dispose d’une petite page qui affiche une **liste de produits** avec trois actions possibles :

- Afficher **tous** les produits.
- Afficher uniquement les produits **en stock**.
- Afficher uniquement les produits **en promotion**.

Le code fonctionne, mais contient beaucoup de **logique répétée**.  
L’objectif est de le **refactoriser** pour respecter le principe DRY.

---

## 📁 Structure du projet

Exemple de structure minimale :

```text
.
├── index.html
└── main.js

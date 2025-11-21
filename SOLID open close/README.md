# Atelier OCP (Open/Closed Principle) – Frais de livraison

Atelier pour pratiquer le principe **Open/Closed** sur un cas simple :
calculer les frais de livraison selon le type de livraison choisi.

> Open/Closed : un module doit être **ouvert à l’extension** mais **fermé à la modification**.

---

## 🎯 Objectifs pédagogiques

- Identifier un design qui **viole OCP** (enchaînement de `if / else if`).
- Refactorer pour pouvoir **ajouter un nouveau type de livraison** sans modifier la fonction centrale.
- Manipuler un petit mapping d’handlers (stratégies) côté JavaScript.

---

## 🧱 Contexte

On a un mini formulaire qui permet de :

- saisir un montant de commande,
- choisir un **mode de livraison** :
  - `standard`
  - `express`
  - `pickup` (point relais),

Le code de départ calcule les **frais de livraison** avec une fonction `calculateShippingCost` bourrée de `if / else if`.  
Ton objectif : rendre ce calcul **extensible** (OCP).

---

## 📁 Structure du projet

```text
.
└── main.js

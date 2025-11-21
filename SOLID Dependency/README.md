# Atelier D – Dependency Inversion (EmailService)

Atelier pour pratiquer le principe **D** de SOLID :  
**Dependency Inversion Principle** – dépendre d’abstractions, pas de détails concrets.

---

## 🎯 Objectifs

- Repérer un **couplage fort** entre un service métier et une librairie externe.
- Introduire une **abstraction** (contrat) pour inverser la dépendance.
- Faciliter les **tests** (mock/fake) et le changement d’implémentation (SendGrid → autre).

---

## 🧱 Contexte

On a un service qui envoie des emails de bienvenue.  
Il est **directement couplé** à une librairie externe `sendgrid`.

Tu vas le refactorer pour :

- dépendre d’un **MailProvider** abstrait,
- pouvoir brancher facilement **SendGrid** en prod,
- et un **FakeMailProvider** en test.

---

## 📁 Structure proposée

```text
.
├── email-service.js    # code à refactorer

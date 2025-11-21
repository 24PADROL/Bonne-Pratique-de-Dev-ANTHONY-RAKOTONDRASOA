class EmailSender {
  async send({ to, subject, text }) {
    throw new Error('Méthode send() non implémentée');
  }
}

class SendGridEmailSender extends EmailSender {
  async send({ to, subject, text }) {
    console.log('[sendgrid] Email envoyé à', to, 'Sujet:', subject);
    console.log(text);
  }
}

class EmailService {
  constructor(emailSender) {
    this.emailSender = emailSender; // dépend de l'abstraction ✔️
  }

  async sendWelcomeEmail(user) {
    const subject = 'Bienvenue sur notre plateforme';
    const text = `Bonjour ${user.firstName},

Merci pour votre inscription.

À bientôt !`;

    await this.emailSender.send({ to: user.email, subject, text });
  }
}

const sendgridSender = new SendGridEmailSender();
const emailService = n

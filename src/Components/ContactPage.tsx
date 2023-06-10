import React, { FormEvent } from 'react';
import { Footer } from './Widget';

const ContactPage: React.FC = () => {

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Récupération des valeurs du formulaire
    const target = event.target as typeof event.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    const name = target.name.value;
    const email = target.email.value;
    const message = target.message.value;

    // Affichage des valeurs en console
    console.log('Nom :', name);
    console.log('Email :', email);
    console.log('Message :', message);


    // Vous pouvez ajouter ici votre logique d'envoi du formulaire vers un serveur, par exemple via une requête HTTP
  }

  return (
    <>
      <div id="contact" />
      <div className='contact-container'>
        <h1>Contact</h1>
        <div className="contact">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className='form-label'>Nom : </label>
              <input
                type="text"
                id='name'
                name="name"
                placeholder='Name'
                className='form-control' />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="message" className='form-label'>Message : </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message">
              </textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;

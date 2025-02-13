import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [cvLink] = useState('../../assets/ValentinPreuteseiCV (2).pdf'); // Replace with the actual path to your CV PDF

  return (
    <div className="contact-info">
      <p><strong>Teléfono:</strong> +34 603 14 98 70</p> {/* Replace with your actual phone number */}
      <p><strong>Email:</strong> valentinpreutesei@outlook.es</p> {/* Replace with your actual email */}
      <p>
        <strong>CV:</strong> 
        <a href={cvLink} download className="cv-link">Descargar CV (PDF)</a>
      </p>
    </div>
  );
};

export default ContactForm;

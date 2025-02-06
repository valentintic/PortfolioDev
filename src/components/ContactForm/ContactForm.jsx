import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.css'

const ContactForm = () => {
  const form = useRef()
  const [sending, setSending] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setSending(true)

    emailjs.sendForm(
      'service_id',
      'template_id',
      form.current,
      'public_key'
    )
    .then(() => {
      alert('Mensaje enviado!')
      form.current.reset()
    })
    .catch(() => alert('Error al enviar'))
    .finally(() => setSending(false))
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input name="user_name" placeholder="Nombre" required />
      <input name="user_email" type="email" placeholder="Email" required />
      <textarea name="message" rows="5" placeholder="Mensaje" required />
      <button type="submit" disabled={sending}>
        {sending ? 'Enviando...' : 'Enviar Mensaje'}
      </button>
    </form>
  )
}

export default ContactForm
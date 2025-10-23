import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    workType: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux appeler ton backend avec fetch ou axios
    console.log(formData);
    setStatus("Votre demande a été envoyée avec succès !");
    setFormData({
      name: "",
      phone: "",
      email: "",
      workType: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">
      <h1>Contactez-nous</h1>
      <p>Vous pouvez nous joindre via le formulaire ci-dessous ou par téléphone.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Nom :</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Téléphone :</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Email :</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Type de travaux :</label>
        <select
          name="workType"
          value={formData.workType}
          onChange={handleChange}
          required
        >
          <option value=""> Sélectionnez </option>
          <option value="Cuisine">Cuisine</option>
          <option value="Salle de bains">Salle de bains</option>
          <option value="Salon">Salon</option>
          <option value="Autre">Autre</option>
        </select>

        <label>Message :</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
        ></textarea>

        <button type="submit">Envoyer ma demande</button>
        <small>Réponse sous 48h – 100% gratuit</small>
        {status && <p className="status-message">{status}</p>}
      </form>
    </main>
  );
}

export default Contact;
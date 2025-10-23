import React, { useState } from "react";
import "./Contact.css"; // on réutilise le même CSS pour cohérence

function DevisForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    details: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux envoyer les données à ton backend
    console.log(formData);
    setStatus("Votre demande de devis a été envoyée !");
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      details: "",
    });
  };

  return (
    <main className="contact-page">
      <h1>Demande de devis gratuit</h1>
      <p>Remplissez le formulaire ci-dessous et recevez votre devis sous 48h.</p>

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

        <label>Service souhaité :</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">-- Sélectionnez --</option>
          <option value="Rénovation">Rénovation</option>
          <option value="Construction">Construction</option>
          <option value="Aménagement">Aménagement</option>
        </select>

        <label>Détails supplémentaires :</label>
        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
          rows="4"
        ></textarea>

        <button type="submit">Demander mon devis</button>
        <small>Réponse sous 48h – 100% gratuit</small>
        {status && <p className="status-message">{status}</p>}
      </form>
    </main>
  );
}

export default DevisForm;
import React from "react";

import { BsGeoAlt, BsPhone, BsEnvelope } from "react-icons/bs";

function Contact() {
  return (
    <main>
      <img
        src="/images/banner.jpg"
        alt="Bannière bleue"
        className="img-fluid w-100"
        style={{ height: "300px", objectFit: "cover" }}
      />

      <div className="container my-5">
        <div className="text-center mb-5">
          <h2 className="text-uppercase">Me contacter</h2>
          <p>
            Pour me contacter en vue d'un entretien ou d'une future
            collaboration, merci de remplir le formulaire de contact.
          </p>
          <div className="border-bottom border-primary border-3 w-25 mx-auto"></div>
        </div>

        {/* 3. LA GRILLE (Formulaire à gauche, Infos à droite) */}
        <div className="row">
          {/* Colonne de Gauche : Le Formulaire */}
          <div className="col-md-6 mb-4">
            <div className="card shadow border-0 p-4 h-100">
              <h3 className="mb-4 border-bottom pb-2">Formulaire de contact</h3>

              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Votre adresse email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Votre numéro de téléphone"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Sujet"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Votre message"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Colonne de Droite : Coordonnées et Google Maps */}
          <div className="col-md-6 mb-4">
            <div className="card shadow border-0 p-4 h-100">
              <h3 className="mb-4 border-bottom pb-2">Mes coordonnées</h3>

              <ul className="list-unstyled mb-4">
                <li className="mb-2">
                  <BsGeoAlt className="me-2" /> 40 Rue Laure Diebold, 69009
                  Lyon, France
                </li>
                <li className="mb-2">
                  <BsPhone className="me-2" /> 10 20 30 40 50
                </li>
                <li className="mb-2">
                  <BsEnvelope className="me-2" /> john.doe@gmail.com
                </li>
              </ul>

              {/* Intégration de la carte Google Maps (Iframe) */}
              <div className="ratio ratio-4x3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965754106!2d4.796403975767226!3d45.77866571240166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1708945678910!5m2!1sfr!2sfr"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Adresse John Doe"
                  className="rounded"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;

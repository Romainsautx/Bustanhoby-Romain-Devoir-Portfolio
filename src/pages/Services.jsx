import React from "react";
// Importation des icônes depuis react-icons
import { BsBrush, BsCodeSlash, BsSearch } from "react-icons/bs";

function Services() {
  return (
    <main>
      <img
        src="/images/banner.jpg"
        alt="Bannière abstraite bleue"
        className="img-fluid w-100"
        style={{ height: "300px", objectFit: "cover" }}
      />

      <div className="container my-5 text-center">
        <h2 className="mb-3">Mon offre de services</h2>
        <p>Voici les prestations sur lesquelles je peux intervenir.</p>
        <div className="border-bottom border-primary border-3 w-25 mx-auto mb-5"></div>

        <div className="row">
          {/* Carte 1 : Design graphique */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center p-4 service-card border-0 shadow-sm">
              <div className="card-body">
                <BsBrush
                  className="text-primary mb-3"
                  style={{ fontSize: "3rem" }}
                />
                <h4 className="card-title text-uppercase mb-3">UX Design</h4>
                <p className="card-text">
                  L'UX Design est une discipline qui consiste à concevoir des
                  produits (sites web, applications mobiles, logiciels, objets
                  connectés, etc.) en plaçant l'utilisateur au centre des
                  préoccupations. L'objectif est de rendre l'expérience
                  utilisateur la plus fluide et agréable possible.
                </p>
              </div>
            </div>
          </div>

          {/* Carte 2 : Développement web */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center p-4 service-card border-0 shadow-sm">
              <div className="card-body">
                <BsCodeSlash
                  className="text-primary mb-3"
                  style={{ fontSize: "3rem" }}
                />
                <h4 className="card-title text-uppercase mb-3">
                  Développement web
                </h4>
                <p className="card-text">
                  Le développement de sites web consiste à créer des sites
                  internet en utilisant des langages de programmation (HTML,
                  CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap,
                  React, Angular, etc.).
                </p>
              </div>
            </div>
          </div>

          {/* Carte 3 : Référencement */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center p-4 service-card border-0 shadow-sm">
              <div className="card-body">
                <BsSearch
                  className="text-primary mb-3"
                  style={{ fontSize: "3rem" }}
                />
                <h4 className="card-title text-uppercase mb-3">
                  Référencement
                </h4>
                <p className="card-text">
                  Le référencement naturel (SEO) est une technique qui consiste
                  à optimiser un site web pour le faire remonter dans les
                  résultats des moteurs de recherche (Google, Bing, Yahoo,
                  etc.). L'objectif est d'attirer un maximum de visiteurs
                  qualifiés sur le site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Services;

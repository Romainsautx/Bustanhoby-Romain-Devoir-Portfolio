import React from "react";

function Portfolio() {
  return (
    <main>
      <img
        src="/images/banner.jpg"
        alt="Bannière abstraite bleue"
        className="img-fluid w-100"
        style={{ height: "300px", objectFit: "cover" }}
      />

      {/* 2. LE CONTENU DE LA PAGE */}
      <div className="container my-5 text-center">
        {/* L'en-tête */}
        <h2 className="mb-3">Portfolio</h2>
        <p>Voici quelques-unes de mes réalisations.</p>
        <div className="border-bottom border-primary border-3 w-25 mx-auto mb-5"></div>

        {/* 3. LES 6 CARTES */}
        <div className="row">
          {/* Projet 1 : Fresh Food */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 portfolio-card border-0 shadow-sm">
              <img
                src="/images/fresh-food.jpg"
                className="card-img-top"
                alt="Légumes frais"
              />
              <div className="card-body">
                <h4 className="card-title">Fresh Food</h4>
                <p className="card-text">
                  Site de vente de produits frais en ligne
                </p>
                <a href="#" className="btn btn-primary btn-portfolio">
                  Voir le site
                </a>
              </div>
              <div className="card-footer bg-white text-muted">
                <small>Site réalisé avec PHP et MySQL</small>
              </div>
            </div>
          </div>

          {/* Projet 2 : Restaurant Akira */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 portfolio-card border-0 shadow-sm">
              <img
                src="/images/restaurant-japonais.jpg"
                className="card-img-top"
                alt="Sushis"
              />
              <div className="card-body">
                <h4 className="card-title">Restaurant Akira</h4>
                <p className="card-text">Site de présentation du restaurant</p>
                <a href="#" className="btn btn-primary btn-portfolio">
                  Voir le site
                </a>
              </div>
              <div className="card-footer bg-white text-muted">
                <small>Site réalisé avec WordPress</small>
              </div>
            </div>
          </div>

          {/* Projet 3 : Espace bien-être */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 portfolio-card border-0 shadow-sm">
              <img
                src="/images/espace-bien-etre.jpg"
                className="card-img-top"
                alt="Espace zen"
              />
              <div className="card-body">
                <h4 className="card-title">Espace bien-être</h4>
                <p className="card-text">
                  Site de présentation pour un espace de bien-être
                </p>
                <a href="#" className="btn btn-primary btn-portfolio">
                  Voir le site
                </a>
              </div>
              <div className="card-footer bg-white text-muted">
                <small>Site réalisé avec LARAVEL</small>
              </div>
            </div>
          </div>

          {/* Projet 4 : SEO */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 portfolio-card border-0 shadow-sm">
              <img
                src="/images/seo.jpg"
                className="card-img-top"
                alt="Mots clés SEO"
              />
              <div className="card-body">
                <h4 className="card-title">SEO</h4>
                <p className="card-text">
                  Amélioration du référencement d'un site e-commerce
                </p>
                <a href="#" className="btn btn-primary btn-portfolio">
                  Voir le site
                </a>
              </div>
              <div className="card-footer bg-white text-muted">
                <small>Utilisation des outils SEO</small>
              </div>
            </div>
          </div>

          {/* Projet 5 : Création d'une API */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 portfolio-card border-0 shadow-sm">
              <img
                src="/images/coder.jpg"
                className="card-img-top"
                alt="Code informatique"
              />
              <div className="card-body">
                <h4 className="card-title">Création d'une API</h4>
                <p className="card-text">
                  Création d'une API RESTFULL publique
                </p>
                <a href="#" className="btn btn-primary btn-portfolio">
                  Voir le site
                </a>
              </div>
              <div className="card-footer bg-white text-muted">
                <small>PHP - SYMFONY</small>
              </div>
            </div>
          </div>

          {/* Projet 6 : Maquette d'un site */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 portfolio-card border-0 shadow-sm">
              <img
                src="/images/screens.jpg"
                className="card-img-top"
                alt="Ordinateur et tablette"
              />
              <div className="card-body">
                <h4 className="card-title">Maquette d'un site web</h4>
                <p className="card-text">Création du prototype d'un site</p>
                <a href="#" className="btn btn-primary btn-portfolio">
                  Voir le site
                </a>
              </div>
              <div className="card-footer bg-white text-muted">
                <small>Réalisé avec FIGMA</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Portfolio;

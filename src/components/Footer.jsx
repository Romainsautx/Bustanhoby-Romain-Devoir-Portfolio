import React from "react";
import { Link } from "react-router-dom";

import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-auto">
      <div className="container">
        <div className="row">
          {/* Colonne 1 : Coordonnées et Réseaux */}
          <div className="col-md-4 mb-4">
            <h4>John Doe</h4>
            <ul className="list-unstyled">
              <li>40 Rue Laure Diebold</li>
              <li>69009 Lyon, France</li>
              <li>10 20 30 40 50</li>
              <li>john.doe@gmail.com</li>
            </ul>
            <div className="mt-3">
              <a
                href="https://github.com/github-john-doe"
                target="_blank"
                rel="nofollow noreferrer"
                className="social-icon me-3"
              >
                <BsGithub />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="nofollow noreferrer"
                className="social-icon me-3"
              >
                <BsTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="nofollow noreferrer"
                className="social-icon"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Liens utiles */}
          <div className="col-md-4 mb-4">
            <h4>Liens utiles</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Me contacter
                </Link>
              </li>
              <li>
                <Link to="/legal" className="footer-link">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Mes dernières réalisations */}
          <div className="col-md-4 mb-4">
            <h4>Mes dernières réalisations</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/portfolio" className="footer-link">
                  Fresh Food
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link">
                  Restaurant Akira
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link">
                  Espace bien-être
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link">
                  SEO
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link">
                  Création d'une API
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link">
                  Maquette d'un site
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* La petite barre de copyright tout en bas (optionnelle mais très pro) */}
      <div className="text-center mt-4 pt-3 border-top border-secondary">
        <small>&copy; Designed by John Doe</small>
      </div>
    </footer>
  );
}

export default Footer;

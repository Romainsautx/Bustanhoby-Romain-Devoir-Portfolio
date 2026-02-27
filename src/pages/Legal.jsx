import React, { useEffect } from "react";
import { BsGeoAlt, BsPhone, BsEnvelope, BsGlobe } from "react-icons/bs";

function Legal() {
  useEffect(() => {
    const metaRobots = document.createElement("meta");
    metaRobots.name = "robots";
    metaRobots.content = "noindex, nofollow";
    document.head.appendChild(metaRobots);

    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  return (
    <main className="container my-5">
      <div className="text-center mb-5">
        <h2 className="text-uppercase">Mentions légales</h2>
        <div className="border-bottom border-primary border-3 w-25 mx-auto mt-3"></div>
      </div>

      {/* COMPOSANT ACCORDÉON BOOTSTRAP */}
      <div className="accordion shadow-sm" id="accordionLegal">
        {/* Panneau 1 : Editeur du site */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Éditeur du site
            </button>
          </h2>

          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionLegal"
          >
            <div className="accordion-body">
              <h4>John Doe</h4>
              <ul className="list-unstyled">
                <li>
                  <BsGeoAlt className="me-2" /> 40 Rue Laure Diebold
                </li>
                <li>69009 Lyon, France</li>
                <li>
                  <BsPhone className="me-2" /> 10 20 30 40 50
                </li>
                <li>
                  <BsEnvelope className="me-2" />{" "}
                  <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Panneau 2 : Hébergeur */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Hébergeur
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionLegal"
          >
            <div className="accordion-body">
              <h4>alwaysdata</h4>
              <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
              <p>
                <BsGlobe className="me-2" />{" "}
                <a
                  href="https://www.alwaysdata.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.alwaysdata.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Panneau 3 : Crédits */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Crédits
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionLegal"
          >
            <div className="accordion-body">
              <h4>Crédits</h4>
              <p>
                Ce site a été réalisé par John Doe, étudiant au{" "}
                <a
                  href="https://www.centre-europeen-formation.fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Centre Européen de formation
                </a>
                .
              </p>
              <p>
                Les images utilisées sur ce site sont libres de droits et ont
                été obtenues sur le site{" "}
                <a href="https://pixabay.com/" target="_blank" rel="noreferrer">
                  Pixabay
                </a>
                .
              </p>
              <p>
                La favicon de ce site a été fournie par{" "}
                <a
                  href="https://www.flaticon.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  John doe Icons erstellt von Freepik - Flaticon
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Legal;

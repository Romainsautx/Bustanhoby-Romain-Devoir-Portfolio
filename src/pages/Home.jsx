import React, { useState, useEffect } from "react";

import { BsPerson, BsGeoAlt, BsBox, BsPeople } from "react-icons/bs";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    const fetchGithubProfile = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/github-john-doe",
        );
        const data = await response.json();
        setGithubData(data);
      } catch (error) {
        console.log("Erreur lors de la récupération des données GitHub", error);
      }
    };
    fetchGithubProfile();
  }, []);

  return (
    <main>
      {/* SECTION HERO */}
      <section
        className="d-flex flex-column justify-content-center align-items-center text-white text-center"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay",
        }}
      >
        <h1 className="display-4 fw-bold mb-3">Bonjour, je suis John Doe</h1>
        <h2 className="mb-4">Développeur web full stack</h2>
        <button
          className="btn btn-danger btn-lg"
          onClick={() => setShowModal(true)}
        >
          En savoir plus
        </button>
      </section>

      {/* SECTION À PROPOS & COMPÉTENCES */}
      <section className="container my-5">
        <div className="card shadow border-0 p-4">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <h3 className="mb-3 border-bottom border-primary border-3 pb-2 d-inline-block">
                A propos
              </h3>
              <img
                src="/images/john-doe-about.jpg"
                alt="John Doe"
                className="img-fluid mb-3 rounded"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                necessitatibus consectetur tempore perferendis nostrum, ex
                delectus reiciendis impedit aut iure enim placeat? Natus, neque
                at?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                necessitatibus consectetur tempore perferendis nostrum, ex
                delectus reiciendis impedit aut iure enim placeat? Natus, neque
                at?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                necessitatibus consectetur tempore perferendis nostrum, ex
                delectus reiciendis impedit aut iure enim placeat? Natus, neque
                at?
              </p>
            </div>

            <div className="col-md-6">
              <h3 className="mb-3 border-bottom border-primary border-3 pb-2 d-inline-block">
                Mes compétences
              </h3>

              <div className="mb-3">
                <label className="fw-bold mb-1">HTML5 90%</label>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-3">
                <label className="fw-bold mb-1">CSS3 80%</label>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-3">
                <label className="fw-bold mb-1">JAVASCRIPT 70%</label>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-3">
                <label className="fw-bold mb-1">PHP 60%</label>
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-3">
                <label className="fw-bold mb-1">REACT 50%</label>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LA MODALE */}
      {showModal && (
        <div
          className="modal show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header border-secondary">
                <h5 className="modal-title">Mon profil GitHub</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                {githubData ? (
                  <div className="text-center text-md-start d-md-flex align-items-center">
                    <img
                      src={githubData.avatar_url}
                      alt="Avatar de profil"
                      className="img-fluid rounded mb-3 mb-md-0 me-md-4"
                      style={{ maxWidth: "150px" }}
                    />
                    <div>
                      <ul className="list-unstyled text-start mb-0">
                        <li className="mb-2">
                          <BsPerson className="me-2" />{" "}
                          <a
                            href={githubData.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-white text-decoration-none border-bottom"
                          >
                            {githubData.name || githubData.login}
                          </a>
                        </li>
                        <li className="mb-2">
                          <BsGeoAlt className="me-2" />{" "}
                          {githubData.location || "Non renseigné"}
                        </li>
                        <li className="mb-2">
                          <BsBox className="me-2" /> Repositories :{" "}
                          {githubData.public_repos}
                        </li>
                        <li className="mb-2">
                          <BsPeople className="me-2" /> Followers :{" "}
                          {githubData.followers}
                        </li>
                        <li className="mb-2">
                          <BsPeople className="me-2" /> Following :{" "}
                          {githubData.following}
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <p className="text-center">Chargement des données...</p>
                )}
              </div>
              <div className="modal-footer border-secondary">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;

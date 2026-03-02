import React from "react";

// Le composant reçoit des "props" (les données personnalisées de chaque projet)
function RealisationCard({ title, description, image, techno, link }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 portfolio-card border-0 shadow-sm">
        {/* On utilise les props à la place du texte en dur */}
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
          <a href={link} className="btn btn-primary btn-portfolio">
            Voir le site
          </a>
        </div>
        <div className="card-footer bg-white text-muted">
          <small>{techno}</small>
        </div>
      </div>
    </div>
  );
}

export default RealisationCard;

import React from "react";
import RealisationCard from "../components/RealisationCard"; // On importe notre moule

// 1. Notre "Base de données" locale : un tableau contenant les infos de nos 6 projets
const mesProjets = [
  {
    id: 1,
    title: "Fresh Food",
    description: "Site de vente de produits frais en ligne",
    image: "/images/fresh-food.jpg",
    techno: "Site réalisé avec PHP et MySQL",
    link: "#",
  },
  {
    id: 2,
    title: "Restaurant Akira",
    description: "Site de présentation du restaurant",
    image: "/images/restaurant-japonais.jpg",
    techno: "Site réalisé avec WordPress",
    link: "#",
  },
  {
    id: 3,
    title: "Espace bien-être",
    description: "Site de vente de produits bien-être en ligne",
    image: "/images/espace-bien-etre.jpg",
    techno: "Site réalisé avec LARAVEL",
    link: "#",
  },
  {
    id: 4,
    title: "SEO",
    description: "Amélioration du référencement naturel d'un site e-commerce",
    image: "/images/seo.jpg",
    techno: "Utilisation des outils SEO",
    link: "#",
  },
  {
    id: 5,
    title: "Création d'une API",
    description: "Création d'une API RESTFULL publique",
    image: "/images/coder.jpg",
    techno: "PHP-SYMFONY",
    link: "#",
  },
  {
    id: 6,
    title: "Maquette d'un site web",
    description: "Création du prototypa d'un site",
    image: "/images/screens.jpg",
    techno: "Réalisé avec FIGMA",
    link: "#",
  },
];

function Portfolio() {
  return (
    <main>
      <div className="container my-5 text-center">
        <h2 className="mb-3">Portfolio</h2>

        <div className="row">
          {/* 2. La magie de React : on boucle sur notre tableau */}
          {mesProjets.map((projet) => (
            <RealisationCard
              key={projet.id}
              title={projet.title}
              description={projet.description}
              image={projet.image}
              techno={projet.techno}
              link={projet.link}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Portfolio;

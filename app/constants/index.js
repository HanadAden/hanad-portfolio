import thymio_robot from "../_components/images/ori-thymio-ii-robot-educatif-open-source-1194.png";
import carcassonne_game from "../_components/images/carcassonne_game.jpeg";
//import university_site from "../_components/images/university_site.png";
import mercure_hotel from "../_components/images/Mercure_Hotels_Logo_2013.svg.png";
//import navona_hotel from "../_components/images/company/navona_hotel.png";
import mcdonalds_turkey from "../_components/images/macdo.png";
import grand_marche_istanbul from "../_components/images/supermaistanbul.jpeg";
import UPVD from "../_components/images/education/UPVD_.jpeg";
import mersinUniversty from "../_components/images/education/mersin.png";



const experiences = [
    {
        title: "Employé polyvalent d'hôtellerie – Petit-déjeuner et Réception",
        company: "Hôtel Mercure Beaux-Arts Lyon",
        type: "Temps partiel",
        date: "Depuis novembre 2024",
        description: [
            "Préparer les tables, disposer les plats et recharger le buffet régulièrement.",
            "Accueillir les clients avec professionnalisme et vérifier leurs réservations.",
            "Expliquer les politiques de l’hôtel et fournir des informations sur les services et activités locales."
        ],
        languages: ["Service client", "Gestion d'espace", "Communication"],
        icon: mercure_hotel,
    },
    {
        title: "Service clientèle",
        company: "McDonald's Turquie",
        type: "Temps partiel",
        date: "Juin 2021 - Août 2021",
        description: [
            "Accueillir et conseiller les clients.",
            "Préparation des produits, encaissement et respect des normes d’hygiène."
        ],
        languages: ["Service client", "Règles d'hygiène", "Gestion de caisse"],
        icon: mcdonalds_turkey,
    },
    {
        title: "Commerçant dans un marché",
        company: "Grand Marché Istanbul",
        type: "Saisonnier",
        date: "Mai 2020 - Août 2020",
        description: [
            "Accueillir et conseiller les clients sur les produits disponibles.",
            "Étiquetage, installation des stands et gestion des stocks."
        ],
        languages: ["Vente", "Logistique", "Relation client"],
        icon: grand_marche_istanbul,
    }
];

const projects = [
    {
        name: "Robot Thymio",
        description: "Développement et programmation du robot Thymio pour réaliser des déplacements autonomes et détecter des obstacles en utilisant des capteurs intégrés.",
        tags: [
            { name: "Python", color: "#3776AB" },
            { name: "Capteurs", color: "#FF5733" }
        ],
        image: thymio_robot,
        source_code_link: "https://github.com/HanadAden",
        live_link: "https://github.com/HanadAden",
    },
    {
        name: "Jeu de Carcassonne",
        description: "Développement d'une version numérique du jeu de Carcassonne en C, intégrant la gestion des règles et la logique de placement des tuiles.",
        tags: [
            { name: "C", color: "#A8B9CC" },
            { name: "Game Logic", color: "#F39C12" }
        ],
        image: carcassonne_game,
        source_code_link: "https://github.com/HanadAden/ProjetProgcarca",
        live_link: "https://github.com/HanadAden/ProjetProgcarca",
    },
    {
        name: "Site Universitaire DUT",
        description: "Développement d'un site web pour l'université de Perpignan dans le cadre d'un projet d'étude.",
        tags: [
            { name: "HTML/CSS", color: "#E34F26" },
            { name: "PHP", color: "#777BB4" },
            { name: "MySQL", color: "#4479A1" }
        ],
        image: carcassonne_game,
        source_code_link: "https://github.com/HanadAden/admisys",
        live_link: "https://github.com/HanadAden/admisys",
    }
];

const educations = [
    {
        degree: "Licence 2 Informatique",
        school: "Université de Perpignan",
        date: "Depuis 2023",
        description: [
            "Cours pertinents : Structures de données, Algorithmes, Développement web, Réseaux informatiques."
        ],
        icon: UPVD,
    },
    {
        degree: "Licence Informatique, Technologique et Système d’information",
        school: "Mersin Université de Turquie",
        date: "2021",
        description: [
            "Cours suivis : Développement logiciel, Gestion de bases de données, Systèmes d’exploitation."
        ],
        icon: mersinUniversty,
    }
];
export { projects, experiences, educations };

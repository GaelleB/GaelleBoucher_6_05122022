    // Fonction pour récupérer les données des photographes
    async function getPhotographers() {
        return await (await fetch('../../data/photographers.json')).json();
    }

    // Fonction pour afficher les photographes sur la page d'accueuil
    async function displayData(photographers) {
        console.log(photographers);
        const photographersSection = document.querySelector(".photographer_section");
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM,);
        });
    };

    // Fonction pour afficher les photographes sur la page d'accueuil au moment du chargement de la page
    async function init() {
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    init();
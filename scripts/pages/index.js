    // Fonction pour récupérer les données des photographes
    async function getPhotographers() {
        return await (await fetch('../../data/photographers.json')).json();
    }

    // Fonction pour afficher les photographes sur la page d'accueuil
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);

            const link = document.createElement('a');
            link.setAttribute('href', `photographer.html?id=${photographer.id}`);
            link.setAttribute('title', `Lien vers ${photographer.name}`);
            link.style.textDecoration = 'none';
            link.appendChild(userCardDOM);
            photographersSection.appendChild(link);
        });
    };

    // Fonction pour afficher les photographes sur la page d'accueuil au moment du chargement de la page
    async function init() {
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    init();
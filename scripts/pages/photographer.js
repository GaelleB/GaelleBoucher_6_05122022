    // Fonction pour récupérer les données des photographes
    async function getPhotographers() {
        return await (await fetch('../../data/photographers.json')).json();
    }

    // Fonction pour afficher les photographes sur la page photographe
    async function displayData(photographer) {
        const photographerHeader = document.querySelector('.photograph-header');
        const btnContact = document.querySelector('.contact_button');
                const photographerModel = photographerFactory(photographer);
                const sectionHeader = photographerModel.photographerProfile();
                photographerHeader.insertBefore(sectionHeader, btnContact);
    };

    // Fonction pour afficher les photographes sur la page photographe au moment du chargement de la page
    async function init() {
        const { photographer } = await getPhotographers();
        displayPhotographe(photographer);
    };
    init();
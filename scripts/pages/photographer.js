    // Fonction pour récupérer les données des photographes
    async function getPhotographers() {
        const response = await fetch("../../data/photographers.json")
        const photographersData = await response.json()
        console.log(photographersData)
        return photographersData
    }

    function getPhotographerId(){
        const url = new URL(window.location)
        const photographerId = parseInt(url.searchParams.get("id"), 10)
        return photographerId
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
        const { photographers } = await getPhotographers();
        const photographerId = getPhotographerId()
        const foundPhotographer = photographers.find((photographer) => photographer.id === photographerId)
        displayData(foundPhotographer);
    };
    init();
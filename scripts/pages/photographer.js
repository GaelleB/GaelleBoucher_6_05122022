    // Fonction pour récupérer les données des photographes
    async function getPhotographers() {
        const response = await fetch("../../data/photographers.json")
        const photographersData = await response.json()
        console.log(photographersData)
        return photographersData
    }

    // Fonction pour récupérer l'id dans l'URL
    function getPhotographerId(){
        const url = new URL(window.location)
        const photographerId = parseInt(url.searchParams.get("id"), 10)
        return photographerId
    }

    // Fonction pour afficher le photographe sur la page photographe
    async function displayDataPhotographer(photographer) {
        const photographerHeader = document.querySelector('.photograph-header');
        const photographerModel = photographerFactory(photographer);
        const sectionHeader = photographerModel.photographerProfile();
        photographerHeader.insertAdjacentHTML("afterbegin", sectionHeader);
        console.log(sectionHeader);
    };

    async function displayDataMedias(medias) {
        const mediaContainer = document.querySelector('main');
        medias.forEach((media) => {
            const mediaModel = mediaFactory(media);
            const mediaCardHTML = mediaModel.getMediaCardHTML();
            mediaContainer.insertAdjacentHTML(mediaCardHTML);
            console.log(mediaModel);
        });
    };

    // Fonction pour afficher les photographes sur la page photographe au moment du chargement de la page
    async function init() {
        const { photographers } = await getPhotographers();
        const photographerId = getPhotographerId()
        const foundPhotographer = photographers.find((photographer) => photographer.id === photographerId)
        displayDataPhotographer(foundPhotographer);
    };
    init();
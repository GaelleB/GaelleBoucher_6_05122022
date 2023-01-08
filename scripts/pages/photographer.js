    // Fonction pour récupérer les données des photographes
    async function getPhotographers() {
        const response = await fetch("../../data/photographers.json")
        const photographersData = await response.json();
        console.log(photographersData);
        return photographersData;
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
        const mediaContainer = document.querySelector('.photographer-medias');
        medias.forEach((media) => {
            const mediaModel = mediaFactory(media);
            const mediaCardHTML = mediaModel.getMediaCardHTML();
            mediaContainer.insertAdjacentElement("beforeend", mediaCardHTML);
            console.log(mediaModel);
        });
    };

    function getPhotographerMedias(medias, photographerId) {
        return medias.filter(media => media.photographerId === photographerId);
    }

    function getTotalLikes() {
        const likeCountElements = document.querySelectorAll(".likes-count");
        let totalLikes = 0;

        likeCountElements.forEach((likeCountElement) => {
            const likeCountNumber = parseInt(likeCountElement.innerText, 10);
            totalLikes += likeCountNumber;
            console.log(likeCountNumber);
        });

        const totalLikesElement = document.querySelector(".total-likes");
        totalLikesElement.innerText = totalLikes;
    }

    function getPrice(photographer) {
        const photoPriceElement = document.querySelector(".photoPrice");
        photoPriceElement.innerText = `${photographer.price} € / jour`;
        console.log(photoPriceElement);
    };

    // Fonction pour afficher les photographes sur la page photographe au moment du chargement de la page
    async function init() {
        const { photographers, media } = await getPhotographers();
        const photographerId = getPhotographerId()
        const foundPhotographer = photographers.find((photographer) => photographer.id === photographerId)
        displayDataPhotographer(foundPhotographer);
        const photographerMedias = getPhotographerMedias(media, photographerId);
        displayDataMedias(photographerMedias);
        getTotalLikes();
        getPrice(photographers);
    };
    init();
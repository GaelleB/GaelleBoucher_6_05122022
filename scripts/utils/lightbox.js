const closeLightboxButton = document.querySelector(".lightbox__close");
const nextLigthboxButton = document.querySelector(".lightbox__next");
const previousLigthboxButton = document.querySelector(".lightbox__prev");

closeLightboxButton.addEventListener("click", closeLightboxMedia);
nextLigthboxButton.addEventListener("click", nextLightboxMedia);
previousLigthboxButton.addEventListener("click", previousLightboxMedia);

function nextLightboxMedia() {
    const lighboxDisplayedMedia = document.querySelector(`.lightbox__container article[data-id]:not(.hide)`);
    lighboxDisplayedMedia.classList.add("hide");

    const clickedLinkId = parseInt(lighboxDisplayedMedia.dataset.id, 10);
    const indexInPhotographerMedias = photographerMedias.findIndex((media) => media.id === clickedLinkId);
    const nextMediaIndex = indexInPhotographerMedias + 1;


if (photographerMedias[nextMediaIndex] !== undefined) {
    // on affiche le prochain
    const nextMediaId = photographerMedias[nextMediaIndex].id;
    const nextMediaArticle = document.querySelector(`.lightbox__container article[data-id="${nextMediaId}"]`);
    nextMediaArticle.classList.remove("hide");
} else {
    const firstMediaId = photographerMedias[0].id;
    const firstMediaArticle = document.querySelector(`.lightbox__container article[data-id="${firstMediaId}"]`);
    firstMediaArticle.classList.remove("hide");
}
}

function previousLightboxMedia() {
    const lighboxDisplayedMedia = document.querySelector(`.lightbox__container article[data-id]:not(.hide)`);
    lighboxDisplayedMedia.classList.add("hide");

    const clickedLinkId = parseInt(lighboxDisplayedMedia.dataset.id, 10);
    const indexInPhotographerMedias = photographerMedias.findIndex((media) => media.id === clickedLinkId);
    const nextMediaIndex = indexInPhotographerMedias - 1;


if (photographerMedias[nextMediaIndex] !== undefined) {
    // on affiche le prochain
    const nextMediaId = photographerMedias[nextMediaIndex].id;
    const nextMediaArticle = document.querySelector(`.lightbox__container article[data-id="${nextMediaId}"]`);
    nextMediaArticle.classList.remove("hide");
} else {
    const lastMediaId = photographerMedias.at(-1).id;
    const lastMediaArticle = document.querySelector(`.lightbox__container article[data-id="${lastMediaId}"]`);
    lastMediaArticle.classList.remove("hide");
}
}

function closeLightboxMedia() {
    const lighboxModal = document.querySelector(".lightbox");
    lighboxModal.classList.add("hide");

    const lighboxDisplayedMedia = document.querySelector(`.lightbox__container article[data-id]:not(.hide)`);
    lighboxDisplayedMedia.classList.add("hide");
}

function openLightbox() {
    const lighboxModal = document.querySelector(".lightbox");
    lighboxModal.classList.remove("hide");
}
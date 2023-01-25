function lighboxFactory(data) {
    const { title, video, image, likes, id, photographerId } = data;
    const videoSrc = `../assets/photographers/medias/${photographerId}/${video}`;
    const picture = `../assets/photographers/medias/${photographerId}/${image}`;

    function getLightboxCardHTML() {
        if (video) {
            return `
            <article class="hide" data-id="${id}">
                <video class="media-img" autoplay>
                    <source src="${videoSrc}" type="video/mp4">
                </video>
                <div class="infos-media">
                    <p class="title">${title}</p>
                </div>
            </article>
            `;
        }

        if (image) {
            return `
            <article class="hide" data-id="${id}">
                <img class="media-img" src="${picture}" alt="Titre de l'image ${title}"/>
                <div class="infos-media">
                    <p class="title">${title}</p>
                </div>
            </article>
            `;
    }
    }

    return { title, picture, videoSrc, likes, getLightboxCardHTML };
}
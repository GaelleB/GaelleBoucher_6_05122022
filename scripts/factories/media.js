function mediaFactory(data){
    const {title, video, image, likes, id, photographerId} = data;
    const videoSrc = `../assets/photographers/medias/${photographerId}/${video}`;
    const picture = `../assets/photographers/medias/${photographerId}/${image}`;
    
    function getMediaCardHTML() {
        const mediaCardHTML = document.createElement('section');
        mediaCardHTML.classList.add('media-card');
        if(video){
            mediaCardHTML.innerHTML = `
            <article>
                <a href="#">
                    <source src="${videoSrc}" type="mp4">
                </a>
                <div class="infos-media">
                    <p class="title">${title}</p>
                    <div class="likes">
                        <p class="likes-count">${likes}</p> <i class="fa-solid fa-heart"></i>
                    </div>
                </div>
            </article>
            `
            return mediaCardHTML;
        }

        if(image){
            mediaCardHTML.innerHTML = `
            <article>
                <a href="#">
                    <img class="media-img" src="${picture}" alt="Titre de l'image ${title}"/>
                </a>
                <div class="infos-media">
                    <p class="title">${title}</p>
                    <div class="likes">
                        <p class="likes-count">${likes}</p> <i class="fa-solid fa-heart"></i>
                    </div>
                </div>
            </article>
            `
            return mediaCardHTML;
        }
    }

    return { title, picture, videoSrc, likes, getMediaCardHTML }
}
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
                    <video class="media-img" autoplay>
                        <source src="${videoSrc}" type="video/mp4">
                    </video>
                </a>
                <div class="infos-media">
                    <p class="title">${title}</p>
                    <div class="likes">
                        <p class="likes-count">${likes}</p>
                        <button class="like-button"><i class="fas fa-heart"></i></button>
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
                        <p class="likes-count">${likes}</p> 
                        <button class="like-button"><i class="fas fa-heart"></i></button>
                    </div>
                </div>
            </article>
            `
            return mediaCardHTML;
        }
    }

    return { title, picture, videoSrc, likes, getMediaCardHTML }
}
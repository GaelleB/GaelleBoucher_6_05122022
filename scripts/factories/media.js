function mediaFactory(data, photographerMedias) {
    const { title, video, image, likes, id, photographerId } = data;
    const videoSrc = `../assets/photographers/medias/${photographerId}/${video}`;
    const picture = `../assets/photographers/medias/${photographerId}/${image}`;

    function getMediaCardHTML() {
        const mediaCardHTML = document.createElement('section');
        mediaCardHTML.classList.add('media-card');
        if (video) {
            mediaCardHTML.innerHTML = `
            <article>
                <a href="#" data-id="${id}">
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
            `;
        }

        if (image) {
            mediaCardHTML.innerHTML = `
            <article>
                <a href="#" data-id="${id}">
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
            `;
        }
        const likeButton = mediaCardHTML.querySelector(".like-button");
        likeButton.addEventListener("click", () => {
            const mediaLikeElement = likeButton.previousElementSibling;
            let mediaLikes = parseInt(mediaLikeElement.innerText, 10);

            const totalLikesElement = document.querySelector(".total-likes");
            let totalLikes = parseInt(totalLikesElement.innerText, 10);
            const isMediaLiked = likeButton.classList.contains("liked");

            if (isMediaLiked) {
                totalLikes--;
                mediaLikes--;
                likeButton.classList.remove("liked");
            } else {
                totalLikes++;
                mediaLikes++;
                likeButton.classList.add("liked");
            }

            totalLikesElement.innerText = totalLikes;
            mediaLikeElement.innerText = mediaLikes;
        });

        const mediaLink = mediaCardHTML.querySelector("a");
        mediaLink.addEventListener("click", (event) => {
            openLightbox();
            const clickedLink = event.currentTarget;
            const clickedLinkId = parseInt(clickedLink.dataset.id, 10);
            const lighboxTargetMedia = document.querySelector(`.lightbox__container article[data-id="${clickedLinkId}"]`);
            lighboxTargetMedia.classList.remove("hide");
        });

        return mediaCardHTML;
    }

    return { title, picture, videoSrc, likes, getMediaCardHTML };
}
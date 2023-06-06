function handleChange() {
    const selectMenu = document.getElementById("sort-medias");
    const selectValue = selectMenu.value;
    switch (selectValue) {
        case "popularity": {
        photographerMedias.sort((a, b) => {
            return b.likes - a.likes;
        });
        break;
        }
        case "date": {
        photographerMedias.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        break;
        }
        case "title": {
        photographerMedias.sort((a, b) => {
            return a.title.localeCompare(b.title);
        });
        }
    }

    displayDataMedias(photographerMedias);
    displayLightboxMedias(photographerMedias);
}
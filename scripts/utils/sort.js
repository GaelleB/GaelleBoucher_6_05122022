const menuSelect = document.getElementById('sort-medias');
menuSelect.addEventListener('change', function() {
    const photographerMedias = [photographerMedias];
    displayDataMedias();
    displayLightboxMedias(photographerMedias);
    photographerMedias.sort()
});
console.log(menuSelect.value);
console.log(photographerMedias);
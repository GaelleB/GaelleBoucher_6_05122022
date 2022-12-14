function photographerFactory(data) {
    const { name, portrait, city, country, id, price, tagline } = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.innerHTML = `
            <a href="./photographer.html?id=${id}" title="Lien vers ${name}"">
                <img src="${picture}" alt="Portrait de ${name}"/>
                <h2>${name}</h2>
            </a>
            <p class="location">${city}, ${country}</p>
            <p class="tagline">${tagline}</p>
            <p class="price">${price}€/jour</p>
        `
        return (article);
    }

    function photographerProfile() {
        const sectionHeader = document.createElement('div');
        sectionHeader.innerHTML = `
        <div>
            <h1>${name}</h1>
            <h2 class="location">${city}, ${country}</h2>
            <p class="tagline">${tagline}</p>
        </div>
        <img src="${picture}" alt="Portrait de ${name}"/>
        `
        return (sectionHeader);
    }

    return { name, picture, location, tagline, getUserCardDOM, photographerProfile }
}
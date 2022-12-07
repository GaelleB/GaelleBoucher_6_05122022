function photographerFactory(data) {
    const { name, portrait, city, country, id, price, tagline } = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const location = document.createElement('p');
        const tag = document.createElement('p');
        const prix = document.createElement('p');

        img.setAttribute("src", picture);
        h2.innerText = name;

        location.classList.add("location");
        location.innerText = `${city}, ${country}`;

        tag.classList.add("tagline");
        tag.innerText = data.tagline;

        prix.classList.add("price");
        prix.innerText = `${price}€/jour`;
        
        article.append(img, h2, location, tag, prix);
        return (article);
    }
    return { name, picture, tagline, getUserCardDOM }
}
export class Movie {
    constructor(title, director, year, rating) {
        this.title = title;
        this.director = director;
        this.year = year;
        this.rating = rating;
    }

    Render() 
    {
        let card = document.createElement("div");
        card.classList.add("movie-card");

        //Agrega un estilo especial a las películas con una puntuación de 8 o más
        if (this.rating >= 8) {
            card.classList.add("top-rated");
        }

        card.innerHTML = `
            <h2>${this.title}</h2>
            <p>Director: ${this.director}</p>
            <p>Year: ${this.year}</p>
            <p>Rating: ${this.rating}/10</p>
        `;

        return card;
    }
}
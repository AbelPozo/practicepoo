export class Member {
    constructor(name, position, department, availability) {
        this.name = name;
        this.position = position;
        this.department = department;
        this.availability = availability;
    }

    Render() {
        let card = document.createElement("div");
        card.classList.add("member-card");

        //Mostramos si el miembro está disponible o no
        let availabilityText = this.availability ? "Disponible" : "No disponible";

        card.innerHTML = `
            <h2>${this.name}</h2>
            <p>Puesto: ${this.position}</p>
            <p>Departamento: ${this.department}</p>
            <p>Estado: ${availabilityText}</p>
        `;

        return card;
    }
}
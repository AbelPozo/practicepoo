import { Member } from "./types/member.js";

class Main {
    constructor() {
        //Guardamos todos los miembros del equipo
        this.members = [];

        //Buscamos los elementos del HTML
        this.memberList = document.getElementById("member-list");
        this.departmentFilter = document.getElementById("department-filter");

        //Detectamos cuando cambia el departamento seleccionado
        this.departmentFilter.addEventListener("change", () => {
            let selectedDepartment = this.departmentFilter.value;

            //Filtramos los miembros por departamento
            let filteredMembers = this.members.filter(member =>
                selectedDepartment === "Todos" || member.department === selectedDepartment
            );

            //Mostramos los miembros filtrados
            this.Render(filteredMembers);
        });

        //Cargamos los miembros del JSON
        fetch("./data/members.json")
            .then(response => response.json())
            .then(data => {

                //Creamos un objeto Member para cada miembro
                data.forEach(memberData => {
                    let member = new Member(
                        memberData.name,
                        memberData.position,
                        memberData.department,
                        memberData.availability
                    );

                    this.members.push(member);
                });

                //Mostramos todos los miembros inicialmente
                this.Render();
            });
    }

    //Mostramos los miembros en la página
    Render(members = this.members) {
        this.memberList.innerHTML = "";

        members.forEach(member => {
            this.memberList.appendChild(member.Render());
        });
    }
}

//Creamos la aplicación
let app = new Main();
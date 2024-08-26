import { Ui } from "./ui.js";

export class Details {
    constructor(id){
        this.ui = new Ui
        document.getElementById("btnClose").addEventListener("click" , ()=>{
            document.querySelector(".games").classList.remove("d-none")
            document.querySelector(".details").classList.add("d-none")
        })
        this.getdetails(id)
    }
    async getdetails(id){
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'e5f9ef7426msh0e65a4ecf3b06cdp165a6ejsn7e1989e87aec',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}` , options)
        const respons = await api.json()
        this.ui.displayDetails(respons)
        loading.classList.add("d-none");
    }
}
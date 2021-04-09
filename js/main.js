function initVue() {

    new Vue({
        el: '#app',
        data: {
            'contacts': [
                { 
                    img: 'img/boolean.png', 
                    name: 'Boolean#29', 
                    message: 'ciaooo', 
                    date: 'Yesterday'
                },
                { 
                    img: 'img/baffi.png', 
                    name: 'PizziBoys', 
                    message: 'Arrivo!', 
                    date: 'Yesterday' 
                },
                { 
                    img: 'img/goblin.png', 
                    name: 'Jumbotron', 
                    message: 'Ci sono!', 
                    date: 'Monday' 
                },
                { 
                    img: 'img/apple.png', 
                    name: 'Martino', 
                    message: 'perche tiziana preferisce te?', 
                    date: 'Monday' 
                },
                { 
                    img: 'img/random1.png', 
                    name: 'Tiziana', 
                    message: 'sei meglio di martino', 
                    date: 'Monday' 
                },
                { 
                    img: 'img/persona.png', 
                    name: 'Olga', 
                    message: 'esercizio corretto, bravo!', 
                    date: 'Sunday' 
                },
                { 
                    img: 'img/cyberpunk.png', 
                    name: 'Gianluca', 
                    message: 'Andiamo a giocare a padel?', 
                    date: 'Sunday' 
                },
                { 
                    img: 'img/random.png', 
                    name: 'Beppe', 
                    message: 'ti richiamo dopo', 
                    date: 'Sunday' 
                },
                { 
                    img: 'img/fb.png', 
                    name: 'Mark', 
                    message: 'ti richiamo dopo', 
                    date: 'Sunday' 
                },
                { 
                    img: 'img/random2.png', 
                    name: 'Francesco', 
                    message: 'ti richiamo dopo', 
                    date: 'Saturday' 
                },
                { 
                    img: 'img/random3.png', 
                    name: 'Alessandro', 
                    message: 'ti richiamo dopo', 
                    date: 'Saturday' 
                },

            ],
            'searchName': '',
        },
        methods: {
            
        },
        computed: {
            // funzione per filtrare nomi lista e rendere visibili solo quelli che iniziano con la lattere che scrivi nel search
            filteredContacts() {
                return this.contacts.filter(elem => {
                    return elem.name.toLowerCase().includes(this.searchName.toLowerCase());
                });
            }
            // filteredcontacts(elem) {

            //     for(let i = 0; i < this.contacts.length; i++){
            //         console.log(this.contacts[i]['name']);
            //         let name = this.contacts[i]['name'];
            //         if (!name.includes(this.searchName)) {
            //             return this.contacts;
            //         }else{
            //             return elem.name.includes(this.searchName)
            //         }
            //     }
            // }
        }
    });
}

function init() {
    initVue();
}

document.addEventListener('DOMContentLoaded', init);
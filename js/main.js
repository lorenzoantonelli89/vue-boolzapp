function initVue() {

    new Vue({
        el: '#app',
        data: {
            'contacts': [
                { 
                    img: 'img/boolean.png', 
                    name: 'Boolean#29', 
                    message: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                    date: 'Yesterday'
                },
                { 
                    img: 'img/goblin.png', 
                    name: 'Jumbotron', 
                    message: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova birreria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al parco',
                            status: 'received'
                        }
                    ],
                    date: 'Monday' 
                },
                { 
                    img: 'img/apple.png', 
                    name: 'Martino', 
                    message: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Dobbiamo finire il compito!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'lo finirò domani, devo fare minesweep',
                            status: 'received'
                        }
                    ],
                    date: 'Monday' 
                },
                { 
                    img: 'img/random1.png', 
                    name: 'Tiziana', 
                    message: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al parco',
                            status: 'received'
                        }
                    ],
                    date: 'Monday' 
                },
                { 
                    img: 'img/persona.png', 
                    name: 'Olga', 
                    message: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Andava bene il mio esercizio?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'si andava bene',
                            status: 'received'
                        }
                    ],
                    date: 'Sunday' 
                },
                { 
                    img: 'img/cyberpunk.png', 
                    name: 'Gianluca', 
                    message: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'se ti va ti insegno a giocare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'andiamo a giocare a padel?',
                            status: 'received'
                        }
                    ],
                    date: 'Sunday' 
                },
                { 
                    img: 'img/random.png', 
                    name: 'Beppe', 
                    message: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                    date: 'Sunday' 
                },
                { 
                    img: 'img/fb.png', 
                    name: 'Mark', 
                    message: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                    date: 'Sunday' 
                },
                { 
                    img: 'img/random2.png', 
                    name: 'Francesco', 
                    message: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                    date: 'Saturday' 
                },
                { 
                    img: 'img/among.png', 
                    name: 'Alessandro', 
                    message: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                    date: 'Saturday' 
                },

            ],
            'searchName': '',
            'display': true, 
            'activeContact': 0,
        },
        methods: {
            clickChat: function (index) {
                this.activeContact = index;
                this.display = false;
            }
            
        },
        computed: {
            // funzione per filtrare nomi lista e rendere visibili solo quelli che iniziano con la lattere che scrivi nel search
            filteredContacts() {
                return this.contacts.filter(elem => {
                    return elem.name.toLowerCase().includes(this.searchName.toLowerCase());
                });
            }
            // versione estesa con ciclo for
            // filteredContacts() {

            //     const filtered = [];

            //     for(let i = 0; i < this.contacts.length; i++){
            //         let name = this.contacts[i]['name'];
            //         if (name.includes(this.searchName)) {
            //             filtered.push(this.contacts[i])
            //         }
            //     }
            //     console.log(filtered);

            //     return filtered;
            // }
        }
    });
}

function init() {
    initVue();
}

document.addEventListener('DOMContentLoaded', init);
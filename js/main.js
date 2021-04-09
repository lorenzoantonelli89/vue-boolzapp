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
                            date: '10/01/2020', 
                            hour: '15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                { 
                    img: 'img/goblin.png', 
                    name: 'Jumbotron', 
                    message: [
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            text: 'Lo sai che ha aperto una nuova birreria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            text: 'Si, ma preferirei andare al parco',
                            status: 'received'
                        }
                    ],
                },
                { 
                    img: 'img/apple.png', 
                    name: 'Martino', 
                    message: [
                        {
                            date: '10/01/2020 15:30:55',
                            hour: '15:30:55',
                            text: 'Marti dobbiamo finire il compito!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            text: 'lo finirò domani, devo fare minesweep',
                            status: 'received'
                        }
                    ],
                },
                { 
                    img: 'img/random1.png', 
                    name: 'Tiziana', 
                    message: [
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            text: 'Si, ma preferirei andare al parco',
                            status: 'received'
                        }
                    ],
                },
                { 
                    img: 'img/persona.png', 
                    name: 'Olga', 
                    message: [
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            text: 'Andava bene il mio esercizio?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            text: 'si andava bene',
                            status: 'received'
                        }
                    ],
                },
                { 
                    img: 'img/cyberpunk.png', 
                    name: 'Gianluca', 
                    message: [
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            text: 'se ti va ti insegno a giocare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            text: 'andiamo a giocare a padel?',
                            status: 'received'
                        }
                    ],
                },
                { 
                    img: 'img/random.png', 
                    name: 'Beppe', 
                    message: [
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                { 
                    img: 'img/fb.png', 
                    name: 'Mark', 
                    message: [
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            text: 'a vedere cosa?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            text: 'Interstellar',
                            status: 'received'
                        }
                    ],
                },
                { 
                    img: 'img/random2.png', 
                    name: 'Francesco', 
                    message: [
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                { 
                    img: 'img/among.png', 
                    name: 'Alessandro', 
                    message: [
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },

            ],
            'searchName': '',
            'display': true, 
            'activeContact': 0,
            'newMsg': '',
        },
        methods: {
            clickChat: function (index) {
                this.activeContact = index;
                this.display = false;
            },
            formatDate: function () {
                function addZero(i) {
                    if (i < 10) {
                        i = '0' + i;
                    }
                    return i
                }
                const today = new Date();
                const dd = addZero(today.getDate());
                const mm = addZero(today.getMonth()+1);
                const yyyy = addZero(today.getYear().toString().slice(1));

                const date = `${dd}/${mm}/${yyyy}`;
                return date;
            },
            formatHours: function () {
                function addZero(i) {
                    if (i < 10) {
                        i = '0' + i;
                    }
                    return i
                }

                const d = new Date();
                const h = addZero(d.getHours());
                const m = addZero(d.getMinutes());
                const s = addZero(d.getSeconds());

                const hour = `${h}:${m}:${s}`;

                return hour;
            },
            addMsgReceveid: function () {
                const date = this.formatDate();
                const hour = this.formatHours();
                const text = 'ok';
                const status = 'received';
                this.contacts[this.activeContact].message.push({date, hour, text, status});
            },
            addMsgSent: function () {
                const date = this.formatDate();
                const hour = this.formatHours();
                const text = this.newMsg;
                const status = 'sent';
                if (!text == '') {
                    this.contacts[this.activeContact].message.push({date, hour, text, status});
                    setTimeout(this.addMsgReceveid, 2000);
                }
                this.newMsg = '';
            },
            
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
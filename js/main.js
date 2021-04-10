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
                            date: '09/04/2021', 
                            hour: '15:30',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                        },
                        {
                            date: '09/04/2021',
                            hour: '16:30',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                        }
                    ],
                },
                { 
                    img: 'img/goblin.png', 
                    name: 'Jumbotron', 
                    message: [
                        {
                            date: '09/04/2021',
                            hour: '15:30',
                            text: 'Lo sai che ha aperto una nuova birreria?',
                            status: 'sent'
                        },
                        {
                            date: '09/04/2021',
                            hour: '15:35',
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
                            date: '09/04/2021',
                            hour: '15:30',
                            text: 'Marti dobbiamo finire il compito!',
                            status: 'sent'
                        },
                        {
                            date: '09/04/2021',
                            hour: '15:35',
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
                            date: '07/04/2021',
                            hour: '15:30',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '07/04/2021',
                            hour: '15:35',
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
                            date: '07/04/2021',
                            hour: '15:30',
                            text: 'Andava bene il mio esercizio?',
                            status: 'sent'
                        },
                        {
                            date: '07/04/2021',
                            hour: '15:35',
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
                            date: '06/04/2021',
                            hour: '15:30',
                            text: 'se ti va ti insegno a giocare',
                            status: 'sent'
                        },
                        {
                            date: '06/04/2021',
                            hour: '15:35',
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
                            date: '05/04/2021',
                            hour: '15:30',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '05/04/2021',
                            hour: '15:35',
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
                            date: '05/04/2021',
                            hour: '15:30',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '05/04/2021',
                            hour: '15:35',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },
                        {
                            date: '05/04/2021',
                            hour: '15:38',
                            text: 'a vedere cosa?',
                            status: 'sent'
                        },
                        {
                            date: '05/04/2021',
                            hour: '15:38',
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
                            date: '04/04/2021',
                            hour: '15:30',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '04/04/2021',
                            hour: '15:35',
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
                            date: '04/04/2021',
                            hour: '15:30',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '04/04/2021',
                            hour: '15:35',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    img: 'img/random.png',
                    name: 'Samuele',
                    message: [
                        {
                            date: '04/04/2021',
                            hour: '15:30',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '04/04/2021',
                            hour: '15:35',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    img: 'img/random1.png',
                    name: 'Emanuele',
                    message: [
                        {
                            date: '04/04/2021',
                            hour: '15:30',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '04/04/2021',
                            hour: '15:35',
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
            'listaMenu': [
                'Info messaggio',
                'Rispondi',
                'Inoltra messaggio',
                'Messaggio importante',
                'Elimina messaggio'
            ],
            'indexListMenu': 0,
            'indexMsg': 0,
        },
        methods: {
            clickChat: function (index) {
                this.activeContact = index;
                this.display = false;
                // funzione per cambiare info nella chat conversazione, e switchare display tra prima pagina e chat
            },
            formatDate: function () {
                function addZero(i) {
                    if (i < 10) {
                        i = '0' + i;
                    }
                    return i
                    // funzione addZero creata per aggiungere 0 a data e ora 
                }
                // creo costanti per poi concatenare e ritornare la const con data nel formato richiesto
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
                // creo costanti per poi concatenare e ritornare la const con orario nel formato richiesto
                const d = new Date();
                const h = addZero(d.getHours());
                const m = addZero(d.getMinutes());

                const hour = `${h}:${m}`;

                return hour;
            },
            addMsgReceveid: function () {
                const date = this.formatDate();
                const hour = this.formatHours();
                const text = 'ok';
                const status = 'received';
                this.contacts[this.activeContact].message.push({date, hour, text, status});
                // funzione per risposta automatica che da sempre ok
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
                // funzione per pushare in array message un oggetto contenente dati e testo che arriva da input nel footer
            },
            indMsg: function (indexMsg) {
                this.indexMsg = indexMsg;
            },
            removeMsg: function (index) {
                this.indexListMenu = index;
                if (this.indexListMenu === 4) {
                    this.contacts[this.activeContact].message.splice(this.indexMsg, 1);
                } else if (this.indexListMenu === 3){
                    this.display = false;
                    console.log('hello');
                }
                
            },
            // // msgImportant: function () {
            // //     if (this.indexListMenu === 3) {
            // //         this.display = false;
            // //         console.log('hello');
            // //     }
                
            // }
            // changeIcon: function () {
            //     if (!this.newMsg == '') {
            //         this.display = false;
            //     }
            // }
            
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
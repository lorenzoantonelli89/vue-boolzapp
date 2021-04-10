function initVue() {

    new Vue({
        el: '#app',
        data: {
            'contacts': [
                { 
                    img: 'img/boolean.png', 
                    name: 'Ale', 
                    message: [
                        {
                            date: '09/04/2021',
                            hour: '12:01',
                            text: 'Ho fatto un casino!! ',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '12:11',
                            text: 'Che hai combinato?',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '12:21',
                            text: 'Ho fatto 4 cicli annidati',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021', 
                            hour: '12:33',
                            text: 'Ma perchè 4 cicli annidati? ahahahaha',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '12:44',
                            text: 'Ma che ne so "mi si è sminchiato tutto" cit.Mirko',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '12:55',
                            text: 'Ah niente dimenicato una virgola',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '13:01',
                            text: 'Solito ahahahah',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                    ],
                },
                { 
                    img: 'img/goblin.png', 
                    name: 'Gabri', 
                    message: [
                        {
                            date: '09/04/2021',
                            hour: '12:11',
                            text: 'Che calzone ti sei mangiato oggi maledetto?',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '12:21',
                            text: 'Oggi prosciutto e formaggio!',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '12:39',
                            text: 'Ti odiooo!!!',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                    ],
                },
                { 
                    img: 'img/apple.png', 
                    name: 'Martino', 
                    message: [
                        {
                            date: '09/04/2021',
                            hour: '10:33',
                            text: 'Voglio comprare MacBookPro quale mi consigli?',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '10:45',
                            text: 'Finalmente inizi a ragionare :-)',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '11:01',
                            text: 'Era ora di fare il passo a qualcosa di serio!',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '11:05',
                            text: 'Cmq ottimo ti consiglio di aspettare che esce MBP16 con M1',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '11:10',
                            text: 'Quando esce?',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '11:12',
                            text: 'Penso settembre!',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '12:21',
                            text: 'Ottimo ora torno a campominato!',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                    ],
                },
                { 
                    img: 'img/random1.png', 
                    name: 'Tiziana', 
                    message: [
                        {
                            date: '07/04/2021',
                            hour: '10:00',
                            text: 'Per caso hai sentito Martino?',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '07/04/2021',
                            hour: '11:55',
                            text: 'Si è qui da me!',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        }
                    ],
                },
                { 
                    img: 'img/persona.png', 
                    name: 'Olga', 
                    message: [
                        {
                            date: '07/04/2021',
                            hour: '10:55',
                            text: 'Andava bene il mio esercizio?',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '07/04/2021',
                            hour: '11:30',
                            text: 'Era perfetto meglio di quello di AleYolo',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '07/04/2021',
                            hour: '11:40',
                            text: 'Grazieeeeee',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                    ],
                },
                { 
                    img: 'img/cyberpunk.png', 
                    name: 'Gianluca', 
                    message: [
                        {
                            date: '06/04/2021',
                            hour: '10:30',
                            text: 'Andiamo a giocare a padel?',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '06/04/2021',
                            hour: '11:02',
                            text: 'Certo cosi ti insegno!',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '06/04/2021',
                            hour: '11:11',
                            text: 'Ti stupirò!',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        }
                    ],
                },
                { 
                    img: 'img/random.png', 
                    name: 'Beppe', 
                    message: [
                        {
                            date: '05/04/2021',
                            hour: '10:40',
                            text: 'A che ora ci vediamo al campo?',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '05/04/2021',
                            hour: '10:58',
                            text: 'Alle 18:00!',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        }
                    ],
                },
                { 
                    img: 'img/fb.png', 
                    name: 'Mark', 
                    message: [
                        {
                            date: '05/04/2021',
                            hour: '09:11',
                            text: 'Hi Jumbo how are you? I’ve got a work proposal, here with us, could you be interested?',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '05/04/2021',
                            hour: '10:20',
                            text: 'Hi Mark, all good here and you? Look, I’m quite busy studying at moment, but please send me an email with all the details and I’ll think about it.',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '05/04/2021',
                            hour: '10:21',
                            text: 'Cool thanks, sorry for disturbing',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '05/04/2021',
                            hour: '10:33',
                            text: 'no problem , you all right.',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                    ],
                },
                { 
                    img: 'img/random2.png', 
                    name: 'Francesco', 
                    message: [
                        {
                            date: '04/04/2021',
                            hour: '10:22',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '04/04/2021',
                            hour: '10:25',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '04/04/2021',
                            hour: '10:27',
                            text: 'A vedere cosa?',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '04/04/2021',
                            hour: '10:29',
                            text: 'Interstellar',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                    ],
                },
                { 
                    img: 'img/among.png', 
                    name: 'Alessandro', 
                    message: [
                        {
                            date: '04/04/2021',
                            hour: '10:19',
                            text: 'Ti è arrivata la paperella?',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '04/04/2021',
                            hour: '10:20',
                            text: 'Si ieri :-)',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '04/04/2021',
                            hour: '10:25',
                            text: 'A me no :-(',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        }
                    ],
                },
                {
                    img: 'img/random.png',
                    name: 'Samuele',
                    message: [
                        {
                            date: '04/04/2021',
                            hour: '09:55',
                            text: 'Oggi sei in ufficio?',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '04/04/2021',
                            hour: '10:00',
                            text: 'Si fino alle 18',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '04/04/2021',
                            hour: '10:20',
                            text: 'OK arrivo!',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                    ],
                },
                {
                    img: 'img/random1.png',
                    name: 'Emanuele',
                    message: [
                        {
                            date: '04/04/2021',
                            hour: '10:00',
                            text: 'Sei a casa dopo?',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '04/04/2021',
                            hour: '10:03',
                            text: 'Si',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
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
            'objActive': '',
        },
        methods: {
            clickChat: function (elem, index) {
                this.activeContact = index;
                this.display = false;
                this.objActive = elem;
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
                    // this.contacts[this.activeContact].message.splice(this.indexMsg, 1);
                    // this.activeContact.message.splice(this.indexMsg, 1)
                    // console.log(this.objActive.message[this.indexMsg]);
                    this.objActive.message.splice(this.indexMsg, 1)
                }
                
            },
            clickChevron: function (msg) {
                msg.dropDown = !msg.dropDown;
            },
            hoverChevron: function (msg) {
                msg.chevron = !msg.chevron;
            },
            msgImportant: function (msg, index) {
                this.indexListMenu = index;
                if (this.indexListMenu === 3) {
                    msg.msgKey = !msg.msgKey;
                }
            }
            // test: function () {
            //     console.log('hello');
                
            //     if (this.info == true || this.chevron == true) {
            //         this.info = false;
            //         this.chevron = false;
            //     }
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
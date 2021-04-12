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
                            hour: '12:01:00',
                            text: 'Ho fatto un casino!! ',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '12:11:00',
                            text: 'Che hai combinato?',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '12:21:00',
                            text: 'Ho fatto 4 cicli annidati',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '12:33:00',
                            text: 'Ma perchè 4 cicli annidati? ahahahaha',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '12:44:00',
                            text: 'Ma che ne so "mi si è sminchiato tutto" cit.Mirko',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '12:55:00',
                            text: 'Ah niente dimenicato una virgola',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '13:01:00',
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
                            hour: '12:11:00',
                            text: 'Che calzone ti sei mangiato oggi maledetto?',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '12:21:00',
                            text: 'Oggi prosciutto e formaggio!',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '12:39:00',
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
                            hour: '10:33:00',
                            text: 'Voglio comprare MacBookPro quale mi consigli?',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '10:45:00',
                            text: 'Finalmente inizi a ragionare :-)',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '11:01:00',
                            text: 'Era ora di fare il passo a qualcosa di serio!',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '11:05:00',
                            text: 'Cmq ottimo ti consiglio di aspettare che esce MBP16 con M1',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '11:10:00',
                            text: 'Quando esce?',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '11:12:00',
                            text: 'Penso settembre!',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '09/04/2021',
                            hour: '12:21:00',
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
                            hour: '10:00:00',
                            text: 'Per caso hai sentito Martino?',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '07/04/2021',
                            hour: '11:55:00',
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
                            hour: '10:55:00',
                            text: 'Andava bene il mio esercizio?',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '07/04/2021',
                            hour: '11:30:00',
                            text: 'Era perfetto meglio di quello di AleYolo',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '07/04/2021',
                            hour: '11:40:00',
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
                            hour: '10:30:00',
                            text: 'Andiamo a giocare a padel?',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '06/04/2021',
                            hour: '11:02:00',
                            text: 'Certo cosi ti insegno!',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '06/04/2021',
                            hour: '11:11:00',
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
                            hour: '10:40:00',
                            text: 'A che ora ci vediamo al campo?',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '05/04/2021',
                            hour: '10:58:00',
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
                            hour: '09:11:00',
                            text: 'Hi Jumbo how are you? I’ve got a work proposal, here with us, could you be interested?',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '05/04/2021',
                            hour: '10:20:00',
                            text: 'Hi Mark, all good here and you? Look, I’m quite busy studying at moment, but please send me an email with all the details and I’ll think about it.',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '05/04/2021',
                            hour: '10:21:00',
                            text: 'Cool thanks, sorry for disturbing',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '05/04/2021',
                            hour: '10:33:00',
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
                            hour: '10:22:00',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '04/04/2021',
                            hour: '10:25:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '04/04/2021',
                            hour: '10:27:00',
                            text: 'A vedere cosa?',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '04/04/2021',
                            hour: '10:29:00',
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
                            hour: '10:19:00',
                            text: 'Ti è arrivata la paperella?',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '04/04/2021',
                            hour: '10:20:00',
                            text: 'Si ieri :-)',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '04/04/2021',
                            hour: '10:25:00',
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
                            hour: '09:55:00',
                            text: 'Oggi sei in ufficio?',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '04/04/2021',
                            hour: '10:00:00',
                            text: 'Si fino alle 18',
                            status: 'received',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '04/04/2021',
                            hour: '10:20:00',
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
                            hour: '10:00:00',
                            text: 'Sei a casa dopo?',
                            status: 'sent',
                            dropDown: false,
                            chevron: false,
                            msgKey: false,
                        },
                        {
                            date: '04/04/2021',
                            hour: '10:03:00',
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
            'activeContact': '',
            'indexLiDropDown': 0,
            'indexMsg': 0,
            'newMsg': '',
            'listaDropDown': [
                'Info messaggio',
                'Rispondi',
                'Inoltra messaggio',
                'Messaggio importante',
                'Elimina messaggio'
            ],
            'textEmpty': 'Non ci sono messaggi',
            'hourEmpty': '',
            'answer1':[
                'ok!',
                'va bene!!',
                'facciamo dopo!',
            ],
            'answer2': [
                'certo!',
                'tu che dici?',
                'ovvio!',
            ],
            'emoticonDisplay': false,
            'emoticons': [
                {
                    emoName: 'smile',
                    code: '&#128514;'
                },
                {
                    emoName: 'cool',
                    code: '&#128526;'
                }
            ],
            'searchEmo': '',

        },
        methods: {
            // funzione per cambiare info nella chat conversazione, e switchare display tra prima pagina e chat
            clickChat: function (elem) {
                this.activeContact = elem;
                // usando nexttick e il ref che è un id dell'input gli assegno il focus quando clicca sulla chat desiderata
                this.$nextTick(() => this.$refs.inputFocus.focus());
            },
            getRandom: function (lg) {
                // funzione per creare index di un array
                let indexRnd = Math.floor(Math.random() * (lg - 0)) + 0;
                return indexRnd
            },
            addZero: function(i) {
                // funzione per addare lo zero alle date e orario
                if (i < 10) {
                    i = '0' + i;
                }
                return i
            },
            formatDate: function () {
                // creo costanti per poi concatenare e ritornare la const con data nel formato richiesto
                const today = new Date();
                const dd = this.addZero(today.getDate());
                const mm = this.addZero(today.getMonth() + 1);
                const yyyy = this.addZero(today.getYear().toString().slice(1));

                const date = `${dd}/${mm}/${yyyy}`;
                return date;
            },
            formatHours: function () {
                // creo costanti per poi concatenare e ritornare la const con orario nel formato richiesto
                const d = new Date();
                const h = this.addZero(d.getHours());
                const m = this.addZero(d.getMinutes());
                const s = this.addZero(d.getSeconds());

                const hour = `${h}:${m}:${s}`;

                return hour;
            },
            addMsgReceveid: function () {
                // funzione per risposta automatica che da sempre ok
                // mi creo tutte le costanti lunghezza array per risposte random, const ultima lettera del messaggio inviato per fare verifica e switchare le risposte
                const lg1 = this.answer1.length;
                const lg2 = this.answer2.length;

                const lastChar = this.activeContact.message[this.activeContact.message.length - 1].text.charAt(this.activeContact.message[this.activeContact.message.length - 1].text.length - 1);
                const date = this.formatDate();
                const hour = this.formatHours();
                let text;
                if (lastChar == '?') {
                    text = this.answer2[this.getRandom(lg2)];
                }else{
                    text = this.answer1[this.getRandom(lg1)];
                }
                
                const status = 'received';
                const dropDown = false;
                const chevron = false;
                const msgKey = false;
                this.activeContact.message.push({ date, hour, text, status, dropDown, chevron, msgKey });
                
            },
            addMsgSent: function () {
                // funzione per pushare in array message un oggetto contenente dati e testo che arriva da input nel footer
                const date = this.formatDate();
                const hour = this.formatHours();
                const text = this.newMsg;
                const status = 'sent';
                const dropDown = false;
                const chevron = false;
                const msgKey = false;
                if (!text == '') {
                    this.activeContact.message.push({ date, hour, text, status, dropDown, chevron, msgKey });
                    setTimeout(this.addMsgReceveid, 2000);
                }
                this.newMsg = '';
                
            },
            indMsg: function (msg, indexMsg) {
                // funzione che mi passa index del messaggio su cui vado in over per poi cancellarlo
                this.indexMsg = indexMsg;
            },
            removeMsg: function (msg, index) {
                // funzione per rimuovere messaggio dove mi passo index dei listato del dropdown
                this.indexLiDropDown = index;
                if (this.indexLiDropDown === 4) {
                    this.activeContact.message.splice(this.indexMsg, 1)
                }
            },
            clickChevron: function (msg) {
            // funzione cambia display dropdown al click chevron
                msg.dropDown = !msg.dropDown;
            },
            hoverChevron: function (msg) {
            // funzione che cambia display allo chevron all'hover
                msg.chevron = !msg.chevron;
            },
            msgImportant: function (msg, index) {
                // funzione che aggiunge stellina cliccando su messaggio importante
                this.indexLiDropDown = index;
                if (this.indexLiDropDown === 3) {
                    msg.msgKey = !msg.msgKey;
                }
            },
            closeDropDown: function () {
                // funzione per chiudere dropdrown GIOELE TI RINGRAZIO
                this.activeContact.message.forEach(elem => {
                    if (elem.dropDown) {
                        elem.dropDown = false;
                        elem.chevron = false;
                    }
                });
            },
            backSearch: function () {
                // funzione per tornare alla lista completa senza ricerca attiva cliccando sulla freccia azzurra
                this.searchName = '';
            },
            clickEmoticonsMenu: function () {
                // funzione cambia display lista emoticon
                this.emoticonDisplay = !this.emoticonDisplay;
                this.$nextTick(() => this.$refs.inputFocus2.focus());
            },
            clickEmoticon: function (elem) {
                // funzione per inserire emoticon in input scrittura nuovo messaggio
                this.newMsg += elem.code;
                // dopo il click emoticon il focus torna sul input per scrivere il messaggio
                this.$nextTick(() => this.$refs.inputFocus.focus());
            },
            
        },
        // update () {
        //     const chatScroll = this.$el.querySelector('.main-conversation');
        //     chatScroll.scrollTop = chatScroll.scrollHeight;
            
        // },
        computed: {
            filteredContacts: function () {
                 // funzione per filtrare nomi lista e rendere visibili solo quelli che iniziano con la lattere che scrivi nel search
                return this.contacts.filter(elem => {
                    return elem.name.toLowerCase().includes(this.searchName.toLowerCase());
                });
            },
            // versione estesa con ciclo for
            // filteredContacts() {

            //     const filtered = [];

            //     for(let i = 0; i < this.contacts.length; i++){
            //         let name = this.contacts[i]['name'];
            //         if (name.includes(this.searchName)) {
            //             filtered.push(this.contacts[i])
            //         }
            //     }

            //     return filtered;
            // },
            // 
            filteredEmoticons: function () {
                return this.emoticons.filter(elem => {
                    return elem.emoName.toLowerCase().includes(this.searchEmo.toLowerCase());
                });
            },
            coloredTextFiltered: function () {
                return this.contacts.name.replace(
                    this.searchName, '<span class="colorgreen">' + this.searchName + '</span>')
                
            },
        }
    });
}

function init() {
    initVue();
}

document.addEventListener('DOMContentLoaded', init);
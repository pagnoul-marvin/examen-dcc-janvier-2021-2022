// Nom    :
// Prénom :
// Groupe : 2285


const tymper = {
    appElt: document.querySelector('.app'),
    dataFontElt: document.getElementById('fonts'),
    formElt: document.getElementById('play'),
    scoreElt: document.querySelector('p.information__score'),
    timeElt: document.querySelector('p.information__time'),
    score: 0,
    time: 10,
    init() {
        this.generateCards();
        this.generateScore();
        this.addEventListeners();
        this.generateTime();
    },
    generateCards() {
        for (const font of fonts) {
            this.appElt.insertAdjacentHTML("beforeend", `<li data-font-name="${font.name}" data-family="${font.family}" class='app__item'>
             <div class="app__item__info"><span class="app__item__info__name">${font.name}</span>
             <span class="app__item__info__info">${font.family} - ${font.author}</span></div>
             <img class='app__item__font' src='./assets/fonts/${font.file}.svg' alt='Aa, abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ'></li>`);
            this.dataFontElt.insertAdjacentHTML("beforeend", `<option value="${font.name}"></option>`); //avoir les propositions quand on tape dans l'input pour le nom
        }
    },
    generateScore() {
        this.scoreElt.insertAdjacentHTML("afterbegin", `Score : <span>0/20</span>`);
    },
    generateTime() {
        this.timeElt.insertAdjacentHTML("afterbegin", `Temps restant pour cette carte :  <time datetime="00:10">00:10</time>`);
    },
    addEventListeners() {
        this.formElt.addEventListener('submit', (event) => {  //ATTENTION dans un formulaire faut écouter la soumission du formulaire et non le click
            event.preventDefault(); // A RETENIR  = empêche le comportement par défaut de l'évènement
            document.getElementById('font').value;
            document.getElementById('family').value;
            document.querySelector('.app li:last-child').dataset.fontName; // souligner mais c'est juste (dataset.fontName trop compliqué pour phpStorm)
            document.querySelector('.app li:last-child').dataset.family; // souligner mais c'est juste (dataset.fontName trop compliqué pour phpStorm)
            if (document.querySelector('.app li:last-child').dataset.fontName === document.getElementById('font').value) {
                this.score += 0.5;
                this.time = 10;
            }
            if (document.querySelector('.app li:last-child').dataset.family === document.getElementById('family').value) {
                this.score += 0.5;
                this.time = 10;
            }
            this.scoreElt.querySelector('span').textContent = `${this.score}/${fonts.length}`;
        })
    }
}

tymper.init();






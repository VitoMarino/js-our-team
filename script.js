const div = document.querySelector('div');
const p = document.createElement('p');
const article = document.createElement('article');
const img = document.createElement('img');

for (let i = 1; i <= 6; i++) {
    const p = document.createElement('p');
    const article = document.createElement('article');
    const img = document.createElement('img');
    
    div.append(article);
    article.append(p)
    article.append(img);
}

let articleUno = document.querySelector();
let articleDue = document.querySelector();
let articleTre = document.querySelector();
let articleQuattro = document.querySelector();
let articleCinque = document.querySelector();
let articleSei = document.querySelector();

articleUno.classList.add()
articleDue.classList.add()
articleTre.classList.add()
articleQuattro.classList.add()
articleCinque.classList.add()
articleSei.classList.add()

const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: '	walter-gordon-office-manager.jpg'
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
];

for (let key in team) {
    console.log(team[key]);
}


// Variabili globali
const div = document.querySelector('div');
const p = document.createElement('p');
const article = document.createElement('article');
let img = document.createElement('img');

// Array oggetti
const team = [
    {
        nome: 'Wayne Barnett ',
        ruolo: 'Founder & CEO ',
        foto: img.src = 'wayne-barnett-founder-ceo.jpg '
    },
    
    {
        nome: 'Angela Caroll ',
        ruolo: 'Chief Editor ',
        foto: img.src = ' angela-caroll-chief-editor.jpg '
    },

    {
        nome: 'Walter Gordon ',
        ruolo: 'Office Manager ',
        foto: img.src = 'walter-gordon-office-manager.jpg '
    },

    {
        nome: 'Angela Lopez ',
        ruolo: 'Social Media Manager ',
        foto: img.src = 'angela-lopez-social-media-manager.jpg '
    },

    {
        nome: 'Scott Estrada ',
        ruolo: 'Developer ',
        foto: img.src = 'scott-estrada-developer.jpg '
    },

    {
        nome: 'Barbara Ramos ',
        ruolo: 'Graphic Designer ',
        foto: img.src = 'barbara-ramos-graphic-designer.jpg '
    }
];

// Ciclo forin per array oggetti in console

for (let key in team) {
    console.log(team[key]);
}

// Ciclo for per ripetizioni tag
for (let i = 0; i <= 5; i++) {
    const p = document.createElement('p');
    const article = document.createElement('article');
    const img = document.createElement('img');
    
    div.append(article);
    article.append(p)
    article.append(img);

    p.append(team[i].nome, team[i].ruolo);
}

document.body.append(img);


const div = document.querySelector('div');

for (let i = 0; i <= 6; i++) {
    let p = document.createElement('p');
    const article = document.createElement('article');
    div.append(article);
    article.append(p)
    
    let img = document.createElement('img');
    article.appendChild(img);
}

let articleUno = document.querySelectorAll('div > article:nth-child(1)')
articleUno.classList.add('uno');


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


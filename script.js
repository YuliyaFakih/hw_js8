document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.maxWidth = '60%';
document.body.style.marginLeft = 'auto';
document.body.style.marginRight = 'auto';
document.body.style.textAlign = 'center';
document.body.style.paddingBottom = '50px';

const title = document.createElement('title');
title.innerHTML = 'New document';
document.head.appendChild(title);

const meta = document.createElement('meta');
meta.setAttribute('charset', 'UTF-8');
document.head.appendChild(meta);

const meta2 = document.createElement('meta');
meta2.setAttribute('name', 'author');
meta2.setAttribute('content', 'Yuliya Fakih');
document.head.appendChild(meta2);

let style = document.createElement('style');
style.innerHTML = `

    h1 {
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 48px;
        align-items: center;
        color: #212121;
        margin-top: 50px;
    }

    p {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 26px;
        color: #9FA3A7;
        margin-bottom: 55px;
    }

    .offer1, .offer2 {
        justify-items: center;
        align-items: center;
        width: 50%;
        height: 100%;
        margin: 0 auto;
    }

    .offer1 div:nth-child(1) {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2.4px;
        color: #9FA3A7;
        margin-top: 80px;
        text-transform: uppercase;
    }

    .offer1 div:nth-child(2) {
        font-family: Arvo;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 46px;
        color: #212121;
        margin: 20px 0;
    }

    .offer1 p {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 22px;
        color: #9FA3A7;
    }

    button {
        border: 3px solid #FFC80A;
        width: 147px;
        height: 46px;
        border-radius: 50px;
        text-transform: uppercase;
    }

    .offer1 button {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2.4px;
        color: #212121;
        background: white;
    }

    .offer2 div:nth-child(1) {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2.4px;
        color: #FFC80A;
        margin-top: 80px;
        text-transform: uppercase;
    }

    .offer2 div:nth-child(2) {
        font-family: Arvo;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 46px;
        color: #FFFFFF;
        margin: 20px 0;
    }

    .offer2 p {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 22px;
        color: #FFFFFF;
    }
   
    .offer2 button {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2.4px;
        color: #FFFFFF;
        background: #8F75BE;
    }
`
document.body.appendChild(style);

const h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
document.body.appendChild(h1);

const p = document.createElement('p');
p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
document.body.appendChild(p);

const offer = document.createElement('div');
document.body.appendChild(offer);
offer.classList.add('offer');
offer.style.display = 'grid';
offer.style.gridTemplateColumns = '1fr 1fr';
offer.style.border = '1px solid #E8E9ED';

const container1 = document.createElement('div');
offer.appendChild(container1);
container1.style.paddingBottom = '75px';

const freelancer = document.createElement('div');
container1.appendChild(freelancer);
freelancer.style.display = 'grid';
freelancer.classList.add('offer1');

const subtitle = document.createElement('div');
subtitle.innerHTML = 'Freelancer';
freelancer.appendChild(subtitle);

const h2 = document.createElement('div');
h2.innerHTML = 'Initially designed to';
freelancer.appendChild(h2);

const p2 = document.createElement('p');
p2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
freelancer.appendChild(p2);

const button1 = document.createElement('button');
button1.innerHTML = 'Start here';
freelancer.appendChild(button1);

const container2 = document.createElement('div');
offer.appendChild(container2);
container2.style.background = '#8F75BE';
container2.style.width = '100%';
container2.style.paddingBottom = '75px';

const studio = document.createElement('div');
container2.appendChild(studio);
studio.style.display = 'grid';
studio.classList.add('offer2');

const subtitle2 = document.createElement('div');
subtitle2.innerHTML = 'Studio';
studio.appendChild(subtitle2);

const h3 = document.createElement('div');
h3.innerHTML = 'Initially designed to';
studio.appendChild(h3);

const p3 = document.createElement('p');
p3.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
studio.appendChild(p3);

const button2 = document.createElement('button');
button2.innerHTML = 'Start here';
studio.appendChild(button2);

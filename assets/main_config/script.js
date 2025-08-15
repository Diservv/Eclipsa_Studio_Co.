// Menu responsivo
const mobileMenuIcon = document.getElementById('mobileMenuIcon');
const mobileNav = document.getElementById('mobileNav');
mobileMenuIcon.addEventListener('click', () => {
    mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
});
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => { mobileNav.style.display = 'none'; });
});

// Carrossel inteligente
const slides = document.querySelectorAll('.carrossel-slide');
const prevBtn = document.querySelector('.carrossel-btn.prev');
const nextBtn = document.querySelector('.carrossel-btn.next');
let currentSlide = 0;
let carrosselInterval;
function showSlide(idx) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === idx);
    });
    currentSlide = idx;
}
function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
}
function prevSlide() {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
}
nextBtn.addEventListener('click', () => { nextSlide(); resetInterval(); });
prevBtn.addEventListener('click', () => { prevSlide(); resetInterval(); });
function startInterval() {
    carrosselInterval = setInterval(nextSlide, 5000);
}
function resetInterval() {
    clearInterval(carrosselInterval); startInterval();
}
startInterval();

// Personagens estilo referência
const personagens = [
    {
        nome: 'Luna',
        img: 'assets/aqua.jpg',
        bio: 'Luna é uma jovem inventora brilhante, apaixonada por robótica e aventuras. Sua criatividade é a chave para resolver problemas complexos.'
    },
    {
        nome: 'Luna',
        img: 'assets/aqua.jpg',
        bio: 'Luna é uma jovem inventora brilhante, apaixonada por robótica e aventuras. Sua criatividade é a chave para resolver problemas complexos.'
    },
    {
        nome: 'Luna',
        img: 'assets/aqua.jpg',
        bio: 'Luna é uma jovem inventora brilhante, apaixonada por robótica e aventuras. Sua criatividade é a chave para resolver problemas complexos.'
    },
    {
        nome: 'Luna',
        img: 'assets/aqua.jpg',
        bio: 'Luna é uma jovem inventora brilhante, apaixonada por robótica e aventuras. Sua criatividade é a chave para resolver problemas complexos.'
    },
    {
        nome: 'Orion',
        img: 'assets/aqua.jpg',
        bio: 'Orion é o guardião da cidade, corajoso e leal. Com sua armadura tecnológica, protege seus amigos e enfrenta qualquer desafio.'
    },
    {
        nome: 'Mira',
        img: 'assets/aqua.jpg',
        bio: 'Mira é uma artista talentosa, capaz de dar vida a qualquer desenho. Sua imaginação não tem limites e inspira todos ao seu redor.'
    }
];
const personagensLista = document.querySelector('.personagens-lista');
let personagemSelecionado = 0;
function renderPersonagens() {
    personagensLista.innerHTML = '';
    personagens.forEach((p, idx) => {
        const card = document.createElement('div');
        card.className = 'personagem-card' + (idx === personagemSelecionado ? ' selected' : '');
        card.tabIndex = 0;
        card.innerHTML = `<img src="${p.img}" alt="${p.nome}"><h3>${p.nome}</h3>`;
        card.onclick = () => {
            personagemSelecionado = idx;
            renderPersonagens();
            renderBio();
        };
        card.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { card.onclick(); } };
        personagensLista.appendChild(card);
    });
}
function renderBio() {
        let bioArea = document.querySelector('.personagem-bio-area');
        if (!bioArea) {
                bioArea = document.createElement('div');
                bioArea.className = 'personagem-bio-area';
                personagensLista.parentNode.appendChild(bioArea);
        }
        bioArea.innerHTML = `
                <img class="personagem-bio-img" src="${personagens[personagemSelecionado].img}" alt="${personagens[personagemSelecionado].nome}">
                <div class="personagem-bio-info">
                    <div class="personagem-bio-nome">${personagens[personagemSelecionado].nome}</div>
                    <div class="personagem-bio-texto">${personagens[personagemSelecionado].bio}</div>
                </div>
        `;
}
renderPersonagens();
renderBio();

// Navegação suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.length > 1 && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            if (window.innerWidth <= 800 && mobileNav) mobileNav.style.display = 'none';
        }
    });
});

// Equipe com imagem arredondada
const equipe = [
    {
        nome: 'Rchrtz',
        funcao: 'Diretora de Criação',
        img: 'assets/Image maker 2.jpeg',
        social: {
            instagram: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        nome: 'ptr',
        funcao: 'Animador 3D',
        img: 'assets/Image maker 2.jpeg',
        social: {
            instagram: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        nome: 'Kid Bengala 33',
        funcao: 'Roteirista',
        img: 'assets/Image maker 2.jpeg',
        social: {
            instagram: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        nome: 'Rchrtz',
        funcao: 'Diretora de Criação',
        img: 'assets/Image maker 2.jpeg',
        social: {
            instagram: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        nome: 'Rchrtz',
        funcao: 'Diretora de Criação',
        img: 'assets/Image maker 2.jpeg',
        social: {
            instagram: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        nome: 'Rchrtz',
        funcao: 'Diretora de Criação',
        img: 'assets/Image maker 2.jpeg',
        social: {
            instagram: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
];
const equipeLista = document.querySelector('.equipe-lista');
equipe.forEach(m => {
    const card = document.createElement('div');
    card.className = 'equipe-card';
    card.innerHTML = `
        <img class='equipe-img' src="${m.img}" alt="${m.nome}">
        <h3>${m.nome}</h3>
        <p>${m.funcao}</p>
        <div class='equipe-social'>
            <a href="${m.social.instagram}" target="_blank" title="Instagram"><img src="assets/insta.svg" alt="Instagram" width="20"></a>
            <a href="${m.social.twitter}" target="_blank" title="Twitter"><img src="assets/twitter.svg" alt="Twitter" width="20"></a>
            <a href="${m.social.linkedin}" target="_blank" title="LinkedIn"><img src="assets/linkedin.svg" alt="LinkedIn" width="20"></a>
        </div>
    `;
    equipeLista.appendChild(card);
});

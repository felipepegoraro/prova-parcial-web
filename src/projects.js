const plist = [
    {
        name: "img2ascii",
        desc: "Um conversor de imagens/gif em ascii. Feito em C com auxilio de stb_image.h",
        img: "../assets/p-img2ascii.gif",
        link: "https://github.com/felipepegoraro/img2ascii"
    },
    {
        name: "opengl-mpu6050",
        desc: "Simples demonstração de como usar o módulo MPU6050 com arduino C++ e OpenGL.",
        img: "../assets/p-cubo3.png",
        link: "https://github.com/felipepegoraro/opengl-mpu6050"
    },
    {
        name: "pong-arduino",
        desc: "Jogo ping pong recriado usando arduino, matrix led, display e 2 joysticks.",
        img: "../assets/p-pong.gif",
        link: "https://github.com/felipepegoraro/pong-arduino"
    },
    {
        name: "Antigo Blog",
        desc: "Feito para anotações. Atualmente está sem manutenção. Muitos conteúdos removidos.",
        img: "../assets/p-blog.png",
        link: "https://my-blog-xi-three.vercel.app/"
    },
    {
        name: "hslist",
        desc: "Projeto de estruturas de dados 2. Uma lista telefônica usando tabela hash. Interface via ncurses.",
        img: "../assets/p-hslist.gif",
        link: "https://github.com/felipepegoraro/hslist"
    },
    {
        name: "sistema-mercado",
        desc: "Um sistema de mercado com diversas funcionalidades. Feito em Java e SQL.",
        img: "../assets/p-mercado.png",
        link: "https://github.com/felipepegoraro/sistema_mercado"
    }
];

const addProjects = () => {
    const div = document.getElementById("pcontainer");
    if (!div) return;

    const hid = document.getElementById("hidden-pcontainer");
    if (!hid) return;

    const createCard = (e) => {
        const card = document.createElement("div");
        card.setAttribute("class", "project-card");

        const img = document.createElement("img");
        img.setAttribute("src", e.img);
        img.setAttribute("alt", e.name);
        card.appendChild(img);

        const title = document.createElement("h3");
        title.appendChild(document.createTextNode(e.name));
        card.appendChild(title);

        const description = document.createElement("p");
        description.innerHTML = e.desc;
        card.appendChild(description);

        const link = document.createElement("a");
        link.setAttribute("href", e.link);
        link.setAttribute("target", "_blank");
        link.textContent = e.name === "Antigo Blog" ? "Acesse" : "Github";
        card.appendChild(link);

        return card;
    }

    plist.forEach((e, i) => {
        if (i <= 3) div.appendChild(createCard(e));
        else hid.appendChild(createCard(e));
    });
}

const showOtherCards = () => {
    const element = document.getElementById("hidden-pcontainer");
    const arrowBt = document.getElementById("showMoreCardsArrow");
    if (element.classList.contains('visible')) element.classList.remove('visible');
    else element.classList.add('visible');

    if (arrowBt.classList.contains('flipped')) arrowBt.classList.remove('flipped');
    else arrowBt.classList.add('flipped');
}

addProjects();


const posts = [
    {
        title: "Post 1", 
        content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dolor eu orci elementum efficitur.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Vivamus sit amet justo eget urna suscipit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum."
        ]
    },
    {
        title: "Post 2",
        content: [
            "Praesent vel nisi at odio consectetur pellentesque.",
            "Sed in metus vel leo efficitur tincidunt at ut elit.",
            "Aliquam erat volutpat. Donec gravida felis sit amet magna bibendum, in ullamcorper arcu bibendum."
        ]
    },
    {
        title: "Post 3", 
        content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dolor eu orci elementum efficitur.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Vivamus sit amet justo eget urna suscipit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum."
        ]
    },
    {
        title: "Post 4",
        content: [
            "Praesent vel nisi at odio consectetur pellentesque.",
            "Sed in metus vel leo efficitur tincidunt at ut elit.",
            "Aliquam erat volutpat. Donec gravida felis sit amet magna bibendum, in ullamcorper arcu bibendum."
        ]
    },
    {
        title: "Post 5", 
        content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dolor eu orci elementum efficitur.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Vivamus sit amet justo eget urna suscipit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum."
        ]
    },
    {
        title: "Post 6",
        content: [
            "Praesent vel nisi at odio consectetur pellentesque.",
            "Sed in metus vel leo efficitur tincidunt at ut elit.",
            "Aliquam erat volutpat. Donec gravida felis sit amet magna bibendum, in ullamcorper arcu bibendum."
        ]
    },
    {
        title: "Post 7", 
        content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dolor eu orci elementum efficitur.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Vivamus sit amet justo eget urna suscipit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum."
        ]
    },
    {
        title: "Post 8",
        content: [
            "Praesent vel nisi at odio consectetur pellentesque.",
            "Sed in metus vel leo efficitur tincidunt at ut elit.",
            "Aliquam erat volutpat. Donec gravida felis sit amet magna bibendum, in ullamcorper arcu bibendum."
        ]
    },
];


const postsPerPage = 3;
let currentPage = 1;

const createArticle = (post, index) => {
    const article = document.createElement('article');
    article.className = 'post';

    const img = document.createElement('img');
    img.src = `https://picsum.photos/400/200?random=${index}`;
    img.alt = post.title;

    const textDiv = document.createElement('div');
    textDiv.className = 'text';

    const title = document.createElement('h3');
    title.textContent = post.title;

    textDiv.appendChild(title);

    post.content.forEach(paragraphText => {
        const paragraph = document.createElement('p');
        paragraph.textContent = paragraphText;
        textDiv.appendChild(paragraph);
    });

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    const button = document.createElement('button');
    button.textContent = 'Leia mais';

    buttonContainer.appendChild(button);
    article.appendChild(img);
    article.appendChild(textDiv);
    article.appendChild(buttonContainer);

    return article;
};

const renderPosts = (posts) => {
    const postsContainer = document.getElementById("allposts");
    if (!postsContainer) return;

    postsContainer.innerHTML = '';
    posts.forEach((post, index) => {
        const article = createArticle(post, index);
        postsContainer.appendChild(article);
    });
};

const updatePosts = () => {
    const postsContainer = document.getElementById("allposts");
    const paginationContainer = document.getElementById("pagination");
    if (!postsContainer || !paginationContainer) return;

    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(posts.length / postsPerPage);
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    const currentPosts = posts.slice(start, end);

    renderPosts(currentPosts);

    if (currentPage > 1){
        const prevPage = document.createElement('small');
        prevPage.innerHTML = `<a href="#" onclick="prevPage()"> &lt </a> `;
        paginationContainer.appendChild(prevPage);
    }

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.style.display = 'inline';
        li.style.marginRight = '10px';

        const a = document.createElement('a');
        a.textContent = i;
        a.href = '#';
        a.onclick = (e) => {
            e.preventDefault();
            currentPage = i;
            updatePosts();
        };

        li.appendChild(a);
        paginationContainer.appendChild(li);
    }

    const nextPage = document.createElement('small');
    if (currentPage < totalPages)
        nextPage.innerHTML = `<a href="#" onclick="nextPage()"> &gt </a>`;
    paginationContainer.appendChild(nextPage);
};

const nextPage = () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
        currentPage++;
        updatePosts();
    }
};

const prevPage = () => {
        if (currentPage >= 1) {
        currentPage--;
        updatePosts();
    }
};

updatePosts();


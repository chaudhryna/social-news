// 'database' of links
const links = [
    {
        title: 'Hacker News',
        url: 'https://news.ycombinator.com',
        author: 'Baptista'
    },
    {
        title: 'Reddit',
        url: 'https://reddit.com',
        author: 'Thomas'
    },
    {
        title: 'Bong Bong',
        url: 'https://bong-bong.net',
        author: 'Daniel'
    },
];
// Link object constructor class
class Link {
    constructor(title, url, author) {
        this.title = title;
        this.url = url;
        this.author = author;
    }
};

const content = document.querySelector('#content');
const submitButton = document.querySelector('#submitButton');
const linkForm = document.querySelector('.linkForm');
const addLink = document.querySelector('#addLink');
const alertAdd = document.querySelector('.alert');

function loadLinks(links) {
    content.textContent = '';
    links.forEach(link => {
        const linkCard = document.createElement('div');
        linkCard.classList.add('linkCard');
        const linkTitle = document.createElement('a');
        linkTitle.textContent = link.title;
        linkTitle.classList.add('linkTitle');
        const linkUrl = document.createElement('span');
        linkUrl.textContent = link.url;
        linkUrl.classList.add('linkUrl');
        const linkHeadline = document.createElement('h4');
        linkHeadline.appendChild(linkTitle);
        linkHeadline.appendChild(linkUrl);
        linkCard.appendChild(linkHeadline);
        const linkAuthor = document.createElement('span');
        linkAuthor.classList.add('linkAuthor');
        linkAuthor.innerHTML = `Submitted by: ${link.author}`;
        linkCard.appendChild(linkAuthor);
        content.appendChild(linkCard);
    });
};

addLink.addEventListener('click', e => {
    e.preventDefault();
    const linkTitle = document.querySelector('#linkTitle');
    let title = linkTitle.value;
    const linkUrl = document.querySelector('#linkUrl');
    let url = linkUrl.value;
    if (!linkUrl.value.startsWith('http')) {
        url = `http://${linkUrl.value}`;
    }
    const linkAuthor = document.querySelector('#linkAuthor');
    let author = linkAuthor.value;
    const newLink = new Link(title, url, author);
    console.log(newLink);
    links.unshift(newLink);
    linkForm.style.display = 'none';
    alertAdd.style.display = 'block';
    alertAdd.textContent = `The link ${linkTitle.value} has been successfully added.`;
    setTimeout(() => {
        alertAdd.style.display = 'none';}, 2000);
    linkTitle.value = '';
    linkUrl.value = '';
    linkAuthor.value = '';
    loadLinks(links);
})


loadLinks(links);

// 'Unhide' the form
submitButton.addEventListener('click', e => {
    linkForm.style.display = 'block';
})
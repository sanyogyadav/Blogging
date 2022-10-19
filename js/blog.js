window.addEventListener('load', () => {
    const title = localStorage.getItem('TITLE');
    const article = localStorage.getItem('ARTICLE');

    document.getElementById('b_title').innerHTML = title;
    document.getElementById('b_article').innerHTML = article;
})
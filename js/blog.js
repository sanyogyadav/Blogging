window.addEventListener('load', () => {
    const title = localStorage.getItem('TITLE');
    const article = localStorage.getItem('ARTICLE');
    const title1 = sessionStorage.getItem('TITLE1');
    const article1 = sessionStorage.getItem('ARTICLE1');

    document.getElementById('b_title').innerHTML = title;
    document.getElementById('b_article').innerHTML = article;
    document.getElementById('b_title').innerHTML = title1;
    document.getElementById('b_article').innerHTML = article1;
})
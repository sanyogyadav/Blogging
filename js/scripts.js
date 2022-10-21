function handleSubmit() {
    const title = document.getElementById('blog_title').value;
    const article = document.getElementById('blog_article').value;

    localStorage.setItem("TITLE",title);
    localStorage.setItem("ARTICLE",article);
    sessionStorage.setItem("TITLE1",title);
    sessionStorage.setItem("ARTICLE1",article);
    return;
}
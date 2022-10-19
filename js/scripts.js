function handleSubmit() {
    const title = document.getElementById('blog_title').value;
    const article = document.getElementById('blog_article').value;
    const file = document.getElementById('file-upload');

    localStorage.setItem("TITLE",title);
    localStorage.setItem("ARTICLE",article);

    file.addEventListener('change', () =>{
        const fr = new FileReader();

        fr.readAsDataURL(file.files[0]);
        fr.addEventListener('load', () => {
            const url = fr.result;
            console.log(url);
        })
    })
    return;
}
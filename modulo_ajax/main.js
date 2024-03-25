document.addEventListener('DOMContentLoaded', function() {
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const avatar = document.querySelector('#avatar');
    const repositorio = document.querySelector('#repos');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/uVitin')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            name.innerText = json.name;
            username.innerText = json.login;
            avatar.src = json.avatar_url;
            repositorio.innerText = json.public_repos;
            seguidores.innerText = json.followers;
            seguindo.innerText = json.following;
            link.href = json.html_url;
        })
})
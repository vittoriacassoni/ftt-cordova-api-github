//mudar o parâmetro após 'users/' da url para visualizar outro perfil 

axios.get(`https://api.github.com/users/alveslaura`).then(respostaAPI);
function respostaAPI(reposta){
    console.log(reposta.data);
    const photo = document.getElementById('photo');
    photo.setAttribute('src',reposta.data.avatar_url);

    const name = document.getElementById('name');
    name.innerText = reposta.data.name;

    const login = document.getElementById('login');
    login.innerText = reposta.data.login;

    const bio = document.getElementById('bio');
    bio.innerText = reposta.data.bio || '';

    const followers = document.getElementById('followers');
    followers.innerText = reposta.data.followers;

    const following = document.getElementById('following');
    following.innerText = reposta.data.following;

}
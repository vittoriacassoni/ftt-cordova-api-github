var username = window.localStorage.getItem('user');

axios.get(`https://api.github.com/users/${username}/events/public`).then(respostaAPI);
function respostaAPI(resposta) {
    console.log(resposta.data);

    var divPai = '';
    

    resposta.data.map(function (item) {
        const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
        var data = new Date(item.created_at);
        var dataform = ((data.getDate() )) + " " + meses[(data.getMonth())] + " " + data.getFullYear();
        divPai += `<div class="container left">
        <div class="content">
        <h2>${dataform}</h2>
        <p>${descricaoTimeline(item)}</p>
        </div>
        </div>
        <div class="container right">
        <div class="content">
        <h2>${dataform}</h2>
        <p>${descricaoTimeline(item)}</p>
        </div>
        </div>`
    });

    document.getElementById('timeline').innerHTML = divPai;
}

function descricaoTimeline(item) {
    let itens = '';   

    if (item.type == 'MemberEvent') {
        itens = `Repositório:${item.repo.name}. 
        Evento: ${item.actor.login} Adicionou ${item.payload.member.login}`;
    }
    else if (item.type == 'PushEvent') {
        itens = `Repositório:${item.repo.name}. 
        Evento: Realizou o evento Push`;
    }
    else if (item.type == 'CreateEvent') {
        itens = `Repositório:${item.repo.name}. 
        Evento: Criou um novo repositório`;
    }
    return itens;

}



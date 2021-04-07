function createNewsCards(nData) {

  for (i in nData) {

    var card = document.createElement("div"); //Card
    card.setAttribute("class", "card");

    var data = document.createElement("div"); //Date text
    data.setAttribute("class", "data");

    var time = document.createElement("time"); //Creation date of repository

    data.innerHTML = "CRIADO EM:"
    data.appendChild(time)

    var name = document.createElement("h2"); //Repository name

    var description = document.createElement("div"); //Repository description
    description.setAttribute("class", "info");

    var language = document.createElement("div"); //Language name
    language.setAttribute("class", "tags");

    time.innerText = nData[i].created_at.substring(0, 10);

    name.innerText = nData[i].name;
    description.innerText = nData[i].description;
    language.innerText = nData[i].language;

    // Append the text to cards
    card.appendChild(data);
    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(language);

    document.getElementById("container").appendChild(card);

  }
}

function reloadPage() {

  //TODO: Substituir a url fixa pela da variavel, e adaptar o userName para o nome certo da tag
  //document.getElementById("userName").innerHTML = "";
  //url = "https://api.github.com/users/" + userName +  "/repos"

  url = "https://api.github.com/users/alveslaura/repos"

  var xhr = new XMLHttpRequest();

  xhr.onload = function () {

    if (xhr.status >= 200 && xhr.status < 300) {

      var reps = JSON.parse(xhr.responseText);
      createNewsCards(reps);

    } else {

      let error_message = "ERROR!" + xhr.statusText;
      document.getElementById("Repositorios").innerHTML = error_message;
    }
  };

  xhr.open('GET', url);
  xhr.send();

}



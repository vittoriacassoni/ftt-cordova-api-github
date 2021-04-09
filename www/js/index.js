var username = "";
function openPage(event, page){
      let file = 'myProfile.html';
    switch (page) {
        case 'Profile':
          file = 'myProfile.html';
          break;
        case 'Job':
            file = 'findJob.html';
            break;
        case 'Repositories':
            file = 'repositories.html';
          break;
        case 'Timeline':
            file = 'timeline.html';
            break;
        default:
          console.log('Invalido');
      }

      window.location.replace(file);
  }


  function search(event){
    let username = document.getElementById('nameGithub').value;
    console.log(username);
    axios.get(`https://api.github.com/users/${username}`).then((response) =>{
      window.localStorage.removeItem('user');
      window.localStorage.setItem('user', username);
      
      openPage(event, "Profile");
    })
    .catch((error) => {
      const el = document.querySelector('#error');
      if (el.classList.contains("d-none")) {
        el.classList.remove("d-none");
      }
    });
  }

  
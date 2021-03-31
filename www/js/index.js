function getHTMLFile(path, success, failure) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', path)
  
    xhr.onload = () => {
      if (xhr.status == 200)
        success(xhr.response)
      else if (failure)
        failure(xhr.status)
    }
  
    xhr.send()
  }

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
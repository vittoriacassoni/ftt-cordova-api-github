let fullTime = false;

function search(){
  let description = document.getElementById("description").value;
  let location = document.getElementById("location").value;
  
  var url = `https://jobs.github.com/positions.json?utf8=%E2%9C%93&description=${description}&location=${location}`;
  if(fullTime)
    url += `&full_time=on`;

  console.log(url);

  axios.get(`https://cors-anywhere.herokuapp.com/${url}`).then(searchJob);

}

function searchJob(response){
  var jobs = '';
  document.getElementById('jobs').innerHTML = jobs;

  response.data.map(function(job){
    jobs += `<div class="card">
              <div class="container">
                <div class="job-title">
                  <h4><b>${job.title} - ${job.company}</b></h4>
                  ${job.type == "Full Time" ? "<i class='fa fa-clock-o'></i>" : 
                  "<i class='fa fa-files-o'></i>"}
                </div>
                ${job.description}
                <b>Inscreva-se:</b>${job.how_to_apply}
              </div>
            </div>`
  });

  document.getElementById('jobs').innerHTML = jobs;

}

function fullTimeChange(){
  fullTime = !fullTime;
}
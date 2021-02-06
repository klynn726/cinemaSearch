

$("#userInput").click(function() {
  $("#userInput").keyup(function(event){
    if(event.keyCode === 13) {
      $("#searchBtn").click();
    };
  });
});
$("#searchBtn").click(function() {
      // Selecting the input element and get its value 
      var inputVal = document.getElementById("userInput").value;
        $.ajax({ 
          'url': "http://www.omdbapi.com/?apikey=3171b37b&t=" + inputVal,
          'method': 'GET',
          'timeout': 0,
        }).then(function(response) {
          var titleResponse = response.Title,
              posterResponse = response.Poster,
              ratedResponse = response.Rated,
              ratingsResponse = response.Ratings[1].Value || response.Ratings[1].Value("Sorry, your ratings are in another castle!"),
              runtimeResponse = response.Runtime,
              genreResponse = response.Genre,
              directorResponse = response.Director,
              plotResponse = response.Plot;
              // console.log(titleResponse, posterResponse, ratedResponse, ratingsResponse, runtimeResponse, genreResponse, directorResponse, plotResponse);
          document.getElementById("movieDisplay2").innerHTML = 
            `<div id="cardVanish" class="center-align card"> 
                <div class="card-image activator waves-effect waves-block waves-light"> 
                  <img src="${posterResponse}">
                </div>
              <div class="card-content">
            <span class="card-title activator blue-text text-darken-4">${titleResponse}<i class="material-icons right">more_vert</i></span>
              </div>
              <div class="card-reveal">
                <div class="card-title blue-text text-darken-4">
                  <p>Director: ${directorResponse}<i class="material-icons right activator">cancel</i></p>
                  <p>${ratedResponse}</p>
                  <p>${runtimeResponse}</p>
                  <p>Ratings: ${ratingsResponse}</p>
                  <p>${genreResponse}</p>
                  <p class="line">____________________</P>
                  <p>${plotResponse}</p>
                </div>
              </div>
            </div>` ;
        document.getElementById("userInput").value = ""    
        });
}); 
     //joke API
        $('#joker').click(function(){
            fetch("https://official-joke-api.appspot.com/random_joke")
            .then(function(response) {
              return response.json();
                            
            })
            .then(function(response){
              // console.log(response);
              var jokesContainerEl = document.querySelector('#jokes');
              jokesContainerEl.innerHTML = '';
              var jokesContent = document.createElement("div");
              jokesContent.classList.add("hah")
              jokesContent.innerHTML = `
              <div class="center-align card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="./Assets/images/cat2.jpg" height="300" width="430">
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">${response.setup}<i class="material-icons right">more_vert</i></span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">${response.punchline}<i class="material-icons right">close</i></span>
                </div>
              </div>`
              jokesContainerEl.appendChild(jokesContent);
            });
        });



        
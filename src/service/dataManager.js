const getData = () => {
    return fetch('/data/logements.json', {
      headers : {
        'Content-type' : 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(function(response) {
      console.log(response)
      return response.json();
    })
  }

  export {getData};
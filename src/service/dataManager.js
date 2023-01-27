const getData = () => {
  return fetch('/data/logements.json', {
    headers : {
      'Content-type' : 'application/json',
      'Accept': 'application/json'
    }
  })
  .then((response) => {
    if(response.ok) {
      console.log(response)
      return response.json();
    } else {
      return Promise.reject("Fichier non trouvé");
    }
  })
  .catch(error => {
    throw error;
  })
}

export {getData};
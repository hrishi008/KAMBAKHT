var Database;
function getData() {
    let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

 

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://getpantry.cloud/apiv1/pantry/f832a526-49ab-4b4e-b976-061fa2027d41", requestOptions)
  .then(response => response.text())
  .then(result => {console.log(result)
    Database=JSON.parse((JSON.parse(result).description));
    console.log(Database);

})
  .catch(error => console.log('error', error));

    
}


const tabs = document.querySelector(".tabs");
const tabButton = document.querySelectorAll(".navTab");
const content = document.querySelectorAll(".content");
var a={
    dataBase:{
        videos:[],
        shorts:[]
    },
    hrishi2:2
}
tabs.addEventListener("click", e => {
	const id = e.target.dataset.toggle;
	if (id) {
		tabButton.forEach(navTab => {
			navTab.classList.remove("active");
		});
		e.target.classList.add("active");
	}
	content.forEach(content => {
		content.classList.remove("active");
	});

	const element = document.getElementById(id);
	element.classList.add("active");
});

function setData() {
    getData();
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
a.dataBase.shorts.push({
    title:document.getElementById('email').value,
    link:''+document.getElementById('password').value
});
let raw = JSON.stringify({
  "name": "hrihsi",
  "description": JSON.stringify(a),
});

let requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://getpantry.cloud/apiv1/pantry/f832a526-49ab-4b4e-b976-061fa2027d41", requestOptions)
  .then(response => response.text())
  .then(result =>{ console.log(result)
   

})
  .catch(error => console.log('error', error));

}
function setData2() {
    getData();
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
a.dataBase.videos.push({
    title:document.getElementById('email2').value,
    link:''+document.getElementById('password2').value
});
let raw = JSON.stringify({
  "name": "hrihsi",
  "description": JSON.stringify(a),
});

let requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://getpantry.cloud/apiv1/pantry/f832a526-49ab-4b4e-b976-061fa2027d41", requestOptions)
  .then(response => response.text())
  .then(result =>{ console.log(result)
   

})
  .catch(error => console.log('error', error));

}

  
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
    a=JSON.parse((JSON.parse(result).description));
    console.log(a);

})
  .catch(error => console.log('error', error));

    
}
function cleanData(){
  a={
    dataBase:{
        videos:[],
        shorts:[]
    },
    hrishi2:2
}
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let raw = JSON.stringify({
  "name": "hrihsi",
  "description": JSON.stringify(a),
});

let requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://getpantry.cloud/apiv1/pantry/f832a526-49ab-4b4e-b976-061fa2027d41", requestOptions)
  .then(response => response.text())
  .then(result =>{ console.log(result)
   

})
  .catch(error => console.log('error', error));

}
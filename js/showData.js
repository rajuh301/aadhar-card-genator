const getData = localStorage.getItem('Data');
const convertforUse = JSON.parse(getData);
console.log(convertforUse.image)


const idName = document.getElementById('idName');
idName.innerText = convertforUse.Name

const dob = document.getElementById('idDob');
dob.innerText = convertforUse.InputDateOf

const gender = document.getElementById('idgender');
gender.innerText = convertforUse.Gender;

const showId = document.getElementById('showId');
showId.innerText = convertforUse.ID

const showImg = document.getElementById('showImg');

showImg.setAttribute = convertforUse.image




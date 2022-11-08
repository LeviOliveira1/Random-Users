const URL = 'https://randomuser.me/api/';

const img = document.querySelector('.user-img')
const title = document.querySelector('.user-title')
const value = document.querySelector('.user-value')
const btn = document.querySelector('.btn')
const btns = document.querySelector('.icon')
const titleNumber = document.querySelector('.titleNumber')
const numberUser = document.querySelector('.user-phone')
const emailUser = document.querySelector('.user-email')
const titleEmail = document.querySelector('.titleEmail')

const getUser = async() =>{
    const response = await fetch(URL);
    const data = await response.json()
    const person = data.results[0]
    const {phone, email} = person;
    const {large:image} = person.picture;
    const {password} = person.login;
    const {first,last} = person.name;
    const {dob:{age},} = person;
    const {street:{number, name},} = person.location;
    return{
        phone, email, image , password, age , street:`${number} ${name}`, name:`${first} ${last}`,
    }

   
}


const displayUser = (person) =>{
    img.src = person.image
    
    value.textContent= person.name
    title.textContent = `Meu nome é: `;

    titleNumber.textContent = `Meu número:`
    numberUser.textContent = person.phone

    titleEmail.textContent = `Meu email:`
    emailUser.textContent = person.email

};

const showUser = async () =>{

   const person = await getUser();
   displayUser(person);
   
}

window.addEventListener('DOMContentLoaded',showUser)
btn.addEventListener('click',showUser)


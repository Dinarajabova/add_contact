// form elementlarini chaqirib olish


const form = document.querySelector(".contact-form");

const nameInput = form.querySelector(".name-input");
const lastNameInput = form.querySelector(".last-name-input");
const formSelect = form.querySelector(".form-select");
const telInput = form.querySelector(".tel-input");



const elAddedContact = document.querySelector(".table-body");



// contacts array
const contactsArray = [];

// funksiya formdan arrayga obyektni push qilish

const pushObject = function(nameValue, lastNameValue, selectValue, telValue) {

     contactsArray.push({
         name: nameValue,
         surname: lastNameValue,
         relationship: selectValue,
         number: telValue
     })
}

// tabletga arrayni append qilish


   

const appendElement = function() {
    contactsArray.forEach(function (contact) {


        const elNewList = document.createElement("tr");

        elNewList.innerHTML = `
         <td class="table-contact-name">${contact.name}</td>
         <td class="table-contact-lname">${contact.surname}</td>
         <td class="table-contact-relation">${contact.relationship}</td>
         <td class="table-contact-tel">${contact.number}</td>
     `
     elAddedContact.append(elNewList);        

    })
    



    
}






// formni eshitish

 form.addEventListener("submit", function(evt) {
     evt.preventDefault(); 

     elAddedContact.innerHTML = "";

     const nameValue = nameInput.value.trim();
     const lastNameValue = lastNameInput.value.trim();
     const selectValue = formSelect.value;
     const telValue = telInput.value.trim();


   

     

     pushObject(nameValue, lastNameValue, selectValue, telValue);
     appendElement();
    console.log(contactsArray);
    
 })
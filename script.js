const contactButton = document.querySelector('#addContactButton');
const inputs = document.querySelectorAll('.formInput');

contactButton.addEventListener('click', onContactButtonClick);

function onContactButtonClick(e) {
    const contact = getContact();

    if (isContactValid(contact)) {
        alert('Error');
        return;
    }

    console.log(contact);
}

function getContact() {
    const contact = {};

    inputs.forEach(input => {
        contact[input.name] = input.value;
    })

    return contact;
}

function isContactValid(contact) {
    return isEmptyCell(contact.name)
        || isEmptyCell(contact.surname)
        || isEmptyCell(contact.phone);
}

function isEmptyCell(str) {
    return typeof str === 'string' && str.trim() === '';
}

// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та
// вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form1 = document.forms.form;
form1.onsubmit = function (e) {
    e.preventDefault();

    let block = document.createElement('div');
    let name = document.createElement('div');
    let surname = document.createElement('div');
    let age = document.createElement('div');

    block.append(name, surname, age);

    name.innerText = `${this.name.value}`;
    surname.innerText = `${this.surname.value}`;
    age.innerText = `${this.age.value}`;
    this.name.value = '';
    this.surname.value = '';
    this.age.value = '';

    document.body.appendChild(block);
};
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
//     з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let ageForm = document.forms.send;
ageForm.onsubmit = function (e) {
    e.preventDefault();

    if (this.age.value < 18) {
        return alert('You are younger than 18 years old and you are child');
    }

    return alert('You are older than 18 years old and you are adult');

}

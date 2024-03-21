//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
//     з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let ageForm = document.forms.send;
ageForm.onsubmit = function (e) {
    e.preventDefault();

    let div = document.createElement('div');
    let input = document.getElementsByName('age');
    let result = document.createElement('h3');
    age.push(input);
    div.append(result)

    switch (input) {
        case age >= 18:
            result.innerText = 'You are older than 18 years old and you are adult';
            break;
        case age < 18:
            result.innerText = 'You are younger than 18 years old and you are child';
            break;
    }
    return result;

}
document.body.appendChild(div);
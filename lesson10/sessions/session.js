// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої
// потрібно відмалювати всю інформацію про відвідування сторінки form.html. Інфу НЕ виводити в консоль, а побудувати
// дом структуру під кожну сессію

function showSessions(dom) {
    let ul = document.createElement('ul');
    dom.appendChild(ul);
    let sessionsArray = JSON.parse(localStorage.getItem('sessions'));
    for (const session of sessionsArray) {
        let li = document.createElement('li');
        li.innerText = session.date;
        ul.appendChild(li);
    }
}
showSessions(document.body)

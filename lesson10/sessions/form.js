// Є сторінка form.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки.

function saveVisit() {
    let sessionsArray = JSON.parse(localStorage.getItem('sessions')) || [];
    let date = new Date().toISOString();
    sessionsArray.push({
        date
    });
    localStorage.setItem('sessions', JSON.stringify(sessionsArray));
}

saveVisit();

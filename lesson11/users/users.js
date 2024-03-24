//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => users.forEach(user => {
            let userBlock = document.createElement('div');
            userBlock.classList.add('user');
            userBlock.innerText = `${user.id}. ${user.name}`;

            document.body.appendChild(userBlock);

            let btn = document.createElement('button');
            userBlock.appendChild(btn);

            let a = document.createElement('a');
            a.href = ` ./user_details.html?id=${user.id}`;
            a.innerText = 'Looking for details';

            btn.appendChild(a);
    })
    );


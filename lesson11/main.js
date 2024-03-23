// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(value => {
//         let div = document.createElement('div');
//
//         let {carts} = value;
//         for (const cart of carts) {
//             let cartBlock = document.createElement('div');
//             let cartId = document.createElement('h3');
//             cartId.innerText = `Cart # ${cart.id}. Products:`;
//             for (const product of cart.products) {
//                 let block = document.createElement('ul');
//                 let li = document.createElement('li');
//                 li.innerText =  `${product.id} ${product.title}
//                 Price: ${product.price}
//                 Quantity: ${product.quantity}
//                 Total: ${product.total}
//                 DiscountPercentage: ${product.discountPercentage}
//                 DiscountedPrice: ${product.discountedPrice}`;
//                 let img = document.createElement('img');
//                 img.src = product.thumbnail;
//
//                 block.append(li, img);
//             cartId.appendChild(block);
//             cartBlock.appendChild(cartId);
//             div.appendChild(cartBlock)
//             }
//         }
//         document.body.appendChild(div)
//     });

//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список
//     під час відображення.

let url = new URL('https://dummyjson.com/recipes');

fetch(url)
    .then(res => res.json())
    .then(value => {
        let div = document.createElement('div');
        div.innerText = 'Recipes.';
        let {recipes} = value;
        for (const recipe of recipes) {
            let recipeBlock = document.createElement('div');

        }
    })

//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
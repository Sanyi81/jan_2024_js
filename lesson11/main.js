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
            let recipeName = document.createElement('h4');
            recipeName.innerText = `${recipe.id}. ${recipe.name}`;
            let img = document.createElement('img');
            img.classList.add('img');
            img.src = recipe.image;
            let ingr = document.createElement('p');
            ingr.innerText = 'Ingredients:';
            let ingrList = document.createElement('ul');
            for (const ingrElement of recipe.ingredients) {
                let listOfIngr = document.createElement('li');
                listOfIngr.innerText = ingrElement;
                ingrList.appendChild(listOfIngr);
                ingr.appendChild(ingrList);
            }
            let instr = document.createElement('p');
            instr.innerText = 'Instructions:';
            let instrList = document.createElement('ul');
            for (const instrElement of recipe.instructions) {
                let listOfInstr = document.createElement('li');
                listOfInstr.innerText = `${instrElement}`;
                instrList.appendChild(listOfInstr);
                instr.appendChild(instrList);
            }
            let prepTime = document.createElement('p');
            prepTime.innerText = `Preparing time:  ${recipe.prepTimeMinutes} min`;
            let cookTime = document.createElement('p');
            cookTime.innerText = `Cooking time: ${recipe.cookTimeMinutes} min`;
            let servings = document.createElement('p');
            servings.innerText = `Servings: ${recipe.servings}`;
            let diff = document.createElement('p');
            diff.innerText = `Difficultly: ${recipe.difficulty}`;
            let cuisine = document.createElement('p');
            cuisine.innerText = `Cuisine: ${recipe.cuisine}`;
            let cal = document.createElement('p');
            cal.innerText = `Calories per serving: ${recipe.caloriesPerServing} kCal`;
            let tags = document.createElement('p');
            tags.innerText = 'Tags:';
            let tagList = document.createElement('ul');
            for (const tag of recipe.tags) {
                let listOfTags = document.createElement('li');
                listOfTags.innerText = `${tag}`;
                tagList.appendChild(listOfTags);
                tags.appendChild(tagList);
            }
            let user = document.createElement('p');
            user.innerText = `User: ${recipe.userId}`;
            let rating = document.createElement('p');
            rating.innerText = `Rating: ${recipe.rating}`;
            let review = document.createElement('p');
            review.innerText = `Review: ${recipe.reviewCount}`;
            let mealType = document.createElement('p');
            mealType.innerText = 'Meal type:';
            let mealList = document.createElement('ul');
            for (const mealTypeElement of recipe.mealType) {
                let typeOfMeal = document.createElement('li');
                typeOfMeal.innerText = `${mealTypeElement}`;
                mealList.appendChild(typeOfMeal);
                mealType.appendChild(mealList);
            }
            recipeBlock.append(recipeName, img, ingr, instr, prepTime, cookTime, servings, diff, cuisine, cal, tags, user, rating, review, mealType)
            div.appendChild(recipeBlock);
        }
        document.body.appendChild(div);
    })

//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
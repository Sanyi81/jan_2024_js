fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => users.forEach(user => {

            let div = document.createElement('div');
            div.classList.add('user_info')

            let userId = document.createElement('p');
            userId.innerText = `id: ${user.id}`;

            let userName = document.createElement('p');
            userName.innerText = `name: ${user.name}`;

            let userUsername = document.createElement('p');
            userUsername.innerText = `username: ${user.username}`;

            let userEmail = document.createElement('p');
            userEmail.innerText = `email: ${user.email}`;

            let userAddress = document.createElement('divAddress');
            userAddress.innerText = `address:`
                let addressStreet = document.createElement('p');
                addressStreet.innerText = `street: ${user.address.street}`;
                let addressSuite = document.createElement('p');
                addressSuite.innerText = `suite: ${user.address.suite}`;
                let addressCity = document.createElement('p');
                addressCity.innerText = `city: ${user.address.city}`;
            let addressZipcode = document.createElement('p');
                addressZipcode.innerText = `zipcode: ${user.address.zipcode}`;
                let addressGeo = document.createElement('divGeo');
                addressGeo.innerText = `geo:`;
                    let geoLat = document.createElement('p');
                    geoLat.innerText = `lat: ${user.address.geo.lat}`;
                    let geoLng = document.createElement('p');
                    geoLng.innerText = `lng: ${user.address.geo.lng}`;
                addressGeo.append(geoLat, geoLng);
                userAddress.append(addressStreet, addressSuite, addressCity, addressZipcode, addressGeo);

            let userPhone = document.createElement('p');
            userPhone.innerText = `phone: ${user.phone}`;

            let userWebsite = document.createElement('p');
            userWebsite.innerText = `website: ${user.website}`;

            let company = document.createElement('divCompany');
            company.innerText = `company:`;
                let companyName = document.createElement('p');
                companyName.innerText = `name: ${user.company.name}`;
                let companyCatchPhrase = document.createElement('p');
                companyCatchPhrase.innerText = `catchPhrase: ${user.company.catchPhrase}`;
                let companyBs = document.createElement('p');
                companyBs.innerText = `bs: ${user.company.bs}`;
                company.append(companyName, companyCatchPhrase, companyBs);

        div.append(userId, userName, userUsername, userEmail, userAddress, userPhone, userWebsite, company);

        document.body.appendChild(div);
        }
    ));
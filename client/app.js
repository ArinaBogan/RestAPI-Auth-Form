document.querySelector('.registerBtn').addEventListener('click', async () => {
    const userName = document.querySelector('.userName');
    const email = document.querySelector('.email');
    const phone = document.querySelector('.phone');
    const password = document.querySelector('.password');
    const confirmPwd = document.querySelector('.confirmPwd');

    const obj = {
        username: userName.value,
        email: email.value,
        phone: phone.value,
        pwd: password.value
    }

    const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    const json = await response.json();
    console.log(json);
});

document.querySelector('.authBtn').addEventListener('click', async () => {
    const authEmail = document.querySelector('.authEmail');
    const authPwd = document.querySelector('.authPwd');

    const obj = {
        email: authEmail.value,
        pwd: authPwd.value
    }

    const response = await fetch('http://localhost:3000/api/authorize', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    const json = await response.json();
    console.log(json);
})
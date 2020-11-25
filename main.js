
const email = document.getElementById('email')
const senha = document.getElementById('senha')

const submitBtn = document.getElementById('submit')


submitBtn.addEventListener("click", (event) => {

    let bodyDados = {
        login: email.value,
        senha: senha.value
    }

    fetch("https://santander-coders-java-luan.herokuapp.com/api/usuarios", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyDados)
    })
        .then(res => console.log(res.json()))
        .catch(err => console.log(err))
})


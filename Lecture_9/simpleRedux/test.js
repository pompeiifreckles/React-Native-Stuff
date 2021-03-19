const fetch = require('node-fetch')

const login = (username, password) => {
    return fetch('http://localhost:8000/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    })
}

const loginHandler = (username, password) => {
    login(username, password)
    .then(res => {console.log('sucess', res.status, res.ok); if(!res.ok) return res.text()})
    .then(text => console.log(text))
    .catch(error => console.log('Network Request failed:', error.errno))
}

loginHandler('meow', 'password')
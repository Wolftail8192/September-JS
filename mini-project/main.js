let wrap = document.getElementsByClassName('wrap')[0]
fetch('https://jsonplaceholder.typicode.com/users')
.then(function (response) {
    let jsonBody = response.json();
    return jsonBody;
}).then(users => {
    for (const user of users) {
        let div  = document.createElement('div')
        div.innerText = `${user.id} - ${user.name}`

        wrap.appendChild(div)
        let btn = document.createElement("button")
        btn.innerText = 'push me'
        btn.onclick = () => {
            location.href = `user-details.html?user=${JSON.stringify(user)}`;
        }
        div.appendChild(btn)
    }
})
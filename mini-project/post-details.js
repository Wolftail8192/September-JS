let jsonUserP = new URL(location).searchParams.get('post');
let post = JSON.parse(jsonUserP);

let block = document.getElementById('block');

let jsonUserC = new URL(location).searchParams.get('comment');
let comment = JSON.parse(jsonUserC);

let h2U = document.createElement('h2');
let h2 = document.createElement('h2');
let h3 = document.createElement('h3');
let p = document.createElement('p');

block.append(h2U,h2,h3,p);

h2U.innerText = `user Id - ${post.userId}`;
h2.innerText = `post Id - ${post.id}`;
h3.innerText = `Title of post: ${post.title}`;
p.innerText = `${post.body}`;

let container = document.getElementsByClassName('container')[0];
let info;
info = document.getElementsByClassName('info')[0];
let btn = document.createElement('button');
btn.innerText = 'user comments';
btn.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(value => value.json())
        .then(comments => {
            container.innerHTML = ' ';
            for (let comment of comments) {
                let mainComment = document.createElement('div');
                mainComment.classList.add('mainComment');
                let email = document.createElement('h3');
                email.innerText = `Email : ${comment.email}`;
                let text = document.createElement('p');
                text.innerText = comment.body;

                mainComment.appendChild(email);
                mainComment.appendChild(text);
                container.appendChild(mainComment);

            }
        })
}
info.appendChild(btn);




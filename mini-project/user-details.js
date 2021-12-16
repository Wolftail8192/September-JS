let url = new URL(location);
let jsonUser = url.searchParams.get('user');
let user = JSON.parse(jsonUser);
console.log(user);

let mainWrap = document.getElementsByClassName('mainWrap')[0];
let info = document.createElement('div')

let h1 = document.createElement('h1')
h1.innerText = 'User info & Posts'


let h = document.createElement('h2');
h.innerText = `${user.id} :  ${user.name} ${user.username} `;


let p = document.createElement('p');
p.innerText = `Email:${user.email},  phone:${user.phone},  website:${user.website}`;

let p2 = document.createElement('p');
p2.innerText = `Address: city:${user.address.city}, street:${user.address.street}, suite:${user.address.suite}, zipcode:${user.address.zipcode},  GEO:  latitude:${user.address.geo.lat}, longitude:${user.address.geo.lng}`;

let p3 = document.createElement('p');
p3.innerText = `Company:  Name company:${user.company.name}, Catch phrase:${user.company.catchPhrase}, bs:${user.company.bs}`;

mainWrap.appendChild (info);
info.append(h,p,p2,p3);


let infoButton = document.getElementsByClassName('infoButton')[0];
let container = document.getElementsByClassName('container')[0];

let btn = document.createElement('button')
btn.innerText = 'Post user info - Push Me'
btn.onclick= () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            container.innerHTML = ' ';
            for (let post of posts) {
                let box = document.createElement('div')
                box.classList.add('box')
                let posts = document.createElement('h3')
                posts.innerText = `${post.id}: ${post.title}`
                let postLink = document.createElement('a')
                postLink.innerText = 'Post-details and then just touch me'
                postLink.href = `post-details.html?post=${JSON.stringify(post)}`;

                box.append(posts, postLink)
                container.appendChild(box)


            }
        })

}
infoButton.appendChild(btn)


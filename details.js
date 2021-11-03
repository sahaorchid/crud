let card_img=document.getElementById('card_img');
console.log(card_img)
let card_body=document.getElementById('card_body');
let card_title=document.getElementById('card_title');
const param=(window.location.search)
let id=(param.split('=')[1])
console.log(id)

function detilsPost(data){
    card_img.setAttribute('src',data.image_url)
    card_body.innerText=data.description;
    card_title.innerText=data.name
}
fetch(`http://localhost:5000/v1/api/blogs/${(id)}`)
.then((response) => response.json())
.then((json) =>{detilsPost(json)}) ;
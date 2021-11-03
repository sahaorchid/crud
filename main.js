



let container=document.getElementById('container');
let u_title=document.getElementById('u_title');
let u_desc=document.getElementById('u_desc');
let u_submit=document.getElementById('u_submitt');
let card_img=document.getElementById('card_img');


let card_body=document.getElementById('card_body');
let card_title=document.getElementById('card_title');
console.log(card_title)
let btn;

function updatepost(data){
  (u_title.value) =data.name 
  u_desc.value=data.description
  u_submit.addEventListener("click",(e)=>{
    updatePost(data.id,{
      "name": u_title.value,
      "description": u_desc.value,
      "image_url": ""
    })
  })

}

function deletePost(id){
    fetch(`http://localhost:5000/v1/api/blogs/${id}`, {
       method: 'DELETE',
    })
    .then(res => res.text())
    .then(res => console.log(res))

}
function updatePost(id,data){
  console.log(data)
  fetch(`http://localhost:5000/v1/api/blogs/${id}`,{
    method: 'PUT',
    headers:{
    'Content-Type':'application/json'
    },
    body: JSON.stringify(data)
  })

}


function createCard(data){

  
  const row=document.createElement('div');
  const col1=document.createElement('div');
  const card=document.createElement('div');
  const cardbody=document.createElement('div');
  cardbody.setAttribute('class', 'card-body');
  card.setAttribute('class', 'card');
  row.setAttribute('class', 'row');
  const cardheader=document.createElement('h5');
  cardheader.innerText=data.name
  const cardimg=document.createElement('img');
  cardimg.setAttribute('src', data.image_url);
  btn=document.createElement('a');
  d_btn=document.createElement('a');
  u_btn=document.createElement('a');
  d_btn.innerText='delete'
  u_btn.innerText='update'
  btn.innerText='read more'
  col1.setAttribute('class', 'col-sm-12');
  cardheader.setAttribute('class', 'card-title');
  cardimg.setAttribute('class','img');
  u_btn.classList.add('btn-secondary');
  u_btn.classList.add('btn');
  d_btn.classList.add('btn-danger');
  d_btn.classList.add('btn');
  btn.classList.add('btn-primary');
  btn.classList.add('btn');
  d_btn.setAttribute('href','/index.html')
  container.appendChild(row);
  row.appendChild(col1);
  col1.appendChild(card);
  col1.appendChild(cardheader);
  col1.appendChild(cardbody);
  col1.appendChild(cardimg);
  container.appendChild(btn);
  container.appendChild(d_btn);
  container.appendChild(u_btn);
  btn.addEventListener("click",()=>{

    location.href=`/details.html?id=${data.id}`

})
  d_btn.addEventListener("click",()=>{deletePost(data.id)})
  u_btn.addEventListener("click",()=>{
    updatepost(data)})

}



function createList(datas){
  datas.forEach((data)=>{
    createCard(data);
  })

}
function getAllPost(){

  fetch('http://localhost:5000/v1/api/blogs')
  .then((response) => response.json())
  .then((json) =>{createList(json.data)} );
}
getAllPost()


let title_input=document.getElementById('title_input');
let desc_input=document.getElementById('desc_input');
let submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>{

    // let desc=(desc_input.value)
    // let title=(title_input.value)
    fetch("http://localhost:5000/v1/api/blogs", {
        method: "POST",
        body: JSON.stringify({
            "name": (desc_input.value),
            "description": (title_input.value),
            "image_url": (file_input.value)
          }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json));

})







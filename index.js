document.querySelector("#search-btn").onclick = () =>{
    document.querySelector("#search-form").classList.toggle("active");
}

document.querySelector("#close").onclick = () =>{
    document.querySelector("#search-form").classList.toggle("active");
}

let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

document,addEventListener('DOMContentLoaded', function(){
    //by defult, submit button is disabled
    document.querySelector('#submit').disabled = true;
    document.querySelector('#task').onkeyup = () => {
        if (document.querySelector('#task').value.length > 0){
            document.querySelector('#submit').disabled = false;
        }else{
            document.querySelector('#submit').disabled = true;
        }
    }

    document.querySelector('form').onsubmit = () => {
        const task = document.querySelector('#task').value;
        console.log(task);
        const li =  document.createElement('li');
        li.innerHTML = task;
        
        document.querySelector('#tasks').appendChild(li);

        document.querySelector('#task').value = '';
        document.querySelector('#submit').disabled = true;

        //stap from submitting
        return false;
    }
});


let readMoreText = document.querySelector(".read-more-text");
let readMore = document.querySelector("#read-more");
readMore.onclick = function(){
    readMoreText.classList.toggle("show");
    if(readMoreText.classList.contains("show") === true){
        readMore.innerHTML = "read less";
    }else if(readMoreText.classList.contains("show") === false){
        readMore.innerHTML = "read more";
    }else{
        readMore.innerHTML = "read less";
    }
}
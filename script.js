const button = document.getElementById("myButton");

button.addEventListener("click", function () {
    alert("Salamat!");
});   


let button = document.getElementById("trollButton");

button.addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - button.offsetWidth);
    let y = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.left = x + "px";
    button.style.top = y + "px";
});

function sayLove() {
    console.log("I love you too! 😊");
}

sayLove();
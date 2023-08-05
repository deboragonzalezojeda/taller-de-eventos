let div = document.querySelector('div');
console.log(div);

div.addEventListener('click', function() {
    alert("Hola! Soy el div.");
});

let btn = document.querySelector('button');

btn.addEventListener('click', function(e) {
    e.stopPropagation();
    alert("Hola!");
})
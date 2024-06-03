document.getElementById("btn").addEventListener('click', function(){
    let a = parseInt(document.querySelector("#numbers").innerHTML);
    let b = parseInt(document.querySelector("#number").innerHTML);
    let c = parseInt(document.querySelector("#text").value);


    let pointElement = document.getElementById("answer");
    let currentPoint = parseInt(pointElement.innerHTML);

    if(c === (a + b)) {
        document.querySelector("#answer").innerHTML = "Correct!";
        currentPoint++;
        document.querySelector(".b").style.backgroundColor = "green";
    } else {
        document.querySelector("#answer").innerHTML = "Wrong!";
        currentPoint--;
        document.querySelector(".b").style.backgroundColor = "red";
    }
    if (currentPoint < 0){
      currentPoint = document.querySelector("#answer").innerHTML = "Fatal Error";
    }
    pointElement.innerHTML = currentPoint;
});

function updateNumbers(){
  a = document.querySelector("#numbers").innerHTML = Math.floor(Math.random()*10);
  b = document.querySelector("#number").innerHTML = Math.floor(Math.random()*10);
}

window.onload = updateNumbers;
document.getElementById("btn").addEventListener('click', updateNumbers);
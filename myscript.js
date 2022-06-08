// let x = document.getElementById('mydiv-2');

// for(i=0;i<50;i++){
//     document.write(i.innerHTML=i);
// }

let x = document.getElementById('btn-1');

let displayDate = () => {
    document.getElementById('mydiv-2').innerHTML = Date();
    document.getElementById("mydiv-2").style.backgroundColor = "red";
}

x.addEventListener('click' ,displayDate);

let y = document.getElementById('okk');

let zzzz = ( ) => {
    document.getElementById('okk').style.cssText = 
    transform = scale(1.2);
    ; 
}

y.addEventListener('focus',zzzz);


//comment 

let submit = document.getElementById('post');

submit.addEventListener('click', function(){
    let newP = document.createElement('p')

    let comment = document.getElementById('message').value ;
    
    newP.innerHTML = comment;

    let MainContainer = document.getElementById('content');

    MainContainer.appendChild(newP);

    document.getElementById('message').value = " ";

})
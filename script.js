

let container = document.createElement('h1');

container.style.color = 'red';

container.style.textAlign = 'center';

document.body.append(container);


function countdown(value,sec) {
    
    setTimeout(() => {

        container.innerText= value;
    
    }, sec);

}



countdown(10,1000);

countdown(9, 2000);

countdown(8, 3000);

countdown(7, 4000);

countdown(6, 5000);

countdown(5, 6000);

countdown(4, 7000);

countdown(3, 8000);

countdown(2, 9000);

countdown(1, 10000);

countdown('Happy Inependence Day', 11000);


// const numbers = [1,2,,3,4,5,6,7,8,9,10,11,12,,13,14,15,16,17,18,19,20]

// const body = document.querySelector('body');

// numbers.map(items => {
//     const texts = document.createElement('p')
//     texts.innerHTML = items;
//     body.appendChild(texts)

// })


// numbers.forEach(items => {
//     const texts = document.createElement('p')
//     texts.innerHTML = 'items'
//     body.appendChild(texts)
// })

// const cars = ['BMW' ,'Ecinox' , 'Tesla' , 'Supra' ,'Spark' , jiguli]

// numbers.map(itmes =>{items>5 && console.log((items))})

// console.log("2-qator");

// cars.forEach(items)

let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];

const body = document.querySelector('body');

    data.map(items => {
    const text = document.createElement('p')
    text.innerHTML = items;
    body.appendChild(text);

    text.style.textAlign = 'center'
    text.style.margin = '40px'
    text.style.color = 'white'
    text.style.fontSize = '15px'
    text.style.fontFamily = 'Caesar Dressing'
    text.style.padding = '5px'
    text.style.borderRadius = '10px'
    if(items > 50){
        text.style.background = 'green'
    }else(
    text.style.background = 'red'

    )
})
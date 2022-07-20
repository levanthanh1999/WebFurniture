//  Slider
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

const removeActiveClasses = () =>
  panels.forEach((panel) => panel.classList.remove("active"));

// Filter

const submit = document.getElementById("btn-submit");



//Input value
const myInput = document.getElementById("myInput");

myInput.addEventListener("keyup", onClick)


function onClick() {
    let valueItem = myInput.value;
    Array.from(panels).forEach(function(ele) {
    //    let nameItem = ele.querySelector('.info').firstElementChild.textContent;
       let priceItem = ele.querySelector('.info').lastElementChild.textContent.toLocaleUpperCase();
       let nameItem = ele.querySelector('.info').firstElementChild.textContent;
       if(priceItem.indexOf(valueItem) !== -1 || nameItem.indexOf(valueItem) !== -1 ) {
            ele.style.display = 'block';
       } else {
            ele.style.display = 'none';
       }
    })
}


//   const valueProduct = document.querySelectorAll(".price");
//   for(let i = 0; i < valueProduct.length; i++) {
//     if(valueSubmit == valueProduct[i].innerHTML) {
//         console.log(valueProduct[i]);
//         break;
//     } else {
//         console.log('No data')
//     }
//   }
//   const valuePrice = valueProduct.forEach((price) =>
//        console.log(price.innerHTML) 
//   );

//  console.log('valuePrice', valuePrice)

//   if (valueSubmit >= 0 && valueSubmit <= 500) {
//     console.log(valuePrice);
//   } else {
//     console.log("");
//   }




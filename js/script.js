 
    var allProducts = document.querySelectorAll(".products p")
    var div1 = document.querySelector("#div1")
    var btn1 = document.querySelector("#showPrice")
    var div2 = document.querySelector("#div2")
    var totalPrice = 0

    
    allProducts.forEach(function (item) {
        item.onclick = function (){
            totalPrice +=  +(item.getAttribute("Price"))
            div1.innerHTML += item.textContent + " , "
            if (div1.innerHTML != ""){
                btn1.style.display = "block"
                btn1.style.width = "200px"
                btn1.style.height = "80px"
                btn1.style.fontSize = "30px"
                btn1.style.margin ="auto"

               }
        }
    })


  btn1.onclick = function (){ div2.innerHTML=totalPrice}





 


 
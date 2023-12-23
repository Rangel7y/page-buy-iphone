
/* Get Buttons in Tablist Picker */
const btnTablist = document.querySelectorAll("#img-picker-order button.btn-img-picker");

/* Get Image Product */
const imgProduct = document.getElementById('img-product');

btnTablist.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        btnTablist.forEach((btn) => btn.classList.remove("selected"));
        btn.classList.add("selected");

        switch(e.target.getAttribute("id")){
            case 'index-0':
                imgProduct.src = "./assets/all_models1.png";
                break;
            case 'index-1':
                imgProduct.src = "./assets/model_black/2_894424-2352x2911.webp";
                break;
            case 'index-2':
                imgProduct.src = "./assets/model_white/2_894433-2352x2911.webp";
                break; 
            case 'index-3':
                imgProduct.src = "./assets/model_blue/2_894448-2350x2909.webp";
                break;   
            case 'index-4':
                imgProduct.src = "./assets/model_gray/2_894439-2350x2908.webp";
                break;
            default:
                break;
        }
        
    });
});

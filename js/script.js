
/* Get Buttons in Tablist Picker */
const btnTablist = document.querySelectorAll("#img-picker-order button.btn-img-picker");

/* Get Image Product */
const imgProduct = document.getElementById('img-product');

/* Button Arrows (Previous and Next) */
const btnNextArrow = document.getElementById("next-arrow");
const btnPreviousArrow = document.getElementById("previous-arrow");

/*  */
const headerNav = document.getElementById("header-nav");

/*  */
const headerMenu = document.getElementById("header-menu");

/*  */
const headerLinks = document.getElementById("header-links");

/*  */
const btnShowMenu = document.getElementById('show-menu-links');
const btnHideMenu = document.getElementById('hide-menu-links');

/*  */
let currentIdImgModel = 0;

btnTablist.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        btnTablist.forEach((btn) => btn.classList.remove("selected"));
        btn.classList.add("selected");

        updateImgProduct(e.target.getAttribute("id"));
    });
});

function NextArrow(){
    currentIdImgModel++;
    CheckIdImgModel();
    updateImgProduct(`index-${currentIdImgModel}`);
}

function PreviousArrow(){
    currentIdImgModel--;
    CheckIdImgModel();
    updateImgProduct(`index-${currentIdImgModel}`);
}

function CheckIdImgModel(){

    if(currentIdImgModel == 5){
        currentIdImgModel = 0;
    }
    if(currentIdImgModel == -1){
        currentIdImgModel = 4;
    }
}

function updateImgProduct(selectedId){
    btnTablist.forEach((btn) => btn.classList.remove("selected"));
    const selectedBtn = document.getElementById(selectedId);
    if (selectedBtn) {
        selectedBtn.classList.add("selected");
    }

    imgProduct.classList.toggle("changing");

    switch(selectedId){
        case 'index-0':
            imgProduct.src = "./assets/all_models1.png";
            currentIdImgModel = 0;
            break;
        case 'index-1':
            imgProduct.src = "./assets/model_black/2_894424-2352x2911.webp";
            currentIdImgModel = 1;
            break;
        case 'index-2':
            imgProduct.src = "./assets/model_white/2_894433-2352x2911.webp";
            currentIdImgModel = 2;
            break; 
        case 'index-3':
            imgProduct.src = "./assets/model_blue/2_894448-2350x2909.webp";
            currentIdImgModel = 3;
            break;   
        case 'index-4':
            imgProduct.src = "./assets/model_gray/2_894439-2350x2908.webp";
            currentIdImgModel = 4;
            break;
        default:
            break;
    }

    setTimeout(() => {
        imgProduct.classList.toggle("changing");
    }, 1000);
}

btnShowMenu.addEventListener("click", () => {

    headerMenu.classList.add("hide-icon");
    headerLinks.classList.add("open-menu");

    if(headerLinks.classList.contains("open-menu")){
        headerNav.style.height = "fit-content";
    }

});

btnHideMenu.addEventListener("click", () => {
    if(headerLinks.classList.contains("open-menu")){
        
        headerMenu.classList.remove("hide-icon");

        headerLinks.classList.remove("open-menu");

        headerNav.style.height = "45px";
    }
});
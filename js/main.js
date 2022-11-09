
let mainColors = localStorage.getItem("color-option");
if (mainColors !== null)
    {
        document.documentElement.style.setProperty('--main-color', localStorage.getItem("color-option"));
        document.querySelectorAll(".colors-list li").forEach(element =>
            {
                element.classList.remove("active");
                    // Add Active Class On Element With Data-Color === Local Storage Item
                    if (element.dataset.color === mainColors)
                    {
                        // Add Active Class
                        element.classList.add("active");
                    }
            });
    }
// landingPage
let landingPage = document.querySelector(".landing-page");
//background images
let imgsArray = ["0.jpg", "1.jpg", "2.jpg"];

setInterval(() =>
    {
        let randomNumber = Math.floor(Math.random() * imgsArray.length);
        landingPage.style.backgroundImage = 'url("images/slider/' + imgsArray[randomNumber] + '")';
    }, 3000);

// setting mode 
document.querySelector(".the-gear i").onclick = function () {
    this.classList.toggle("fa-spin");
    document.querySelector(".option-box").classList.toggle("open");
}

document.querySelector(".the-gear .dark i").onclick = function ()
    {
    this.classList.toggle("fa-sun");
    if (document.querySelector(".the-gear .dark i").classList[2] != undefined)
    {
        document.documentElement.style.setProperty('--main-background', '#EEE');
        document.documentElement.style.setProperty('--main-txtbackground', '#FFFFFF');
        const logoServives =document.querySelectorAll(".our-services img");
        for (let i = 0; i < logoServives.length; i++) {
            logoServives[i].style.filter = ' invert(0)';
        }
        const logoTime =document.querySelectorAll(".time_line_section img");
        for (let i = 0; i < logoTime.length; i++) {
            logoTime[i].style.filter = ' invert(1)';
        }
        document.documentElement.style.setProperty('--main-p', '#111111');
    }
    else
    {
        document.documentElement.style.setProperty('--main-background', '#171717');
        document.documentElement.style.setProperty('--main-txtbackground', '#111111');
        document.documentElement.style.setProperty('--main-p', 'rgb(200 200 200 / 93%)');
        const logoServives =document.querySelectorAll(".our-services img");
        for (let i = 0; i < logoServives.length; i++) {
            logoServives[i].style.filter = ' invert(1)';
        }
        const logoTime =document.querySelectorAll(".time_line_section img");
        for (let i = 0; i < logoTime.length; i++) {
            logoTime[i].style.filter = ' invert(0)';
        }
        
        }
    }
//bullets control
const butons = document.querySelectorAll(".color-option button");
butons.forEach((button) => {
    button.addEventListener("click", function () {
        for (let i = 0; i < butons.length; i++)
        {
        butons[i].classList.remove("active");
        }
        this.classList.add("active");
        const result = this.dataset.value;
        if (result == "view")
        {
            document.querySelector(".nav-bullets").classList.remove("hide");
        }
        else
        {
            document.querySelector(".nav-bullets").classList.add("hide");
        }
})
})
//switch colors

const colorsList = document.querySelectorAll(".colors-list li");
colorsList.forEach((li) => {
    li.addEventListener("click", (colorElement) => {
        //swet color on root
        document.documentElement.style.setProperty('--main-color', colorElement.target.dataset.color);
        localStorage.setItem("color-option", colorElement.target.dataset.color);
        // remove active class from list
        colorElement.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        })
        colorElement.target.classList.add("active");
    })
});
//porifolio gallery change

const galleryList = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".item");

for (var i = 0; i < galleryList.length; i++) {
    galleryList[i].addEventListener("click", function ()
    {
        for (let j = 0; j < galleryList.length; j++)
        {
            //to remove active class from all li
            galleryList[j].classList.remove("active");
        }
        
        //add active class to selected element
        this.classList.add("active");
        //pick data filter 
        let pickedFilter = this.getAttribute("data-filter");
        for (let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.add("hide");
            if (itemBox[k].getAttribute("data-item")==pickedFilter || pickedFilter == "All")
            {
                itemBox[k].classList.remove("hide");
            }
        }
    })

}
// Select All Bullets
const allBullets = document.querySelectorAll(".bullet i");
const allLinks = document.querySelectorAll(".navbar-nav .nav-link");
function scrollToSection(elements) {
    elements.forEach(ele => {
    ele.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: 'smooth'
        });
    });
    });
}

scrollToSection(allBullets);
scrollToSection(allLinks);






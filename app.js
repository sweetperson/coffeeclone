var sliderimages = [
    { src: "./images/coffee1.jpg", title: "We really like what we do.", text: "Coffee Beans with a \n Perfect Aroma", alt: "Coffee" },
    { src: "./images/coffee2.jpg", title: "Enjoy the finest coffee drinks.", text: "Enjoy Our Exclusive \n Coffee and Cocktails", alt: "Coffee" },
    { src: "./images/coffee3.jpg", title: "Making Our coffee with lover.", text: "Alluring and Fragrant \n Coffee Aroma", alt: "Coffee" }
];
var menuitem = [
    { img: './images/coffeeicon.jpg', title: "Americano Roasted Coffee", text: "It is a long established fact that a reader will be distracted by the readable.", amt: 18.99 },
    { img: './images/coffeeicon.jpg', title: "Americano Roasted Coffee", text: "It is a long established fact that a reader will be distracted by the readable.", amt: 18.99 },
    { img: './images/coffeeicon.jpg', title: "Americano Roasted Coffee", text: "It is a long established fact that a reader will be distracted by the readable.", amt: 18.99 },
    { img: './images/coffeeicon.jpg', title: "Americano Roasted Coffee", text: "It is a long established fact that a reader will be distracted by the readable.", amt: 18.99 },
]
var reviewsliderimges = [
    { src: "./images/coffeelogo1.avif", text: "Your coffee hits the spot every time. Thank you for the experience of pure, delicious coffee masterfully roasted! I will never purchase any other and I will spread the word!", name: "Marnie Rotter", posotion: "App Developer" },
    { src: "./images/coffeeicon.jpg", text: "Your coffee hits the spot every time. Thank you for the experience of pure, delicious coffee masterfully roasted! I will never purchase any other and I will spread the word!", name: "Marnie Rotter", posotion: "App Developer" }
]
var index = 0;
var elementscr = document.getElementById('sliderimg');
var slidertitle = document.getElementById('slidertitle');
var slidertext = document.getElementById('slidertext');
const sliderbtn = document.querySelectorAll(".carousel-indicators button");
setInterval(() => {
    elementscr.src = sliderimages[index].src
    elementscr.alt = sliderimages[index].alt
    slidertitle.innerHTML = sliderimages[index].title
    slidertext.innerHTML = sliderimages[index].text
    index++
    if (index == sliderimages.length) { index = 0; }
}, 2000);
function setsliderclick(clickindex) {
    index = clickindex
    var sldbtnclk = document.getElementById(clickindex);
    elementscr.src = sliderimages[clickindex].src
    elementscr.alt = sliderimages[clickindex].alt
    slidertitle.innerHTML = sliderimages[clickindex].title
    slidertext.innerHTML = sliderimages[clickindex].text
    // sldbtnclk.className = 'active';
    sliderbtn[clickindex-1].classList.remove('active')
    sliderbtn[clickindex].classList = 'active'
    // sliderbtn.forEach(e =>{
    //     debugger
    //     var a = e
    // });
}
var reviewsliderimgsrc = document.getElementById('reviewsliderimg');
var reviewslidertext = document.getElementById('reviewslidertext');
var reviewslidername = document.getElementById('reviewslidername');
var reviewsliderjob = document.getElementById('reviewsliderjob');
var reviewindex = 0;
function setrevoewsliderclick(clickindex) {
    if (reviewindex == reviewsliderimges.length) {
        reviewindex = 0;
    }
    // var sldbtnclk = document.getElementById(clickindex);
    reviewsliderimgsrc.src = reviewsliderimges[reviewindex].src
    reviewsliderimgsrc.alt = reviewsliderimges[reviewindex].alt
    reviewslidertext.innerHTML = reviewsliderimges[reviewindex].text
    reviewslidername.innerHTML = reviewsliderimges[reviewindex].name
    reviewsliderjob.innerHTML = reviewsliderimges[reviewindex].posotion
    // sldbtnclk.className = 'active'
    reviewindex += clickindex
}
setrevoewsliderclick(1);
function showmenu() {

}
// function getmenuitemfun(){
//     //<img id="tblimg" src="./images/coffeeicon.jpg" alt="">
//     var elementmenuimg = document.getElementById('tblimg');
//     for(var ind = 0; ind < menuitem.length; ind ++){
//         var el = menuitem[ind].src;
//         elementmenuimg.appendChild('<img id="tblimg" src='`${el}`' alt="">')
//     }
// }
function getmenuitemfun() {
    // Get the container element where images will be appended
    var container = document.getElementById('tblul')

    // Clear any existing content in the container
    container.innerHTML = '';

    // Loop through each menu item and append an image
    for (var ind = 0; ind < menuitem.length; ind++) {
        var imgSrc = menuitem[ind].img;
        var a = "";
        a.append('<img id="tblimg" src="./images/coffeeicon.jpg" alt="">')
        container.append(a)
        // //Create a new li 
        // var li = document.createElement('li');
        // // Create a new image element
        // var img = document.createElement('img');
        // img.src = imgSrc;
        // img.alt = 'Menu Item';
        // img.id ='tblimg'

        // Append the image to the container
        // container.appendChild(img);
    }
}
// getmenuitemfun()
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .container-fluid .navbar-nav .nav-item a");
// const navLi = document.querySelectorAll(".navbar .nav-container a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 4) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
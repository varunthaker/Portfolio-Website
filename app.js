
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents")


function opentab(tabname) {

    for(tablink of tablinks) {
        tablink.classList.remove("active-link")
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-content")
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-content");
}

var sidemenu = document.getElementById("sidemenu")


function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
    
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwRRzhNqcicJlW3w_C9HWOshh2iopNbSKk705Kwg2Hn21Kp0cTA2YBGnzRE6SG5VR3y/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        alert("Message sent Successfully")
        form.reset()

    })
    .catch(error => console.error('Error!', error.message))
})
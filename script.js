const hamburgerIcon = document.getElementById("ham-burger")
const navBarLinks = document.querySelector(".nav-bar-links")
const line_0 = document.querySelector(".box").children[0]
const line_1 = document.querySelector(".box").children[1]
const line_2 = document.querySelector(".box").children[2]


// toggling the active class
hamburgerIcon.addEventListener("click", (event) => {
    line_1.classList.toggle("active")
    line_0.classList.toggle("active")
    line_2.classList.toggle("active")
    if (line_2.classList.contains("active")) {
        navBarLinks.style.left = "0";
    }
    else {
        navBarLinks.style.left = "-100%";
    }
    event.stopPropagation()
})


// if onclick on the document lines still conatins active
document.addEventListener("click", () => {
    if (line_1.classList.contains("active") &&
        line_0.classList.contains("active") &&
        line_2.classList.contains("active")) {
        line_1.classList.remove("active")
        line_0.classList.remove("active")
        line_2.classList.remove("active")
        navBarLinks.style.left = "-100%";
    }

})

const projectCards = document.querySelectorAll(".project-card");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".prev");

let currentIndex = 0;

projectCards.forEach((card, index) => {
        if(index >= currentIndex && index < currentIndex + 2 ) {
            card.style.display = "block";
            card.classList.add("fade-in")
        } else {
            card.style.display = "none";
            card.classList.remove("fade-in")
        }
})

nextButton.addEventListener("click", (event) => {
    if(currentIndex + 2 >= projectCards.length) {
        return;
    }

    currentIndex +=2;

    projectCards.forEach((card, index) => {
        if(index >= currentIndex && index < currentIndex + 2 ) {
            card.style.display = "block";
            card.classList.add("fade-in")
        } else {
            card.style.display = "none";
            card.classList.remove("fade-in")
        }
    })

})

previousButton.addEventListener("click", (event) => {
    if(currentIndex === 0) {
        return;
    }

    currentIndex -=2;

    projectCards.forEach((card, index) => {
        if(index >= currentIndex && index < currentIndex + 2 ) {
            card.style.display = "block";
            card.classList.add("fade-in")
        } else {
            card.style.display = "none";
            card.classList.remove("fade-in")
        }
    })
})
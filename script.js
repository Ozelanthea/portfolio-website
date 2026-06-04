const projectCards = document.querySelectorAll(".project-card");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".prev");

let currentIndex = 0;
function getCardsToShow() {
    return window.innerWidth <= 768 ? 1 : 2;
}

projectCards.forEach((card, index) => {
        if(index >= currentIndex && index < currentIndex + getCardsToShow() ) {
            card.style.display = "block";
            card.classList.add("fade-in")
        } else {
            card.style.display = "none";
            card.classList.remove("fade-in")
        }
})

nextButton.addEventListener("click", (event) => {
    const cardsToShow = getCardsToShow();
    if(currentIndex + cardsToShow >= projectCards.length) {
        return;
    }

    currentIndex += cardsToShow;

    projectCards.forEach((card, index) => {
        if(index >= currentIndex && index < currentIndex + cardsToShow ) {
            card.style.display = "block";
            card.classList.add("fade-in")
        } else {
            card.style.display = "none";
            card.classList.remove("fade-in")
        }
    })

})

previousButton.addEventListener("click", (event) => {
    const cardsToShow = getCardsToShow();
    if(currentIndex === 0) {
        return;
    }

    currentIndex -= cardsToShow;

    projectCards.forEach((card, index) => {
        if(index >= currentIndex && index < currentIndex + cardsToShow ) {
            card.style.display = "block";
            card.classList.add("fade-in")
        } else {
            card.style.display = "none";
            card.classList.remove("fade-in")
        }
    })
})
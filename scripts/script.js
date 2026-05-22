/* PARALLAX */
const column1 = document.querySelector(".column-1");
const column2 = document.querySelector(".column-2");
const column3 = document.querySelector(".column-3");

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    column1.style.transform = `translateY(${scrollY * 0.2}px)`;

    column2.style.transform = `translateY(${scrollY * 0.3}px)`;

    column3.style.transform = `translateY(${scrollY * 0.25}px)`;

});

/* CURSOR */
const cursor = document.querySelector(".custom-cursor");
const noiseLayer = document.querySelector(".noise-layer");

window.addEventListener("mousemove", (e) => {

    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

    noiseLayer.style.setProperty("--x", `${x}px`);
    noiseLayer.style.setProperty("--y", `${y}px`);

});

/* SCROLL INDICATOR */
const scrollIndicator = document.querySelector(".scroll-indicator");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        scrollIndicator.classList.add("hide");

    } else {

        scrollIndicator.classList.remove("hide");

    }

});

/* HOVER EFFECTS hero archive 
const letters = document.querySelectorAll(".hero-archive span");

letters.forEach((letter) => {

    letter.addEventListener("mousemove", (e) => {

        const rect = letter.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const moveX = (x - rect.width / 2) * 0.06;
const moveY = (y - rect.height / 2) * 0.04;

        letter.style.transform = `
    translate(${moveX}px, ${moveY}px)
`;

    });

    letter.addEventListener("mouseleave", () => {

        letter.style.transform = `
            translate(0px, 0px)
            skew(0deg)
            rotate(0deg)
        `;

        letter.style.filter = `
            blur(0px)
        `;

    });

});
*/
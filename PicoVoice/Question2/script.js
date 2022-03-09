const stars = document.querySelectorAll(".stars a");
const wrapper = document.querySelector(".stars")

stars.forEach((star,selected) => {
    star.addEventListener('click', () => {
        wrapper.classList.add("disabled");
        stars.forEach((otherStar,otherIndex) => {
            if (otherIndex <= selected){
                otherStar.classList.add("active");
            }
        });
        console.log('star ' + (selected + 1) + ' was clicked');
        // Backend implementation here
    });
});


const stars2 = document.querySelectorAll(".stars2 a");
const wrapper2 = document.querySelector(".stars2")

stars2.forEach((star2,selected2) => {
    star2.addEventListener('click', () => {
        wrapper2.classList.add("disabled");
        stars2.forEach((otherStar2,otherIndex2) => {
            if (otherIndex2 <= selected2){
                otherStar2.classList.add("active");
            }
        });
        console.log('star ' + (selected2 + 1) + ' was clicked');
        // Backend implementation here
    });
});

const stars3 = document.querySelectorAll(".stars3 a");
const wrapper3 = document.querySelector(".stars3")

stars3.forEach((star3,selected3) => {
    star3.addEventListener('click', () => {
        wrapper3.classList.add("disabled");
        stars3.forEach((otherStar3,otherIndex3) => {
            if (otherIndex3 <= selected3){
                otherStar3.classList.add("active");
            }
        });
        console.log('star ' + (selected3 + 1) + ' was clicked');
        // Backend implementation here
    });
});
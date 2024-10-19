const PlusIcon = document.querySelectorAll(".plus-icon");
const MinusIcon = document.querySelectorAll(".minus-icon")
const description = document.querySelectorAll(".description")

MinusIcon.forEach((icon) => (icon.style.display = "none"));
description.forEach((description) => (description.style.display = "none"));


PlusIcon.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        description[index].style.display = "block";
        MinusIcon[index].style.display="block";
        icon.style.display = "none";
    });
});

MinusIcon.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        description[index].style.display = "none";
        PlusIcon[index].style.display="block";
        icon.style.display = "none";
    });
});



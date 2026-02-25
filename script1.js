function rate(rating) {
    let stars = document.getElementsByClassName("star");

    for (let i = 0; i < stars.length; i++) {
        if (i < rating) {
            stars[i].classList.add("active");
        } else {
            stars[i].classList.remove("active");
        }
    }
}
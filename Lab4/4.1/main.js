document.querySelectorAll(".color-button").forEach((button) => {
    button.addEventListener("click", function(){
        document.body.style.backgroundColor = button.getAttribute("data-color")
    })
})
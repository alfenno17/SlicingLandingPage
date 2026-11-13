document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const loader = document.getElementById("loading-screen");
        if (loader) {
            loader.classList.add("fade-out");
            
            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }
    }, 12000);
});
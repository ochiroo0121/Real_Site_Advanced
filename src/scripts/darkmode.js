// Dark Mode
const DarkMode = document.querySelector(".dark-mode");

function dark() {
    DarkMode.addEventListener("click", function () {
        document.querySelector(".dark-con").classList.toggle("darkActive");
        document.querySelector(".dark-mode").classList.toggle("ligthActive");
        document.querySelector(".body").classList.toggle("darkLigth");
        document.querySelector(".catigory1").classList.toggle("darkH3");
        document.querySelector(".catigory2").classList.toggle("darkH3");
        document.querySelector(".catigory3").classList.toggle("darkH3");
        document.querySelector(".darkh2").classList.toggle("darkh2Active");
        document.querySelector(".btn").classList.toggle("btnActive");
        document.querySelector(".backTop").classList.toggle("backTopActive");

    });
}
dark();
const botaoTrailer = document.querySelector(".botao-trailer")
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal")
const video = document.getElementById("video")
const linkDoVideo = video.src;

function alternarmoedal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarmoedal()
    video.setAttribute("src", linkDoVideo)
});

botaoFecharModal.addEventListener("click", () => {
    alternarmoedal()
    video.setAttribute("src", "")
})
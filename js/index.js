const buttonMenu = document.getElementsByClassName(".toggler")
const modal = document.getElementsByClassName(".container")
const close = document.querySelector(".sair")


buttonMenu.addEventListener("click", (toggler) => {
    modal.classList.remove("hide")
})

close.addEventListener("click", () => {
    modal.classList.add("hide")
})
let datainput = document.querySelector("#datainput")
let addbutton = document.querySelector("#add")
let content = document.querySelector(".content")


addbutton.addEventListener("click", (e) => {
    e.preventDefault()

    if (datainput.value !== "") {
        content.innerHTML +=
            `<div class="bg-pink-800 mb-4 w-full flex items-center justify-between rounded-lg px-12 py-2">
    <p class="text-[18px] text-white">${datainput.value}</p>
    <button class="px-6 py-2 bg-rose-900 text-white rounded-lg" onclick="removeBlock(event)" id="delate">delate</button>
</div> `
        datainput.value = ""
    }
    else {
        datainput.value = ""
    }
})


function removeBlock(e) {
    e.target.parentNode.remove()
}










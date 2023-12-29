const buttonMain = document.querySelector("#buttonMain")
const ul = document.querySelector("#list")
const input = document.querySelector("#item")


buttonMain.addEventListener("click", () => {
    const li = document.createElement("li")
    const span = document.createElement("span")
    const buttonItem = document.createElement("button")


    li.classList.add("li")
    span.classList.add("span")
    buttonItem.classList.add("button")

    li.textContent = input.value

    buttonItem.textContent = "Delete"

    ul.appendChild(li);
    ul.appendChild(span);
    ul.appendChild(buttonItem);

    input.value = "";
    input.focus()

    buttonItem.addEventListener("click", () => {
        ul.removeChild(li);
        ul.removeChild(span);
        ul.removeChild(buttonItem); 
    })
});




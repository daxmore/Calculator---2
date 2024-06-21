let str = "";
let btn = document.querySelectorAll("#button");
let input = document.querySelector("#input")

Array.from(btn).forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerText == "=") {
            str = eval(str);
            input.value = str;
        } else if (e.target.innerText == "AC") {
            str = ""
            input.value = str
        }
        else {
            str += e.target.innerText
            input.value = str;
        }
    })
})
const container = document.getElementById("container")
for(let i = 0; i < 256; i++){
    const square = document.createElement("div")
    square.classList.add("square")
    square.addEventListener("mouseenter", function(){
        square.style.border = "2px solid red"
        square.style.backgroundColor = "red"
    })
    square.addEventListener("mouseleave", function(){
        square.style.border = "1px solid #ccc"
        square.style.backgroundColor = "white"
    })
    container.appendChild(square)
    console.log(container)
}

const btn = document.getElementById("btn")
function createGrid(size){
    container.innerHTML = " "
    const squareSize = 960/size
    for(let i = 0; i < size * size; i ++){
        const square = document.createElement("div")
        square.classList.add("square")
        square.style.width = `${squareSize} px`
        square.style.heigth = `${squareSize} px`
        container.appendChild(square)
    }
}
createGrid(16)
btn.addEventListener("click", function(){
    let userInput = prompt("Entrez le nombre de carrés par coté (max 100)")
    userInput = Number(userInput)
    if(userInput > 0 && userInput <= 100){
        createGrid(userInput)
    }
    else{
        alert("Veuillez entrer un nombre entre 1 et 100")
    }
})
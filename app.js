let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

 Add = () => {
    if(inputs.value == ""){
        alert("Please enter a Task")
    }
    else{
        let newElem = document.createElement("ul");
        newElem.innerHTML = `${inputs.value}<i class="fa-solid fa-trash"></i>`;
        text.appendChild(newElem);
        inputs.value = "";
        
        newElem.querySelector("i").addEventListener("click", remove);
        function remove(){
            newElem.remove()
        }
    }
}
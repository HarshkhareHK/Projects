const inputBox = document.getElementById("input-Box");
const  listContainer = document.getElementById("list-container")
function addTask(){
    if(inputBox.value ==''){
        alert("Must write something");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appearChild(li);
    }
}
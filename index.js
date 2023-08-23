function validateForm(){
    let x = document.forms["myForm"]["Name"].value;
    if(x == ""){
        alert("Name must be filled out.");
        return false;
    }
}

function openForm(){
    document.getElementById("form-container").style.display = "block";
}

function closeForm(){
    document.getElementById("form-container").style.display = "none";
}
field_name = document.getElementById("name");
field_age = document.getElementById("age");
field_dob = document.getElementById("dob");
form = document.getElementById("fin_form");

form.addEventListener("submit", e=>{
    e.preventDefault();

    validate_fn();
})

function validate_fn(){
    let name_obj = field_name.value.trim();
    let age_obj = field_age.value;
    let dob_obj = new Date(field_dob.value);
    var validate = 0;

    cur_dob = new Date();

    const error_field_name = field_name.parentElement.querySelector(".error");
    const error_field_age = field_age.parentElement.querySelector(".error");
    const error_field_dob = field_dob.parentElement.querySelector(".error");

    if (name_obj.length<4){
        error_field_name.innerText = "name cannot be 4 letters or less"; 
    } else {
        error_field_name.innerText = "";
        validate+=1;
    }

    if (age_obj<18){
        error_field_age.innerText = "age cannot be < 18"; 
    } else {
        error_field_age.innerText = "";
        validate+=1;
    }

    if (dob_obj.getFullYear()>2004 || dob_obj.getFullYear()<1999){
        error_field_dob.innerText = "you must be born between 1999 and 2004";
    } else {
        error_field_dob.innerText = "";
        validate+=1;
    }    

    if (validate==3){
        form.reset();
        alert('the data has been successfully stored');
    }

    if (dob_obj<cur_dob){
        console.log("yes");
    }
}








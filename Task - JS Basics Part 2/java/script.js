let nameInput = document.querySelector("#nameInput");
let ageInput = document.querySelector("#ageInput");
let jobInput = document.querySelector("#jobInput");
let Btn = document.querySelector("#Btn");

Btn.addEventListener("click", function () {
    let name = nameInput.value;
    let age = ageInput.value;
    let job = jobInput.value;

    if (name === "" || age === "" || job === "") {
        alert("Please fill all fields");
    } else {
        console.log("Name: " + name);
        console.log("Age: " + age);
        console.log("Job: " + job);

        if (age < 18) {
            alert("You are under age");
        } else {
            alert("Registration Completed");
        }
    }
});
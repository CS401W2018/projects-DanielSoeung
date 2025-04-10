document.getElementById("myForm").addEventListener("submit", function(event ){
    event.preventDefault();
    const first = document.getElementById("firstname").value;
    const second = document.getElementById("lastname").value;
    const age = document.getElementById("age").value;
    const checkbox = document.getElementById("checked").value;


    if (!first || !second) {
        alert("Please provide your name.")
        return;
    }

    if (!age || age < 18) {
        alert("You must be 18 to submit")
        return;
    }

    if (!checkbox) {
        alert("Please check the box")
        return;
    }

    const data = {
        firstname: first,
        lastname: second,
        age : age
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader ("Cotent-Type", "application/json;charset=UTF-8")
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            alert("Form submitted Successfully");
        } else if (xhr.readyState === 4) {
            alert("Error submitting form");
        }
    };

    xhr.send(JSON.stringify(data));
    console.log(data);

});


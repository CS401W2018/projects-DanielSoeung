document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const first = document.getElementById("firstname").value;
    const last = document.getElementById("lastname").value;
    const age = document.getElementById("age").value;
    const password = document.getElementById("password").value;

    if (!first || !last) {
        alert("Please provide your name.")
        return;
    }

    if (!age || age < 18) {
        alert("You need to be 18 to submit.")
        return;
    }

    if (!password) {
        alert("Please enter a password.")
        return;
    }


    const data = {
        firstname: first,
        lastname: last,
        age: age,
        password: password
    }


    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = "";
            return;
        
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };
    xhr.send(JSON.stringify(data));
    console.log(data);
});


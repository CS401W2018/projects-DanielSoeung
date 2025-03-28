document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();
    alert('Form Submitted');

    

    const formData = {
        firstname: firstname,
        secondname: secondname,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        countryregion: document.getElementById('countryregion').value,


    }


    const xhr = new XMLHttpRequest();
    xhr.open("GET", 'subtmit.json', true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert('Form submitted sucessfully.') {
                alert('Error submitting form.');
            }
        }
    };
    xhr.send(JSON.stringify(formData));
    alert('Success: ${}')

    if (!firstname) {
        alert("Yoy need to enter your name");
        return;
    }
});
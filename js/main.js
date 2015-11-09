function showOption() {
    name = document.getElementById('name').value;
    option = document.getElementById('option').value;

    if (!name || !option) {
        alert("fill all fields")
        return false;
    }

    if(option == "happy") {
        smile = ": )";
    } else if(option == "sad") {
        smile = ": /";
    } else {
        smile = "";
    }

    optionString = name + " is " + option + smile;

    holder = document.getElementById('holder');

    holder.innerHTML = optionString;
}

function clearOption() {
    document.getElementById("skriptForm").reset();

    holder = document.getElementById('holder');
    holder.innerHTML = "";
}

function displayFatherInfo() {
    var currentStatusOfCheckbox = document.getElementById("father").style.display

    if (currentStatusOfCheckbox === "none") {
        document.getElementById("father").style.display = "block";
    }
    else {
        document.getElementById("father").style.display = "none";
    }

}
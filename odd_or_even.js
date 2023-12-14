function odd_even() {
    var num;
    num = Number(document.getElementById("no_input").value);
    if (num % 2 == 0) {
        document.getElementById("result").innerHTML = num + "  is Even Number";
    }
    else {
        alert("Odd Number");
    }
}
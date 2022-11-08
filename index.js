function convert() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result;
    if (from === "VND" && to === "USD") {
        result = parseInt(amount) / 23000
        document.getElementById("result").innerHTML = "Result: " + result + "$"
    } else if (from === "USD" && to === "VND") {
        result = parseInt(amount) * 23000
        document.getElementById("result").innerHTML = "Result: " + result + "VND"
    } else if (from === "USD" && to === "USD") {
        result = amount
        document.getElementById("result").innerHTML = "Result: " + result + "$"
    } else {
        result = amount
        document.getElementById("result").innerHTML = "Result: " + result + "VND"
    }
}
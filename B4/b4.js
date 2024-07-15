function isPrime() {
    var n = parseInt(document.getElementById("number").value);

    if (isNaN(n) || n <= 1) {
        document.getElementById("result").innerText = `${n} không phải là số nguyên tố.`;
        return;
    }

    var count = 0;
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            count++;
        }
    }

    if (count > 0) {
        document.getElementById("result").innerText = `${n} không phải là số nguyên tố.`;
    } else {
        document.getElementById("result").innerText = `${n} là số nguyên tố.`;
    }
}
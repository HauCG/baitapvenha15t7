function tinhtich() {

    var a = parseFloat(document.getElementById('n1').value);
    var b = parseFloat(document.getElementById('n2').value);
    var kq = a * b;

    document.getElementById('result').textContent = kq;
}
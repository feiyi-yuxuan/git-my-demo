const p = document.querySelector('#text');
document.getElementById('input').onchange =function () {
    var text = this.value;
    p.innerText = text;
}
const p = document.querySelector('#text');

document.getElementById('input').onchange = () => {
    var text = this.value;
    p.innerText = text;
}
const FORM = document.getElementById('form');
const OUTPUT = document.getElementById('output');

FORM.addEventListener('submit', function(e) {
    e.preventDefault();
    const type = e.target.type.value
    const reps = parseFloat(e.target.type.value)
    const time = parseFloat(e.target.type.value)
    FORM.reset()
})

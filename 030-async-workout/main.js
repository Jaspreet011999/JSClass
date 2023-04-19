const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const type = e.target.type.value;
  const reps = parseFloat(e.target.reps.value);
  const time = parseFloat(e.target.time.value);
  exerciseRoutine(type, reps, time, updateDOM);
  FORM.reset();
});
function exerciseRoutine(type, reps, time, fn) {
  // Synchronously update the DOM with the exercise type and number of reps
  fn(`The exercise is ${type} and the target reps is ${reps}`);
  //Asynchronous
  setTimeout(() => {
    // Once the exercise routine is complete, update the DOM asynchronously
    fn(`The ${type} exercise is complete`, "div");
  }, time * 1000); // Convert exercise time to milliseconds
}

function updateDOM(message, element) {
  const newElement = document.createElement(element);
  newElement.textContent = message;
  OUTPUT.appendChild(newElement);
}

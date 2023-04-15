const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const type = e.target.type.value;
  const reps = parseFloat(e.target.type.value);
  const time = parseFloat(e.target.type.value);
  FORM.reset();

  exerciseRoutine(type, reps, time, updateType, updateReps, updateComplete);
});
function exerciseRoutine(
  type,
  reps,
  time,
  typeCallback,
  repsCallback,
  completeCallback
) {
  setTimeout(() => {
    // Synchronously update the DOM with the exercise type and number of reps
    typeCallback(type);
    repsCallback(reps);

    setTimeout(() => {
      // Once the exercise routine is complete, update the DOM asynchronously
      completeCallback();
    }, time * 60000); // Convert exercise time to milliseconds
  }, 2000); // Let's say this is processed in 2 seconds of processing time
}

function updateType(type) {
  const typeElement = document.getElementById("output");
  typeElement.textContent = type;
}

function updateReps(reps) {
  const repsElement = document.getElementById("output");
  repsElement.textContent = reps;
}

function updateComplete() {
  const statusElement = document.getElementById("output");
  statusElement.textContent = "Exercise complete!";
}

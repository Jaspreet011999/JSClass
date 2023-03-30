import { saveTripData } from "./storage.js";
import { calculateAverages } from "./calculations.js";

const FORM = document.getElementById("form-input");
const TABLE_TO_SHOW = document.getElementById("table_to_show");

function showEditDeleteButtons(index, MY_TRIP_COST) {
  const buttons = document.createElement("td");
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  editButton.addEventListener("click", function (e) {
    console.log(index);
    document.getElementById("miles").value = MY_TRIP_COST[index].miles;
    document.getElementById("gallons").value = MY_TRIP_COST[index].gallons;
    document.getElementById("price").value = MY_TRIP_COST[index].price;
    MY_TRIP_COST.splice(index, 1);
    const disable_buttons = document.querySelectorAll(".table-button");
    disable_buttons.forEach(function (btn) {
      btn.setAttribute("disabled", true);
    });
  });

  deleteButton.addEventListener("click", function (e) {
    MY_TRIP_COST.splice(index, 1);
    saveTripData(MY_TRIP_COST);
    renderTable(MY_TRIP_COST);
  });
  editButton.classList.add("table-button");
  deleteButton.classList.add("table-button");

  buttons.appendChild(editButton);
  buttons.appendChild(deleteButton);

  return buttons;
}

function createTableRows(table, MY_TRIP_COST) {
  MY_TRIP_COST.forEach(function (obj, index) {
    const tr = document.createElement("tr");
    for (const key in obj) {
      let td = document.createElement("td");
      td.textContent = obj[key];
      console.log(td);
      tr.appendChild(td);
    }

    const buttons = showEditDeleteButtons(index, MY_TRIP_COST);
    tr.appendChild(buttons);
    table.appendChild(tr);
  });
}

function renderTable(MY_TRIP_COST) {
  TABLE_TO_SHOW.innerHTML = "";
  if (MY_TRIP_COST.length !== 0) {
    const table = document.createElement("table");
    const headings = [
      "Miles Driven",
      "Gallons Used",
      "Price Paid",
      "Trip MPG",
      "Trip Cost",
      "Edit/Delete",
    ];
    const tr = document.createElement("tr");
    headings.forEach(function (heading) {
      let th = document.createElement("th");
      th.textContent = heading;
      tr.appendChild(th);
    });
    table.appendChild(tr);
    TABLE_TO_SHOW.appendChild(table);

    createTableRows(table, MY_TRIP_COST);
  }
  calculateAverages(MY_TRIP_COST);
}

export { renderTable };

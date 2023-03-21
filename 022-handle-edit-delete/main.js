const FORM = document.getElementById("form-input");
const ERR = document.getElementById("err");
const AVG_OUTPUT = document.getElementById("avg_output");
const TABLE_TO_SHOW = document.getElementById("table_to_show");

const MY_TRIP_COST = [];

//update the DOM

function updateDOM  (input)  {
  const divEl = document.querySelector("#output");
  const j = document.createElement("div");
  j.textContent = input;
  divEl.appendChild(j);
};

function trackMPGandCost  (miles, gallons, price)  {
  const MPG = Math.round(miles / gallons);
  const tripCost = Math.round(gallons * price);
  updateDOM(`Miles per gallon is ${MPG} and trip cost ${tripCost}`, `#output`);
  return {
    miles: miles,
    gallons: gallons,
    price: price,
    MPG: MPG,
    tripCost: tripCost,
  }
};


function calculateAvgValue () {
  let valueCost = 0;
  for (let i = 0; i < MY_TRIP_COST.length; i++) valueCost += MY_TRIP_COST[i];
  let avgValue = valueCost / MY_TRIP_COST.length;
  updateDOM(`Average ValueCost is ${avgValue}`);
};

function calculateAverages () {
  let totalMPG = 0;
  let totalTripCost = 0;
  MY_TRIP_COST.forEach((obj) => {
    totalMPG += obj.MPG;
    totalTripCost += obj.tripCost;
  });
  const averageMPG = Math.round(totalMPG / MY_TRIP_COST.length);
  const averageTripCost = Math.round(totalTripCost / MY_TRIP_COST.length);
  updateDOM(`Average MPG is ${averageMPG}`);
  updateDOM(`Average Trip Cost is ${averageTripCost}`);
};

function isFormValid  (miles, gallons, price) {
  const errMsg = [];
  if (miles === 0 || gallons === 0 || price === 0) {
    errMsg.push("check the input number but not 0!!");
  }
  if (price > 10000) {
    errMsg.push(
      "Make sure!!!??? I think this should be error... please check it again"
    );
    setTimeout(() => {
      ERR.textContent = "";
    }, 3000);
  }
  if (errMsg.length > 0) {
    ERR.textContent = errMsg;
    return false;
  } else {
    return true;
  }
};

function showEditDeleteButtons(index){

    const buttons = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit'
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete'

    editButton.addEventListener('click', function(e){
    console.log(e.target);
    })
    buttons.appendChild(editButton);
    buttons.appendChild(deleteButton)

    return buttons
    
}


function createTableRows(table){

  MY_TRIP_COST.forEach(function(obj, index){
    const tr = document.createElement('tr')
    for(key in obj){
      let td = document.createElement('td')
      td.textContent = obj[key]
      console.log(td);
      tr.appendChild(td)
    }
    
    const buttons = showEditDeleteButtons(index)
    tr.appendChild(buttons)
    table.appendChild(tr);
  })
}

function renderTable(){

  TABLE_TO_SHOW.innerHTML = ''
  const table = document.createElement('table');
  const headings = ['Miles Driven','Gallons Used','Price Paid','Trip MPG','Trip Cost','Edit/Delete' ]
  const tr = document.createElement('tr')
  headings.forEach(function(heading){
     let th = document.createElement('th')
     th.textContent = heading
     tr.appendChild(th)
  })
  console.log(MY_TRIP_COST);
  table.appendChild(tr);
  TABLE_TO_SHOW.appendChild(table);

  createTableRows(table);
  
}

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  //const errMsg = [];
  const miles = parseInt(e.target.miles.value);
  const gallons = parseInt(e.target.gallons.value);
  const price = parseInt(e.target.price.value);

  const isValid = isFormValid(miles, gallons, price);
  if (isValid) {
    ERR.textContent = "";
    AVG_OUTPUT.textContent = "";
    const updateDataObj = trackMPGandCost(miles, gallons, price);
    MY_TRIP_COST.push(updateDataObj);
    renderTable();
    calculateAverages();
  }
  FORM.reset();
});

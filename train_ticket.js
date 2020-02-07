/*
There are seven train compartments from d1 to d7 each containing  120 seats
write an algorithm to generate a random json object of all the coaches and seats and their status reserved ,not reserved 
special compartment reserved

Coaches:D1,D2,D3,D4,D5,D6,D7
Seat Number : 1 to 120
Status:Reverved , Not Reserved
Special compartments: Normal,Women,Children,Senior Citizen ,Physically Handicapped

*/
const reserve = ["Reserved", "Not Reserved"];
const special = [
  "Normal",
  "Women",
  "Children",
  "Senior Citizen",
  "Physically Handicapped"
];
const _SpecialComp = () => special[Math.floor(Math.random() * 5)];
let _Status = () => reserve[Math.floor(Math.random() * 2)];
function Train(coach, seatNumber, Status, SpecialComp) {
  this.coach = coach;
  this.number = seatNumber;
  this.Status = Status;
  this.SpecialComp = SpecialComp;
}

let coach = "D1";
const result = [];
function generateJSON() {
  for (j = 0; j < 7; j++) {
    coach = "D" + j;
    for (i = 0; i < 121; i++) {
      let _Train;
      _Train = new Train(coach, i, _Status(), _SpecialComp());
      result.push({
        coach: _Train.coach,
        SeatNumber: _Train.number,
        Status: _Train.Status,
        SpecialComp: _Train.SpecialComp
      });
    }
  }

  return result;
}

var fs = require("fs");
fs.writeFile(
  "./object.json",
  JSON.stringify(generateJSON(), null, 4),
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been created");
  }
);

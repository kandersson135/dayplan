$(document).ready(function(){
  function displayDate() {
    var days = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];
    var months = ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'];

    var today = new Date();
    var dayName = days[today.getDay()];
    var day = today.getDate();
    var monthName = months[today.getMonth()];

    var dateText = dayName + " " + day + " " + monthName;
    $("#todays-date").text(dateText);
  }

  function displayLunch() {
    var today = new Date();
    var day = today.getDay();
    var lunchText = "";

    switch(day) {
        case 1: // Monday
            lunchText = "Kreolsk gryta med ris";
            break;
        case 2: // Tuesday
            lunchText = "Havets texmex-lasagnette";
            break;
        case 3: // Wednesday
            lunchText = "";
            break;
        case 4: // Thursday
            lunchText = "Kycklingsoppa";
            break;
        case 5: // Friday
            lunchText = "Pizza";
            break;
        default:
            lunchText = "";
    }

    $("#lunch-text").text(lunchText);
  }

  function displayClosingPerson() {
    var today = new Date();
    var day = today.getDay();
    var closingPerson = "";

    // Array of people responsible for closing the school each weekday
    var weekdayClosers = ["Kim", "Ulrika", "Heidi", "Stina A"];

    // Array of people responsible for closing the school on specific Fridays
    var fridayClosers = ["Ulrika", "Heidi", "Stina A", "Kim"];

    if (day >= 1 && day <= 4) { // Monday to Thursday
        closingPerson = weekdayClosers[day - 1]; // Adjusting array index
    } else if (day === 5) { // Friday
        // We have 8 different Fridays, so we can rotate the array
        closingPerson = fridayClosers[(today.getDate() % 4) - 2]; // Adjusting array index
    } else {
        closingPerson = "";
    }

    $("#closing-text").text(closingPerson);
  }

  function displayAbsence() {
    $("#absence-text").text("Kim");
  }

  // Call the functions when the page loads
  displayDate();
  displayLunch();
  displayClosingPerson();
  displayAbsence();
});

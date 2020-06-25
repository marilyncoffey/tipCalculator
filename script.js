//script.js

//create tip function
function calculateTip() {

    //store data of user inputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;

    //validation - if no inputs, prompt user
    if(billAmount === "" || serviceQuality == 0){
      window.alert("Oops! Please enter values to calculate tip.");
    }

    //check if input is empty/less than or equal to 1
    if(numPeople === "" || numPeople <= 1){
      numPeople=1;
      //remove "each" from display if numPeople = 1
      document.getElementById("each").style.display="none";
    } else {
      //if more than 1 is dining, show each in display
      document.getElementById("each").style.display="block";
    }

    //calc tip
    var total= (billAmount * serviceQuality)/ numPeople;
    total = Math.round(total*100)/100; //round to two decimal places
    total = total.toFixed(2); //ensure always 2 dec places

    //display Tip
    document.getElementById("totalTip").style.display="block";
    document.getElementById("tip").innerHTML= total;
}

//hide tip amount on load
document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";

//click button to call tip function
document.getElementById("calculate").onclick = function() { calculateTip(); };

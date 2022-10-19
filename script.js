function compute() {   //computes principal, intererst and rate
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate) / 100;
    var year = new Date().getFullYear() + parseInt(years);
  
    if (principal <= 0) {
      alert("Enter Positive Number");// shows alert for negative numbers
      principal.focus();
      return false;
    }
  
    result = document.getElementById("result"); //displays results in html span
    result.innerHTML =
      "If you deposit " +
      principal +
      "<br>at and interest rate of " +
      rate +
      "%<br>You will receive an amount of " +
      interest +
      ",<br>in the year " +
      year +
      "<br>";
  }
  
  function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
  }
  
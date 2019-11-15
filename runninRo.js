function calculateFunction() {

    //Put in the value of miles in first box
    var a = document.getElementById("milesRun").value;
    
    //Get the value from the time in second text box
    var b = document.getElementById("runningTime").value;
    
    //Divide those two values
    var sum = parseFloat(a) / parseFloat(b);
    
    //Print the result to the page
    // document.write(sum)}

    //Print the result to the pace box for miles per minute
    var pace = document.getElementById("pace");
    pace.value = sum;
    var round =Math.round (newFunction());
      document.getElementById("pace").innerHTML = Math.round(newFunction_1());
    
    var roundedDividend = Math.round( "sum" );  
      document.getElementById("sum" ).innerHTML = Math.round("sum");

  function newFunction_1() {
    return 2.5;
  }

  function newFunction() {
    return 2.5;
  }
  }
var $numKey = $('span').not('#clear').not('#equals');

//create function that adds text to the screen, done
function print (event) {
  var $text = $(event.target).text();
  $('#screen').append($text);
}

//eventlistener for print
$($numKey).click(print);

//clear function for the C button
function erase (event) {
  $('#screen').text("");
}

//eventlistener for clear
$('#clear').click(erase);

//create function that takes text from the screen and evaluates it
function solve(event) {
  var screenNum = $('#screen').text();
  var newScreenNumM,newScreenNumD;
  var $finalNum,$finalNumM,$finalNumD;
  var $str, $strM,$strD;

  if  (( $("#screen:contains('x')").length )) {
    newScreenNumM = screenNum.replace('x','*');
    $finalNumM = newScreenNumM;
    $strM = eval($finalNumM);
    console.log($strM);
    $('#screen').text("");
    $('#screen').append($strM);
  }else if ($("#screen:contains('÷')").length) {
    newScreenNumD = screenNum.replace('÷','/');
    $finalNumD = newScreenNumD;
    $strD = eval($finalNumD);
    console.log($strD);
    $('#screen').text("");
    $('#screen').append($strD);
  }else{
    $strD = eval(screenNum);
    console.log($strD);
    $('#screen').text("");
    $('#screen').append($strD);
  }
}

$('#equals').click(solve);

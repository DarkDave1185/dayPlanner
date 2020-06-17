/*variables*/
let timeNow = moment().format('LL');
let hourNow = moment().format('h');
let hourNow24= parseInt(moment().format('HH'));
let hourNowInt = parseInt(hourNow);
let Timer;

let hour1 = $('#time1').text();
let hour2 = $('#time2').text();
let hour3 = $('#time3').text();
let hour4 = $('#time4').text();
let hour5 = $('#time5').text();
let hour6 = $('#time6').text();
let hour7 = $('#time7').text();
let hour8 = $('#time8').text();
let hour9 = $('#time9').text();

let hour1Int = parseInt(hour1);
let hour2Int = parseInt(hour2);
let hour3Int = parseInt(hour3);
let hour4Int = parseInt(hour4);
let hour5Int = parseInt(hour5);
let hour6Int = parseInt(hour6);
let hour7Int = parseInt(hour7);
let hour8Int = parseInt(hour8);
let hour9Int = parseInt(hour9);

// Display the time using moment.js
$('#currentDay').append(timeNow);
/*save button per hour*/
/*single use function*/
$('#btn1').click(function() {
  if($('#text1').val()) {
    localStorage.removeItem('note1');
  }
  let hour1String = JSON.stringify(hour1);
    localStorage.setItem(hour1, $('#note1').val());
});

$('#btn2').click(function() {
  if($('#text2').val()) {
    localStorage.removeItem('note2');
  }

  let hour2String = JSON.stringify(hour2);

  localStorage.setItem(hour2, $('#note2').val());
});

$('#btn3').click(function() {
  if($('#text3').val()) {
    localStorage.removeItem('note3');
  }

  let hour3String = JSON.stringify(hour3);

  localStorage.setItem(hour3, $('#note3').val());
});

$('#btn4').click(function() {
  if($('#text4').val()) {
    localStorage.removeItem('note4');
  }

  let hour4String = JSON.stringify(hour4);

  localStorage.setItem(hour4, $('#note4').val());
});

$('#btn5').click(function() {
  if($('#text5').val()) {
    localStorage.removeItem('note5');
  }

  let hour5String = JSON.stringify(hour5);

  localStorage.setItem(hour5, $('#note5').val());
});

$('#btn6').click(function() {
  if($('#note6').val()) {
    localStorage.removeItem('note6');
  }

  let hour6String = JSON.stringify(hour6);

  localStorage.setItem(hour6, $('#note6').val());
});

$('#btn7').click(function() {
  if($('#text7').val()) {
    localStorage.removeItem('note7');
  }

  let hour7String = JSON.stringify(hour7);

  localStorage.setItem(hour7, $('#note7').val());
})

$('#btn8').click(function() {
  if($('#note8').val()) {
    localStorage.removeItem('note8');
  }

  let hour8String = JSON.stringify(hour8);

  localStorage.setItem(hour8, $('#note8').val());
})

$('#btn9').click(function() { 
  if($('#note9').val()) {
    localStorage.removeItem('note9');
  }

  let hour9String = JSON.stringify(hour9);

  localStorage.setItem(hour9, $('#note9').val());
})

// Color coding to reflect whether the time slot is in the past, the present or the future 

colorCoding();
/*multiple use function*/
function colorCoding() {

  TIMER = setInterval(colorCoding, 1000);
  
  if(hourNow24 >= 9 && hourNow24 <= 17) {
    for (let i =1; i<=9 ; i++) { 
    let hourInInt = parseInt($('#time'+i).text());
        console.log("hourInInt", hourInInt);
    if (hourInInt < 9) {
        hourInInt = hourInInt + 12;
    }if (hourInInt == hourNow24) {
        $('#text'+i).css('background-color', 'lightblue');
        continue;}
    if (hourInInt < hourNow24) {
        $('#text'+i).css('background-color', 'lightgray');
      }else {
        $('#text'+i).css('background-color', 'lightgreen');
      }
    }
};

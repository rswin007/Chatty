//comp_dialog = document.querySelectorAll('.comp-dialog');

//var comp = {
   // name = 'Rachel',
    //age:'6 years'//



//comp_dialog[0]//
 //var messengerBox = document.Box//

  var box = document.querySelector('div#box');
   box.insertAdjacentHTML("afterbegin", `<p class="blue">chicken nuggets</p>
   ----------------------------------------------------------`);




  
//---------------------------------------------------------------
   var button = document.querySelector('button');
   var inputBox = document.querySelector('input');
button.addEventListener('click', function (){
  box.insertAdjacentHTML("beforeend", "<p>"+ inputBox.value + "</p>");
  box.scrollTo(0, box.scrollHeight);
  
  inputBox.value = ""
  mascotFeedback()
  box.scrollTo(0, box.scrollHeight);
} )

//--------------------------------------------------------------------------
var mascot = {
  name:"HEYYYYY",
  age:-60
}
//--------------------------------------
function mascotFeedback() {
  setTimeout(function() {
    box.insertAdjacentHTML('beforeend', `<p class= "green">HEYYYY ${mascot.name}</p>`);
  }, 1500);
}






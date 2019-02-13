
function showHideNavigation(){
  //grab the menu list and toggle to show and hide
  var navagation = document.getElementsByClassName('primary-nav');
  for( var i = 0; i < navagation.length; i++ ){
    var myNav = navagation[i];
    myNav.classList.toggle('primary-nav--visible');
  }
};

function showHeaderMenu(){
  //grab the subheader background and make a show and hide
  var bg = document.querySelector('.sub-header');
  bg.classList.toggle('sub-header--bg-expanded');
};

function menuIconEffect(){

    //menu icon click to make it an X
    var menuIcon = document.querySelector('.sub-header__menu-icon');
      if (menuIcon.classList.contains('sub-header--close-x')) {
        menuIcon.classList.remove('sub-header--close-x');
      } else {
        menuIcon.classList.add('sub-header--close-x');
      }
};

document.querySelector('.sub-header__menu-icon').addEventListener('click', function(e){
  e.preventDefault();

  showHideNavigation();
  showHeaderMenu();
  menuIconEffect();

});

//on scroll show hidden items
function onScroll(){
  var description = document.querySelector('.who-we-are__descrition');
  var serviesContent = document.querySelector('.services-section__flex-container');

  var yPost = window.pageYOffset;

  if(yPost >= 300 ){
    description.classList.add('who-we-are--is-visible');
  }if(yPost >= 1300){
    serviesContent.classList.add('services-section--is-visible-fex');
  }

};
document.addEventListener('scroll', onScroll);

//sticky header
document.addEventListener('scroll', function(){

  var subHeader = document.querySelector('.sub-header');
  var fontSize = document.querySelector('.primary-nav');

  if( window.pageYOffset > 192 ){
    subHeader.classList.add('sub-header--background-fixed');
    fontSize.classList.add('primary-nav--font-fixed');
  }else{
    subHeader.classList.remove('sub-header--background-fixed');
    fontSize.classList.remove('primary-nav--font-fixed');
  }

});


//scroll on active links

function activeLinks(event){

    var sections = [...document.querySelectorAll('.primary-nav a')];
    var scrollPost = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    sections.forEach(function(currlink){
      var val = currlink.getAttribute('href');
      var refElement = document.querySelector(val);
      if( refElement.offsetTop <=  scrollPost && ( refElement.offsetTop + refElement.offsetHeight > scrollPost )){
        currlink.classList.add('active');
      }else{
        currlink.classList.remove('active');
      }
    });
};
document.addEventListener('scroll', activeLinks);



//typing letters on the go when page loadds
var i = 0;
var txt = 'Putting Drivers First!!';
var speed = 80;

function typeWriting(){

  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriting, speed);
  }
};

document.addEventListener('load', typeWriting());

//validate First Name function
function firstName(){

  var firstName = document.getElementById('firstName');
  if( firstName.value == '' || firstName.value == null ){
    produceErrorMessage('First Name is Required!', 'name-error', '#f75353');
    return false;
  }else{
     produceErrorMessage('Correct!', 'name-error', '#82d58e');
    return true;
  }
};
document.getElementById('firstName').addEventListener('blur', firstName);

//validate Last Name function
function lastName(){

  var lastName = document.getElementById('lastName');
  if( lastName.value == '' || lastName.value == null ){
    produceErrorMessage('Last Name is Required!', 'lastName-error', '#f75353');
    return false;
  }else{
    produceErrorMessage('Correct!', 'lastName-error', '#82d58e');
    return true;
  }
};
document.getElementById('lastName').addEventListener('blur', lastName);

//telefone validation function

document.getElementById("telephone").maxLength = "16";
function formatTelephone(){
  var obj = document.getElementById("telephone");
  var numbers = obj.value.replace(/\D/g, ''),
    char = { 0: '(', 3: ') ', 6: ' - ' };
      obj.value = '';
      for (var i = 0; i < numbers.length; i++) {
          obj.value += (char[i] || '') + numbers[i];
      }
};
document.getElementById('telephone').addEventListener('keyup', formatTelephone);

function validateTelephone(){
	 var telephone = document.getElementById('telephone').value;
	 if( telephone.length  == ""   ){
	  produceErrorMessage('Please validate Email', 'telephone-error', '#f75353');
	  return false;
  }
	  produceErrorMessage('Correct!', 'telephone-error', '#82d58e');
	 return true;
};
document.getElementById('telephone').addEventListener('blur', validateTelephone );

//subject validation function
function subjectValidation(){

  var subject = document.getElementById('subject');
  if( subject.value == '' || subject.value == null ){
    produceErrorMessage('Subject is Required!', 'subject-error', '#f75353');
    return false;
  }else{
     produceErrorMessage('Correct!', 'subject-error', '#82d58e');
    return true;
  }
};
document.getElementById('subject').addEventListener('blur', subjectValidation);

//message validation function
function messageValidation(){

  var message = document.getElementById('message');
  if( message.value == '' || message.value == null ){
    produceErrorMessage('Message is Required!', 'message-error', '#f75353');
    return false;
  }else{
     produceErrorMessage('Correct!', 'message-error', '#82d58e');
    return true;
  }
};
document.getElementById('message').addEventListener('blur', messageValidation);


//get all input fields uppercases
function upperCases(){
  var values = document.querySelectorAll("input[type=text]");
    for( var i = 0; i < values.length; i++ ){
      values[i].value = values[i].value.toUpperCase();

    }
};
    var getUpperCases = document.querySelectorAll("#form input[type=text]");
      for( var j = 0; j < getUpperCases.length; j++ ){
          getUpperCases[j].addEventListener('blur', upperCases);
      }



//function for error message and color
function produceErrorMessage(message, location, color){

  document.getElementById(location).innerHTML = message;
  document.getElementById(location).style.color = color;
};

//full function to validate all input fields
function validateCommentForm(){

  if( !firstName() || !lastName() || !validateTelephone() || !subjectValidation() || !messageValidation() ){
    return false;
  }

};

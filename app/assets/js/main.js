
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

//on scroll show and hide items
function onScroll(){
  var description = document.querySelector('.who-we-are__descrition');
  var serviesContent = document.querySelector('.services-section__flex-container');

  var yPost = window.pageYOffset;

  if(yPost >= 300 ){
    description.classList.add('who-we-are--is-visible');
    console.log(yPost);
  }if(yPost >= 1300){
    serviesContent.classList.add('services-section--is-visible-fex');
  }

};
document.addEventListener('scroll', onScroll);



var i = 0;
var txt = 'Putting Drivers First!';
var speed = 90;

function typeWriting(){

  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriting, speed);
  }
};

document.addEventListener('load', typeWriting());

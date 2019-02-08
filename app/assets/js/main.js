document.querySelector('.sub-header__menu-icon').addEventListener('click', function(e){
e.preventDefault;

  //grab the menu list content and add a toggle class to it to show and hide.
  var nav = document.querySelector('.primary-nav');
  //add a toggle class to it to show and hide
  nav.classList.toggle('primary-nav--visible');
 
  //create a new background expanded for the menu links
  //we grab the entired site subheader section
  var menuBackground = document.querySelector('.sub-header');
  menuBackground.classList.toggle('sub-header--background-expanded');


});

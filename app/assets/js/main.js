document.querySelector('.sub-header__menu-icon').addEventListener('click', function(e){
  e.preventDefault();

  //grab the menu list and toggle to show and hide
  var navagation = document.getElementsByClassName('primary-nav');
  for( var i = 0; i < navagation.length; i++ ){
    var myNav = navagation[i];
    myNav.classList.toggle('primary-nav--visible');
  }

  //grab the subheader background and make a show and hide
  var bg = document.querySelector('.sub-header');
  bg.classList.toggle('sub-header--bg-expanded');

  //menu icon click to make it an X
  var menuIcon = document.querySelector('.sub-header__menu-icon');
    if (menuIcon.classList.contains('sub-header--close-x')) {
      menuIcon.classList.remove('sub-header--close-x');
    } else {
      menuIcon.classList.add('sub-header--close-x');
    }
});
 

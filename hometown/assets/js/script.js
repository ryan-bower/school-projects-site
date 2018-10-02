/* if anywhere is clicked retract the drop down */
$('body').click(function() {
  $('#page_nav .bottom-part').hide();
});

/* If the top part of teh drop dow nis click, drop down */
$('#page_nav .top-part').click(function() {
  $('#page_nav .bottom-part').toggle();
});

/* Stops the body from toggling when it's alright retracted */
$('#page_nav').click(function(e) {
  e.stopPropagation();
});

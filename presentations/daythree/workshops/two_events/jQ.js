//on ready
$(document).ready(function(){
  $('#submit').bind('click',submitHandler);
  $('#clear').bind('click',clearHandler);
});//end doc.ready

//'submt' click handler
function submitHandler(event){
  $('input,textarea').each(function(){
  	if($(this).val()=='')
	  addError($(this).attr('id'));
//console.log($('#message').text());
  })//end each
}

//'clear' click handler
function clearHandler(event){
  $('input,textarea').each(function(){
	$(this).val('');
	$(this).removeAttr('style');
	$('#message').text('');
  })//end each
}

//error
function addError(ele){
  $('#'+ele).css({'border':'3px solid #FF0000'});
  $('#message').text('Error');
}
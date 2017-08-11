(function(){

  $(function(){
    bindFormSubmit();
  }) // Onready

function bindFormSubmit() {
	$( "#target" ).submit(validateInputForm);
}


function validateInputForm( event ) {
  // event source property
  // event propagation
  // Capturing and bubbling
  // Event target and current target
  var $this = $(this);  // Convention while naming jquery objects
  var inputEmailId = $this.find('input[name="inputEmail"]').val();
  var inputPassword = $this.find('input[name="inputPassword"]').val();
  fetchPassword().then(function(data){
      validatePassword(inputPassword,data.validatePassword)
  })
  event.preventDefault();
}
    


function fetchPassword(){
    return $.get("/api/valid_pw.json");
}

function validatePassword(inputPassword, data){
  var index = $.inArray(inputPassword, data)
    if(index == -1){
      alert('Invalid Password')
    }else{
      alert('Valid Password')
    }
}
})();

// Continuation passing style



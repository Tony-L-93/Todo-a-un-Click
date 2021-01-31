$( document ).ready(function() {
  // Handler for .ready() called.
	var input = $('.validate-input .input100');
	var usuario ="oscar";
	var password = "software";
	
	$(".login100-form-btn").click(function(){
		var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }
        if(check){
        	  if(usuario ==input[0].value && password == input[1].value){
              	$(".resultado").text("Usuario correcto");
                  $(".resultado").show();
                  $(".resultado").css("color","green");
                  
              }else{
            	  check=false;
                  $(".resultado").text("Usuario incorrecto");
                  $(".resultado").css("color","red");
                  $(".resultado").show();

              }
        }
      


        return check;
	});
   /* $('.validate-form').on('submit',function(){
        
    });*/

    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

});
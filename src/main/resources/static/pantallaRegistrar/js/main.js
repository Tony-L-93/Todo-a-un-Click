$( document ).ready(function() {
    $("#form-register").validate({
        rules: {
            password : {
                required : true,
            },
            confirm_password: {
                equalTo: "#password"
            }
        },
        messages: {
            username: {
                required: "Please provide an username"
            },
            email: {
                required: "Please provide an email"
            },
            password: {
                required: "Please provide a password"
            },
            confirm_password: {
                required: "Please provide a password",
                equalTo: "Please enter the same password"
            }
        }
    });
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        // enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : 'Back',
            next : '<i class="zmdi zmdi-arrow-right"></i>',
            finish : '<i class="zmdi zmdi-arrow-right finalizar"></i>',
            current : ''
        },
        onStepChanging: function (event, currentIndex, newIndex) { 
            var tipoPago = $('#tipo-cuenta').val();
            var cardnumber = $('#card-number').val();
            var username = $('#username').val();
            var cvc = $('#cvc').val();
            var month = $('#month').val();
            var year = $('#year').val();
            var cbu = $("#cbu").val();
            var banco = $("#banco").val();
            var titular = $('#titular').val();
            var numero = $('#numero').val();
            $('#tipo-cuenta-val').text(tipoPago);
            $('#tipo-cuenta-val2').text(tipoPago);
            $('#card-number-val').text(cardnumber);
            $('#username-val').text(username);
            $('#cvc-val').text(cvc);
            $('#month-val').text(month);
            $('#year-val').text(year);
            $("#cbu-val").text(cbu);
            $("#titular-val").text(titular);
            $('#numero-val').text(numero);
            $('#banco-val').text(banco);
            if(newIndex==2){
            	$("#registrar").show();
            }
            
        /*    $('#email-val').text(email);
            $('#card-type-val').text(cardtype);
           */
            
           

            $("#form-register").validate().settings.ignore = ":disabled,:hidden";
            return $("#form-register").valid();
        }
    });
    $("#registrar").click(function(){
    	window.location.href = "/resultado";
    });

});

function cambiarFormulario(){
	var elemento = document.getElementById("tipo-cuenta");
	if("Tarjeta Credito" == elemento[elemento.selectedIndex].value){
		$(".tarjeta").show();
		$(".cuenta-bancaria").hide();
		$(".table-cuenta").hide();
		$(".table-tarjeta").show();
	}else{
		$(".cuenta-bancaria").show();
		$(".tarjeta").hide();
		$(".table-cuenta").show();
		$(".table-tarjeta").hide();
	}
	
}

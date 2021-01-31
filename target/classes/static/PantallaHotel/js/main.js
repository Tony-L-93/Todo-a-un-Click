$( document ).ready(function() {
	$("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        enablePagination: false,
        transitionEffectSpeed: 500,
        labels: {
            current: ""
        }
    });

    // Custome Button Jquery Step
    $('.forward').click(function(){
    	var fechainicial = document.getElementById("dp1").value;
 	   var fechafinal = document.getElementById("dp2").value;

 	   if(Date.parse(fechafinal) < Date.parse(fechainicial)) {
 		   $("#error").text("La fecha final debe ser mayor a la fecha inicial");
 	   }else if($(".select-control").text()=="Cantidad de Personas :"){
 		   $("#error").text("La cantidad de persona es obligatoria");
 	   }else{
 		   window.location.href = "/reservado";
 	   }
    })

    // Date Picker
    var dp1 = $('#dp1').datepicker().data('datepicker');
    dp1.selectDate(new Date());
    var dp2 = $('#dp2').datepicker().data('datepicker');
    dp2.selectDate(new Date());

  
    // Select Dropdown
    $('html').click(function() {
    	 
        $('.select .dropdown').hide(); 
    });
    $('.select').click(function(event){
        event.stopPropagation();
    });
    $('.select .select-control').click(function(){
        $(this).parent().next().toggle();
    })    
    $('.select .dropdown li').click(function(){
        $(this).parent().toggle();
        var text = $(this).attr('rel');
        $(this).parent().prev().find('div').text(text);
    })

});



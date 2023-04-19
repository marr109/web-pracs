$(document).ready(function(){

    $(".needs-validation").validate({
        errorClass: "is-invalid",
        validClass: "is-valid",

        rules: {

            contr:{
                required: true,
            }

        },

        messages: {
            
            contra:{
                required: "El nombre es requerido"
            }
        }
    });

    $.validator.addMethod("pwcheck",
        function(value,element){
            return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(value);
        }

    )

});

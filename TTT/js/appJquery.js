$(document).ready(function(){

    $(".needs-validation").validate({

        errorClass: "is-invalid",
        validClass: "is-valid",

        rules:{

            nombre:{
                required:true,
            },
            apellidos:{
                required:true,
            },
            email:{
                required:true,
            },
            contrasenya:{
                required:true,
                pwcheck:true,
                minlength: 8,
                maxlength: 9,
            },
            comuna:{
                required:true,
            },
            region:{
                required:true
            }

        },

        messages:{
            
            nombre:{
                required:"El nombre es requerido",
            },
            apellidos:{
                required:"El apelllido es requerido",
            },
            email:{
                required:"El correo es requerido",
            },
            contrasenya:{
                required:"La contraseña es requerida",
                pwcheck:"La contraña no cumple con el formato válido",
                minlength:"La contraseña debe contener como mínimo 8 carácteres",
            },
            comuna:{
                required:"La comuna es requerida",
            },
            region:{
                required:"La region es requerida",
            },

            terminos:{
                required:"es requerido aceptar terminos y condiciones"
            }
        }

    });

    $.validator.addMethod("pwcheck",

            function(value, element){
                // if(value.minlegth < 8){
                //     return false;
                // }
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(value)
            }
    );

});
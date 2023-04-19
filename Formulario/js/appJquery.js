$(document).ready(function () {

    $(".needs-validation").validate({

        errorClass: "is-invalid",
        validClass: "is-valid",

        rules: {

            nombre: {
                required: true,
            },
            apellidos: {
                required: true,
            },
            email: {
                required: true,
            },
            contrasenya: {
                required: true,
                pwcheck: true,
                minlength: 8
            },
            terminos: {
                required: true,
            }
        },

        messages: {

            nombre: {
                required: "El nombre es requerido",
            },
            apellidos: {
                required: "El apellido es requerido",
            },
            email: {
                required: "El correo es requerido",
            },
            contrasenya: {
                required: "La contraseña es requerida",
                pwcheck: "La contraseña no cumple con el formato válido",
                minlength: "La contraseña debe contener como mínimo 8 caracteres"
            },
            terminos: {
                required: "Es requerido aceptar términos y condiciones",
            }
        }
    });

    $.validator.addMethod("pwcheck",
        function (value, element) {
            return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(value);
        }
    );

});

$("#formulario").validate({

    rules: {
        input_nombre: {
          required: true,
          solo_letras: true,
          dos_nombres: true
          
        },
        telefono: {
            required: true,
            digits: true,
            rangelength: [9, 9]
        }
    },

    messages: {
        input_nombre: {
            required: "Ingresa un nombre ",
            dos_nombres: "nombre y apellido pown"
        },
        telefono: {
            required: "ingresa celu xd",
            digits: "solo numeros",
            rangelength: "debe tener 9 numeros"
        },
    },

    submitHandler: function(form) {
      form.submit();
      alert("registro bien");
    }
});


/* METODOS SACADOS DE jqueryvalidation.org */

jQuery.validator.addMethod("dos_nombres", function(value, element) {
    return /\s/.test(value);
  }, "nombre y apellido");

jQuery.validator.addMethod("solo_letras", function(value, element) {
    return /[a-z]/.test(value);
},  "solo letras");

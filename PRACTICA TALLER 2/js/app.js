// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    let nombreApellido=document.getElementById("nombre-apellido");
    let phoneNumber=document.getElementById("fono");
    var patternPhone= "^\+?[56]{2}?\s?[9]?\s?[0-9]{8}|[9]?\s?[0-9]{8}$";
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {

            console.log(campos.children[0]);

            if (!form.checkValidity()) {

                if(nombreApellido.value==""){
                    campos.children[0].getElementsByClassName("invalid-feedback")[0].innerHTML="Nombre vacio."
                }

                if(!checkPattern()){
                    campos.children[1].getElementsByClassName("invalid-feedback")[0].innerHTML="Contraseña debe tener al inicio +56 y 8 digitos"
                }


                
                event.preventDefault()
                event.stopPropagation()
            }
  
        form.classList.add('was-validated')
    }, false)
    })
})()

function checkPattern(){
    var elem = document.getElementById("fono");
    var pattern = elem.getAttribute ("^\+?[56]{2}?\s?[9]?\s?[0-9]{8}|[9]?\s?[0-9]{8}$");
    var re = new RegExp(pattern);

    if (re.test(elem.value)) {
    return true;
    } else {
        return false;
    }
}
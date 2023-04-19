(() => {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to

    

    const forms = document.querySelectorAll('.needs-validation');
    let password = document.getElementById("contrasenya");

    const campos = document.getElementById("campos");
    // Loop over them and prevent submission

    function checkPattern() {
        var elem = document.getElementById("contrasenya");
        var pattern = elem.getAttribute("pattern");
        var re = new RegExp(pattern);
        if (re.test(elem.value)) {
            return true;
        } else {
            return false;
        }
    }

    Array.from(forms).forEach(form => {

        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {

                if (!checkPattern() && password.value !== "") {
                    campos.children[3].getElementsByClassName("invalid-feedback")[0].innerHTML = "Contraseña no valida";
                }
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()

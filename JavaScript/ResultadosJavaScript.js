$(document).ready(function() {

    $(window).onload = Principal();


    /*--------------------Función Encargada de llenar los campos con los datos que corresponden--------------------*/

    function Principal() {
        for (let x = 0; x < 5; x++) {

            switch (x) {
                case 0:

                    var prodId = getParameterByName('Nombre');
                    $('#Nombre').text(prodId);
                    break;
                case 1:
                    var prodId = getParameterByName('Email');
                    $('#Email').val(prodId);
                    break;
                case 2:
                    var prodId = getParameterByName('Telefono');
                    $('#Telefono').val(prodId);
                    break;
                case 3:
                    var prodId = getParameterByName('Gustos');
                    $('#Gusto').val(prodId);
                    break;

                default:
                    break;
            }
        }
    };

    /*--------------------Función Encargada de obtener los valores de la URL--------------------*/

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }





});
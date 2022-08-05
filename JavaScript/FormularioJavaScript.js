$(document).ready(function() {
    var cont = 1;

    $("#BotonGustos").click(function() {

        $("#Part4").show();



        $("#TablaGustos").append(
            $('<tr>')
            .append(
                $('<td>')
                .append(
                    $('<input>').attr('type', 'text').attr('id', 'GustosTabla' + cont)

                )
            )
            .append(
                $('<td>')
                .append(
                    $('<input>').attr('type', 'text').attr('id', 'Porcentaje')
                )
            )
            .append(
                $('<td>')
                .append(
                    $('<a>').attr('id', 'Editar').attr('href', 'Habilitar()').text('Editar')
                )
            )



        );
        cont = cont + 1;
    });

    $("#BotonGustos").click(function() {

        document.getElementById("GustosTabla" + cont).Value = document.getElementById("TextGustos").Value;

    });


});
/**
 * Created by Nicoletta on 14/10/2014.
 */



$(function(){
        var finestra=window.matchMedia("(min-width:768px)");

    if (finestra.resize) {
        $("#cambia").hover(
            function () {
                $(this).text("Let's socialise");
            },
            function () {
                $(this).text("Let's socialise");
            });

    } else {
        $("#cambia").hover(
            function () {
                $(this).text("Maqina on twitter");
            },
            function () {
                $(this).text("Let's socialise");
            }
        );
    }


    });

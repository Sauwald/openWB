loadText();
function loadText(){
    $.ajax({
        url:"./tools/lademodus.php",
        type: "post", //request type,
        dataType: 'json',
        data: {call: "loadfile"},
        success:function(result){
            if(result.text == 0){
                $('.actstat .btn').addClass("btn-green");
                $('.actstat1 .btn').addClass("btn-red");
                $('.actstat2 .btn').addClass("btn-red");
                $('.actstat3 .btn').addClass("btn-red");
                $('.actstat3 .btn').removeClass("btn-green");
                $('.actstat4 .btn').addClass("btn-red");
                $('.actstat4 .btn').removeClass("btn-green");
                $('.actstat1 .btn').removeClass("btn-green");
                $('.actstat2 .btn').removeClass("btn-green");
            }
            if(result.text == 1){
                $('.actstat1 .btn').addClass("btn-green");
                $('.actstat .btn').addClass("btn-red");
                $('.actstat2 .btn').addClass("btn-red");
                $('.actstat3 .btn').addClass("btn-red");
                $('.actstat .btn').removeClass("btn-green");
                $('.actstat3 .btn').removeClass("btn-green");
                $('.actstat2 .btn').removeClass("btn-green");
                $('.actstat4 .btn').addClass("btn-red");
                $('.actstat4 .btn').removeClass("btn-green");

            }
            if(result.text == 2){
                $('.actstat2 .btn').addClass("btn-green");
                $('.actstat .btn').addClass("btn-red");
                $('.actstat1 .btn').addClass("btn-red");
                $('.actstat3 .btn').addClass("btn-red");
                $('.actstat .btn').removeClass("btn-green");
                $('.actstat3 .btn').removeClass("btn-green");
                $('.actstat1 .btn').removeClass("btn-green");
                $('.actstat4 .btn').addClass("btn-red");
                $('.actstat4 .btn').removeClass("btn-green");

            }
            if(result.text == 3){
                $('.actstat2 .btn').addClass("btn-red");
                $('.actstat3 .btn').addClass("btn-green");
                $('.actstat .btn').addClass("btn-red");
                $('.actstat1 .btn').addClass("btn-red");
                $('.actstat .btn').removeClass("btn-green");
                $('.actstat1 .btn').removeClass("btn-green");
                $('.actstat4 .btn').addClass("btn-red");
                $('.actstat4 .btn').removeClass("btn-green");

            }
            if(result.text == 4){
                $('.actstat2 .btn').addClass("btn-red");
                $('.actstat3 .btn').addClass("btn-red");
                $('.actstat .btn').addClass("btn-red");
                $('.actstat1 .btn').addClass("btn-red");
                $('.actstat .btn').removeClass("btn-green");
                $('.actstat2 .btn').removeClass("btn-green");
                $('.actstat3 .btn').removeClass("btn-green");
                $('.actstat1 .btn').removeClass("btn-green");
                $('.actstat4 .btn').addClass("btn-green");
                $('.actstat4 .btn').removeClass("btn-red");

            }
        }
    });
}

$(function() {
    if($('#msmoduslp1').val() == '0') {
        $('#msmodusnlp1').show();
        $('#msmodusslp1').hide();
        $('#msmodusmlp1').hide();
    }
    if($('#msmoduslp1').val() == '1')
    {
        $('#msmodusnlp1').hide();
        $('#msmodusslp1').hide();
        $('#msmodusmlp1').show();
    }
    if($('#msmoduslp1').val() == '2')
    {
        $('#msmodusnlp1').hide();
        $('#msmodusslp1').show();
        $('#msmodusmlp1').hide();
    }

    $('#msmoduslp1').change(function(){
        if($('#msmoduslp1').val() == '0') {
            $('#msmodusnlp1').show();
            $('#msmodusslp1').hide();
            $('#msmodusmlp1').hide();
        }
        if($('#msmoduslp1').val() == '1')
        {
            $('#msmodusnlp1').hide();
            $('#msmodusslp1').hide();
            $('#msmodusmlp1').show();
        }
        if($('#msmoduslp1').val() == '2')
        {
            $('#msmodusnlp1').hide();
            $('#msmodusslp1').show();
            $('#msmodusmlp1').hide();
        }
    });
});

$(function() {
    if($('#msmoduslp2').val() == '0') {
        $('#msmodusnlp2').show();
        $('#msmodusslp2').hide();
        $('#msmodusmlp2').hide();
    }
    if($('#msmoduslp2').val() == '1')
    {
        $('#msmodusnlp2').hide();
        $('#msmodusslp2').hide();
        $('#msmodusmlp2').show();
    }
    if($('#msmoduslp2').val() == '2')
    {
        $('#msmodusnlp2').hide();
        $('#msmodusslp2').show();
        $('#msmodusmlp2').hide();
    }

    $('#msmoduslp2').change(function(){
        if($('#msmoduslp2').val() == '0') {
            $('#msmodusnlp2').show();
            $('#msmodusslp2').hide();
            $('#msmodusmlp2').hide();
        }
        if($('#msmoduslp2').val() == '1')
        {
            $('#msmodusnlp2').hide();
            $('#msmodusslp2').hide();
            $('#msmodusmlp2').show();
        }
        if($('#msmoduslp2').val() == '2')
        {
            $('#msmodusnlp2').hide();
            $('#msmodusslp2').show();
            $('#msmodusmlp2').hide();
        }
    });
});

$(function() {
    if($('#lademlp3check').val() == '0') {
        $('#msmodusnlp3').show();
        $('#msmodusmlp3').hide();
    }
    if($('#lademlp3check').val() == '1')
    {
        $('#msmodusnlp3').hide();
        $('#msmodusmlp3').show();
    }
    $('#lademlp3check').change(function(){
        if($('#lademlp3check').val() == '0') {
            $('#msmodusnlp3').show();
            $('#msmodusmlp3').hide();
        }
        if($('#lademlp3check').val() == '1')
        {
            $('#msmodusnlp3').hide();
            $('#msmodusmlp3').show();
        }

    });
});

function rslp1() {
    $.ajax({
        type: "POST",
        url: './tools/resetlpladem.php',
        data:{action:'resetlp1'},
        success:function(html) {

        }

    });
}
function rslp2() {
    $.ajax({
        type: "POST",
        url: './tools/resetlpladem.php',
        data:{action:'resetlp2'},
        success:function(html) {

        }

    });
}
function rslp3() {
    $.ajax({
        type: "POST",
        url: './tools/resetlpladem.php',
        data:{action:'resetlp3'},
        success:function(html) {

        }

    });
}
function rsziellp1() {
    $.ajax({
        type: "POST",
        url: './tools/resetlpladem.php',
        data:{action:'resetziellp1'},
        success:function(html) {

        }

    });
}
$(function() {
    if($('#sofortlm').val() == '0') {
        $('#sofortlmdiv, #sofortlmdiv1, #sofortlmdiv2').show();
    } else {
        $('#sofortlmdiv, #sofortlmdiv1, #sofortlmdiv2').hide();
    }
});
$(function() {
    if($('#zielladenaktivlp1').val() == '1') {
        $('#zielladenaktivlp1div').show();
    } else {
        $('#zielladenaktivlp1div').hide();
    }

});

$(function() {
    if($('#hausverbrauchstat').val() == '1') {
        $('#hausverbrauch').show();
    } else {
        $('#hausverbrauch').hide();
    }

});
$(function() {
    if(($('#lademodus').val() == '0' && $('#nlakt_sofort').val() == '1') || ($('#lademodus').val() == '1' && $('#nlakt_minpv').val() == '1') || ($('#lademodus').val() == '2' && $('#nlakt_nurpv').val() == '1') || ($('#lademodus').val() == '4' && $('#nlakt_standby').val() == '1')  ) {
        if($('#nachtladenstate').val() == '1') {
            $('#nachtladenstatediv').show();
        } else {
            $('#nachtladenstatediv').hide();
        }
        if($('#nachtladenstates1').val() == '1') {
            $('#nachtladenstates1div').show();
        } else {
            $('#nachtladenstates1div').hide();
        }
    } else {
        $('#nachtladenstatediv').hide();
        $('#nachtladenstates1div').hide();


    }

});
$(function() {
    if($('#evuglaettungakt').val() == '0') {
        $('#evuglaettungdiv').hide();
    } else {
        $('#evuglaettungdiv').show();

    }

});
$(function() {
    if($('#lademodus').val() == '2' && $('#speicherpvui').val() == '1') {
        $('#speicherpvuidiv').show();
    } else {
        $('#speicherpvuidiv').hide();
    }

});
$(function() {
    if($('#lastmanagement').val() == '0') {
        $('#ladepunkts1ndiv').show();
        $('#ladepunkts1div').hide();
        $('#ladepunkts11div').hide();
        $('#ladepunkts111div').hide();
        $('#ladepunkts1111div').hide();
        $('#ladepunkts11111div').hide();
        $('#ladepunkts111111div, #ladepunkts1111111div, #lp2lldiv, #gesamtlldiv').hide();
    } else {
        $('#ladepunkts1ndiv').hide();
        $('#ladepunkts1div').show();
        $('#ladepunkts11div').show();
        $('#ladepunkts111div').show();
        $('#ladepunkts1111div').show();
        $('#ladepunkts11111div').show();
        $('#ladepunkts111111div, #ladepunkts1111111div, #lp2lldiv, #gesamtlldiv').show();
    }

});
$(function() {
    if($('#lastmanagements2').val() == '0') {
        $('#ladepunkts2ndiv').show();
        $('#ladepunkts2div').hide();
        $('#ladepunkts22div').hide();
        $('#ladepunkts222div').hide();
        $('#ladepunkts2222div').hide();
        $('#ladepunkts22222div').hide();
        $('#ladepunkts222222div, #ladepunkts2222222div, #lp3lldiv').hide();
    } else {
        $('#ladepunkts2ndiv').hide();
        $('#ladepunkts2div').show();
        $('#ladepunkts22div').show();
        $('#ladepunkts222div').show();
        $('#ladepunkts2222div').show();
        $('#ladepunkts22222div').show();
        $('#ladepunkts222222div, #ladepunkts2222222div, #lp3lldiv').show();
    }

});
$(function() {
    if($('#speicherstat').val() == 'none') {
        $('#speicherstatdiv').hide();
    } else {
        $('#speicherstatdiv').show();

    }

});
$(function() {
    if($('#lademlp1stat').val() == '1') {
        $('#lademstatdiv').show();
        $('#lademstat1div').show();
    } else {
        $('#lademstatdiv').hide();
        $('#lademstat1div').hide();

    }

});
$(function() {
    if($('#lademlp2stat').val() == '1') {
        $('#lademstats1div, #lademstats1div1').show();
    } else {
        $('#lademstats1div, #lademstats1div1').hide();
    }

});
$(function() {
    if($('#lademlp3stat').val() == '1') {
        $('#lademstats2div, #lademstats2div1').show();
    } else {
        $('#lademstats2div, #lademstats2div1').hide();
    }

});
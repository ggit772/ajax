
//funcion login
function entrar(){ //inicio funcion login
    //alert(user);
    var user =   $.trim($("#user").val());
    var pass =   $.trim($("#pass").val());

    $.ajax({
        url: 'php/consulta.php', 
        type: 'POST',
        dataType: 'json',
        data: {opc: '1',usuario: user, contraseña: pass },
        success: function(data){
            alert('todo esta bn' + data);
            
        },
        error: function(r){
            alert('algo esta mal: '+ r);
        }
    })

} //fin funcion login

//funcion registrar
function registrar(){
    var user =   $.trim($("#user").val());
    var pass =   $.trim($("#pass").val());
    var cel    = $.trim($('#cel').val());
    var direcc = $.trim($('#direcc').val());

    $.ajax({
        url: 'php/consulta.php',
        type: 'POST',
        dataType: 'json',
        data: {opc: '2', usuario: user, contraseña: pass, cel: cel, direcc: direcc},
        success: function(data){
            alert('muy bien');
            window.location.replace("index.html");
        },
        error: function(r){
            alert('algo anda mal');
        }
    });

    // $.ajax({
    //     url: 'php/consulta.php',
    //     type: 'POST',
    //     dataType: 'json',
    //     data: {opcion: '2', usuario: user, contraseña: pass, cel: cel, direcc: direcc},
    //     success: function(data){
    //         alert('exito');
    //     },
    //     error: 
    // });

//     $.ajax({
//         url: 'php/consulta.php',
//         type: 'POST',
//         dataType: 'json',
//         data: {opc: '2', usuario: user, contraseña: pass, cel: cel, direcc: direcc},
//         success: function(data){
//             alert('exito');
//         },
//         error: function(r){
//             alert('error: '+ r);
//         }
//     });
 }
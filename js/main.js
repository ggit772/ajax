function entrar(){
    var user =   $.trim($("#user").val());
    var pass =   $.trim($("#pass").val());

    //alert(user);
    $.ajax({
        url: 'php/consulta.php',
        type: 'POST',
        dataType: 'json',
        data: {usuario: user, contraseña: pass },
        success: function(data){
            alert('todo esta bn' + data);
            
        },
        error: function(r){
            alert('algo esta mal: '+ r);
        }
    })
    

}
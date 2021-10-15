var arreglo = [ //array
    {"usuario": "maria", "contraseña": "1122"},
    {"usuario": "juan", "contraseña": "1122"},
    {"usuario": "ana", "contraseña": "1122"}
];

document.getElementById('full').onclick = function(){
    login();
}

function login(){ 
    var usuario    = document.getElementById('user').value;
    var contraseña = document.getElementById('pass').value;
    var x = false;

    for( var i=0 in arreglo){ //recorro el arreglo
        if(usuario == arreglo[i]['usuario'] && contraseña == arreglo[i]['contraseña']){ //valido los datos de registro
            console.log(arreglo[i]['usuario'])
            let cp = prompt('cuanto son 8 + 2 ?'); //variable que contiene el valor ingresado por el usuario

            if(captcha(cp)){ //valido lo que me retorna la funcion validar captcha
                x = true;
                break; // termono el ciclo
            }else{
                x = false;
            }
            
        }else{
            //alert('algo esta mal');
            x = false;
            console.log(arreglo[i]['usuario'])
        }
    }

    if(x){
        alert('muy bien');
    }else{
        alert('algo esta mal');
    }
     return x;
}

function captcha(res){ //funcion que valida el captcha
    if(res == 10){
        return true;
    }else{
        return false;
    }
}
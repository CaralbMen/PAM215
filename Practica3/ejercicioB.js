function verificarUsuario(usuario){
    return new Promise((resolve, reject)=>{
        console.log("Autenticando...");
        setTimeout(()=>{
            if(usuario=="admin"){
                resolve('Acceso concedido');
            }else{
                reject('Acceso denegado');
            }
        },2000);
    });
}
//Usa .then() y .cathc() para manejar el resultado
verificarUsuario("admin")
    .then(res=> console.log(res))
    .catch(err=> console.err(err));


verificarUsuario("Carlos")
    .then(res=> console.log(res))
    .catch(err=> console.error(err));
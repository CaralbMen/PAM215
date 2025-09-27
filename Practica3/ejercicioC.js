function simularPeticionAPI(){
    return new Promise(resolve =>{
        console.log("Esperaaaaaaa");
        setTimeout(()=>{
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}


async function obtenerDatos(){
    //Usa el await para esperar la promesa de simularPeticion
    //Imprime el resultado
    return await simularPeticionAPI();
}

//Usa la funcion async
console.log(obtenerDatos().then(res=>console.log(res)));
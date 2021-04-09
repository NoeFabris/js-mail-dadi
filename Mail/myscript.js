var mail= prompt("Insert your E-mail");
var listaAccesso = ["noe@secure-web.it", "mail"]

for (let index = 0; index < listaAccesso.length; index++) {
    var element = listaAccesso[index];
    console.log(element)
    if (mail === listaAccesso[index]) {
        document.getElementById('output').innerHTML= "Yes" ;
    } else {
        document.getElementById('output').innerHTML= "No" ;

    }
    
}
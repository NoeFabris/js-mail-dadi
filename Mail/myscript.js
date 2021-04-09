var mail= prompt("Insert your E-mail");
var listaAccesso = ["noe@secure-web.it", "mail", "mail1", "mail2", "mail3"];
var mailLower = mail.toLowerCase()
console.log(mailLower)
for (let index = 0; index < listaAccesso.length; index++) {
    var element = listaAccesso[index];
    console.log(element);
    if (mailLower === listaAccesso[index]) {
        document.getElementById('output').innerHTML= "Yes" ;
        index = listaAccesso.length;
    } else {
        document.getElementById('output').innerHTML= "No" ;
        console.log(index);
    }
}
var nome = document.getElementById("nome");
var cpf = document.getElementById("cpf");
var data = document.getElementById("data");
var sexo = document.getElementById("sexo");
var email = document.getElementById("email");
var celular = document.getElementById("celular");
var nivel = document.getElementById("nivel");
var media = document.getElementById("media");



function validar() {
    if (nome.value == "") {
        nome.style.outline = "solid 1px red";
        var pnome = "- Nome";
    }
    else {
        nome.style.outline = null;
        pnome = "";
    }
    if (cpf.value == "") {
        cpf.style.outline = "solid 1px red";
        var pcpf = "- CPF";
    }
    else {
        cpf.style.outline = null;
        pcpf = "";
    }
    if (data.value == "") {
        data.style.outline = "solid 1px red";
        var pdata = "- Data";
    }
    else {
        data.style.outline = null;
        pdata = "";
    }
    if (sexo.value == "") {
        sexo.style.outline = "solid 1px red";
        var psexo = "- Sexo";
    }
    else {
        sexo.style.outline = null;
        psexo = "";
    }
    if (email.value == "") {
        email.style.outline = "solid 1px red";
        var pemail = "- Email";
    }
    else{
        email.style.outline = null;
        pemail = "";
    }
    if (celular.value == "") {
        celular.style.outline = "solid 1px red";
        var pcelular = "- Celular";
    }
    else{
        celular.style.outline = null;
        pcelular = "";
    }
    if (nivel.value == "") {
        nivel.style.outline = "solid 1px red";
        var pnivel = "- Nivel";
    } 
    else{
        nivel.style.outline = null;
        pnivel = "";
    }
    if (media.value.length == 0) {
        media.style.outline= "solid 0.1px red";
        var pmedia = "- Media";
    }
    else{
        media.style.outline = null;
        pmedia = "";
    }
    alert("Por favor preencha o(s) campo(s) abaixo:\n"+
            "\n"+
            pnome+"\n"+
            pcpf+"\n"+
            psexo+"\n"+
            pcpf+"\n"+
            pemail+"\n"+
            pcelular+"\n"+
            pnivel+"\n"+
            pmedia+"\n"); 
}
function EnviarFormulario() {
    //capturar os valores
    var contaCliente = new Object();

    contaCliente.nome = document.getElementById("Nome").value
    contaCliente.sobrenome = document.getElementById("Sobrenome").value;
    contaCliente.usuario = document.getElementById("Usuario").value;
    contaCliente.genero = document.getElementById("genero").value;
    contaCliente.email = document.getElementById("Email").value;
    contaCliente.senha = document.getElementById("Senha").value;
    contaCliente.telefone = document.getElementById("Telefone").value;
    contaCliente.nascimento = document.getElementById("Nascimento").value;

    //converter
    var json = JSON.stringify(contaCliente)
    console.log(json)
    console.log(contaCliente.valueOf())
}
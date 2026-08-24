// Seleciona o formulário de contato
const formulario = document.getElementById("formContato");

// Executa quando o usuário tenta enviar o formulário
formulario.addEventListener("submit", function(event) {

    // Impede o envio padrão do formulário
    event.preventDefault();

    // Obtém os valores preenchidos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();


    // Verifica se algum campo está vazio
    if (nome === "" || email === "" || mensagem === "") {

        alert("Por favor, preencha todos os campos.");

        return;
    }


    // Verifica o formato do e-mail
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email)) {

        alert("Por favor, informe um e-mail válido.");

        return;
    }


    // Simula o envio da mensagem
    alert("Mensagem enviada com sucesso!");


    // Limpa os campos
    formulario.reset();

});
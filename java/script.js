document.addEventListener("DOMContentLoaded", function () {
    // Data de nascimento
    var dataNascimento = new Date("1986-03-27");

    // Data atual
    var dataAtual = new Date();

    // Calcula a diferença em anos
    var idadeEmAnos = dataAtual.getFullYear() - dataNascimento.getFullYear();

    // Verifica se o aniversário já ocorreu este ano
    if (dataAtual.getMonth() < dataNascimento.getMonth() || (dataAtual.getMonth() === dataNascimento.getMonth() && dataAtual.getDate() < dataNascimento.getDate())) {
        idadeEmAnos--;
    }

    // Atualiza o elemento HTML com a idade calculada
    document.getElementById("idade").innerText = idadeEmAnos;
});

function playSound() {
    var audio = document.getElementById('botaoSom');
    audio.play();
}

const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    // passo 2 - dar um jeito de identificar o clique no elemento da aba
    aba.addEventListener("click", () => {
        if (aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)



    });
});

const selecionarAba = (aba) => {

    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")

    aba.classList.add("selecionado");

}

const mostrarInformacoesDaAba = (aba) => {
    const inforcaoSelecionada = document.querySelector(".informacao.selecionado");
    inforcaoSelecionada.classList.remove("selecionado");

    const idDoElementoDeInformacoesDaAba =
        `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}   
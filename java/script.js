function vermais(){
    let pontos = document.getElementById("pontos");
    let maisTexto = document.getElementById("mais");
    let btnVerMais = document.getElementById("btnVerMais");

    if (pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnVerMais.innerHTML="Ver Mais";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnVerMais.innerHTML="Ver Menos";
    }
}
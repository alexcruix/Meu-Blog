function vermais() {
    var pontos = document.getElementById('pontos');
    var mais = document.getElementById('mais');
    var btnVerMais = document.getElementById('btnVerMais');

    if (pontos.style.display === 'none') {
      pontos.style.display = 'inline';
      mais.style.display = 'none';
      btnVerMais.textContent = 'Ver mais';
    } else {
      pontos.style.display = 'none';
      mais.style.display = 'inline';
      btnVerMais.textContent = 'Ver menos';
    }
  }
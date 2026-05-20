function abrirChat() {
  document.getElementById('chatScreen').classList.add('ativo');
}

function abrirTela(id) {
  document.getElementById(id).classList.add('ativo');
}

function fecharTela(id) {
  document.getElementById(id).classList.remove('ativo');
}

function irInicio() {
  const telas = ['chatScreen', 'orientacoesScreen', 'notificacoesScreen', 'historicoScreen', 'perfilScreen', 'farmaciaScreen'];
  telas.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('ativo');
  });
}
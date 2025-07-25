//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
function adicionarAmigo() {
  let nomeAmigo = document.getElementById("amigo").value.trim();
  if (nomeAmigo == "") {
    alert("Informe o nome do amigo!");
    return;
  }

  if (
    listaAmigos
      .map((amigo) => amigo.toLowerCase())
      .includes(nomeAmigo.toLowerCase())
  ) {
    alert(
      "Este nome já foi adicionado. Por favor, insira um nome ou sobrenome diferente."
    );
    return;
  }

  listaAmigos.push(nomeAmigo);
  document.getElementById("amigo").value = ""; // Limpa o campo
  // Junta os nomes do array com uma quebra de linha
  document.getElementById("listaAmigos").innerHTML = listaAmigos.join("<br>");
}

function sortearAmigo() {
  // Valida se há amigos suficientes para o sorteio
  if (listaAmigos.length < 4) {
    alert("Adicione pelo menos 4 amigos para realizar o sorteio!");
    return;
  }

  // Antes de embaralhar, vamos guardar o nome do "usuário" do app.
  // Vamos assumir que o usuário é a primeira pessoa que foi adicionada na lista.
  const usuario = listaAmigos[0];

  // Embaralha a lista de amigos (Algoritmo Fisher-Yates)
  for (let i = listaAmigos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [listaAmigos[i], listaAmigos[j]] = [listaAmigos[j], listaAmigos[i]];
  }

  // Após embaralhar, encontramos a posição atual do nosso usuário.
  const indiceUsuario = listaAmigos.indexOf(usuario);

  // O amigo secreto do usuário é a pessoa seguinte na lista embaralhada.
  const amigoSecreto =
    indiceUsuario === listaAmigos.length - 1
      ? listaAmigos[0]
      : listaAmigos[indiceUsuario + 1];

  let sorteio = document.getElementById("resultado");
  // Exibe apenas o nome do amigo secreto, como se fosse para o usuário do app.
  sorteio.innerHTML = `Seu amigo secreto é: ${amigoSecreto}`;
}

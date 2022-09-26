const body = document.querySelector("body");
const login = document.getElementById("login");
const cadastro = document.getElementById("cadastro");
const header = document.querySelector("header");
const main = document.querySelector("main");
function criaModalLogin() {
  const div = document.createElement("div");
  const imagem = document.createElement("img");
  const titulo = document.createElement("h1");
  const inputNome = document.createElement("input");
  const inputsenha = document.createElement("input");
  const botaoLogin = document.createElement("button");
  const voltarImg = document.createElement("img");
  voltarImg.src = "./img/voltar.jpg";
  imagem.src = "./LOGO.png";
  imagem.className = "imagemLogo_modal";
  voltarImg.className = "img_voltar";
  voltarImg.id = "img_voltar1";
  div.className = "div_conteiner_modal";
  titulo.className = "titulo_modal";
  titulo.innerText = "Entre Com sua conta ";
  inputNome.className = "input_nome_modal";
  inputNome.placeholder = "Email";
  inputsenha.className = "input_senha_modal";
  inputsenha.placeholder = "Senha";
  botaoLogin.className = "botao_modal";

  div.append(imagem, titulo, inputNome, inputsenha, botaoLogin, voltarImg);
  body.append(div);

  voltarImg.addEventListener("click", () => {
    div.remove();
    header.style.filter = "none";
    main.style.filter = "none";
  });
}

function cirarModalCadastro() {
  const div = document.createElement("div");
  const titulo = document.createElement("h1");
  const inputNome = document.createElement("input");
  const inputEmail = document.createElement("input");
  const inputsenha = document.createElement("input");
  const RepetirSenha = document.createElement("input");
  const inputTelefone = document.createElement("input");
  const selectEstado = document.createElement("select");
  const botaoLogin = document.createElement("button");
  const voltarImg = document.createElement("img");
  const option = document.createElement("option");
  const optionDF = document.createElement("option");
  voltarImg.src = "./img/voltar.jpg";

  voltarImg.className = "img_voltar";
  voltarImg.id = "img_voltar1";
  div.className = "div_conteiner_modal";
  titulo.className = "titulo_modal";
  inputNome.className = "input_nome_modal";
  inputsenha.className = "input_senha_modal";
  botaoLogin.className = "botao_modal";
  option.innerText = "Seu Estado";
  optionDF.innerText = "Distrito Federal";

  selectEstado.append(option, optionDF);

  div.append(
    titulo,
    inputNome,
    inputsenha,
    botaoLogin,
    voltarImg,
    inputEmail,
    RepetirSenha,
    inputTelefone,
    selectEstado
  );
  body.append(div);

  voltarImg.addEventListener("click", () => {
    div.remove();
    header.style.filter = "none";
    main.style.filter = "none";
  });
}

login.addEventListener("click", () => {
  criaModalLogin();
  header.style.filter = "blur(7px)";
  main.style.filter = "blur(7px)";
});
cadastro.addEventListener("click", () => {
  cirarModalCadastro();
  header.style.filter = "blur(7px)";
  main.style.filter = "blur(7px)";
});

const body = document.querySelector("body");
const login = document.getElementById("login");
const cadastro = document.getElementById("cadastro");
const header = document.querySelector("header");
const main = document.querySelector("main");
const adotarDiv = document.querySelector(".div_tag");

function criaModalLogin() {
  const div = document.createElement("div");
  const imagem = document.createElement("img");
  const titulo = document.createElement("h1");
  const inputNome = document.createElement("input");
  const inputsenha = document.createElement("input");
  const botaoLogin = document.createElement("button");
  const botaoLoginCadastro = document.createElement("button");
  const voltarImg = document.createElement("img");
  botaoLoginCadastro.innerText = "Cadastre-se";
  botaoLoginCadastro.className = "botao_modal";
  voltarImg.src = "./img/voltar.jpg";
  imagem.src = "./img/LOGO.png";
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
  botaoLogin.innerText = "Entrar";
  div.append(
    imagem,
    titulo,
    inputNome,
    inputsenha,
    botaoLogin,
    botaoLoginCadastro,
    voltarImg
  );
  body.append(div);

  voltarImg.addEventListener("click", () => {
    div.remove();
    header.style.filter = "none";
    main.style.filter = "none";
  });

  botaoLoginCadastro.addEventListener("click", () => {
    cirarModalCadastro();
    div.remove();
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
  selectEstado.className = "selectEstado";
  titulo.innerText = "Preencha os campos abaixo para se cadastrar";
  voltarImg.src = "./img/voltar.jpg";
  inputTelefone.placeholder = "Telefone";
  inputTelefone.className = "inputTelefone";
  inputEmail.placeholder = "Seu email";
  inputEmail.classList = "inputEmail";
  inputNome.placeholder = "Seu Nome";
  inputsenha.placeholder = "Sua Senha";
  RepetirSenha.placeholder = "Repetir senha";
  RepetirSenha.className = "RepetirSenha";
  voltarImg.className = "img_voltar";
  voltarImg.id = "img_voltar1";
  div.className = "div_conteiner_modal";
  titulo.className = "titulo_modal";
  inputNome.className = "input_nome_modal";
  inputsenha.className = "input_senha_modal";
  botaoLogin.className = "botao_modal";
  botaoLogin.innerText = "Cadastrar";
  option.innerText = "Seu Estado";
  optionDF.innerText = "Distrito Federal";

  selectEstado.append(option, optionDF);

  div.append(
    titulo,
    inputNome,
    inputEmail,
    inputsenha,
    RepetirSenha,
    inputTelefone,
    selectEstado,
    botaoLogin,
    voltarImg
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
adotarDiv.addEventListener("click", () => {
  cirarModalCadastro();
});

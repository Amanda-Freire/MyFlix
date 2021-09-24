const ulAnimacoes = document.getElementById("ulAnimacoes");
const ulComedias = document.getElementById("ulComedias");
const ulSuspTerr = document.getElementById("ulSuspTerr");
const ulFiccao = document.getElementById("ulFiccao");

const sobreAnimacoes = [
  "Como Treinar o seu Dragão 3",
  "Kung Fu Panda 3",
  "Frozen: Uma aventura congelante",
  "Mulan",
  "A Origem dos Guardiões"
];

const linkAnimacoes = [
  "https://www.youtube.com/watch?v=VS4owMPt7sg",
  "https://www.youtube.com/watch?v=q75bGipJzIg",
  "https://www.youtube.com/watch?v=EBEbqLvrf7w",
  "https://www.youtube.com/watch?v=1Y826kBsgSM",
  "https://www.youtube.com/watch?v=Og9OCzoZFcM"
];

const imagensAnimacoes = [
  "https://br.web.img3.acsta.net/pictures/18/11/13/12/10/5661398.jpg",
  "https://br.web.img3.acsta.net/c_310_420/pictures/16/02/14/13/01/233818.jpg",
  "https://br.web.img2.acsta.net/pictures/210/461/21046189_20131002174340886.jpg",
  "https://br.web.img2.acsta.net/r_1280_720/img/28/50/285078da24bb2229c76a76bea302e447.jpg",
  "https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/91/31/06/20185803.jpg"
];

const sobreComedias = [
  "Pixels",
  "Casa Comigo?",
  "As Branquelas",
  "Scooby-doo: Monstros à Solta",
  "Meninas Malvadas"
];

const linkComedias = [
  "https://www.youtube.com/watch?v=0_Gg_YWnlU8",
  "https://www.youtube.com/watch?v=_E9_G6XpVHA",
  "https://www.youtube.com/watch?v=aeVkbNka9HM",
  "https://www.youtube.com/watch?v=TT76WvGRGEs",
  "https://www.youtube.com/watch?v=oDU84nmSDZY"
];

const imagensComedias = [
  "https://br.web.img3.acsta.net/pictures/14/12/16/19/46/414417.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/95/25/31/20392336.jpg",
  "https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/86/95/23/19876982.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/87/85/60/19962242.jpg",
  "https://br.web.img3.acsta.net/pictures/210/087/21008705_20130527194056821.jpg"
];

const sobreSuspTerr = [
  "Um Lugar Silencioso",
  "Fuja",
  "It A Coisa",
  "Hush: A Morte Ouve",
  "Invasão Zumbi"
];

const linkSuspTerr = [
  "https://www.youtube.com/watch?v=8W6iMmhVDgE",
  "https://www.youtube.com/watch?v=Y0-RFZDmycQ",
  "https://www.youtube.com/watch?v=dD264ZjfKlk",
  "https://www.youtube.com/watch?v=Q_P8WCbhC6s",
  "https://www.youtube.com/watch?v=Ekp-Cz41Pvw"
];

const imagensSuspTerr = [
  "https://br.web.img3.acsta.net/pictures/18/03/01/20/26/0577579.jpg",
  "https://br.web.img3.acsta.net/pictures/20/02/21/07/43/5751122.jpg",
  "https://br.web.img3.acsta.net/pictures/17/03/30/22/44/345288.jpg",
  "https://br.web.img3.acsta.net/pictures/16/03/14/15/43/333184.jpg",
  "https://br.web.img2.acsta.net/c_310_420/pictures/16/10/06/23/09/515438.jpg"
];

const sobreFiccao = [
  "Matrix",
  "Senhor dos Anéis: A Sociedade do Anel",
  "Star Wars III: A Vingança dos Sith",
  "De Volta para o Futuro II",
  "Jogador n°1"
];

const linkFiccao = [
  "https://www.youtube.com/watch?v=2KnZac176Hs",
  "https://www.youtube.com/watch?v=0i86oM1nHjM",
  "https://www.youtube.com/watch?v=5UnjrG_N8hU",
  "https://www.youtube.com/watch?v=MdENmefJRpw",
  "https://www.youtube.com/watch?v=yulwIjJ-C4Q"
];

const imagensFiccao = [
  "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/5/58/Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/92/91/43/20224859.jpg",
  "https://br.web.img3.acsta.net/pictures/18/02/27/19/16/0695165.jpg"
];

for (var i = 0; i < linkAnimacoes.length; i++) {
  ulAnimacoes.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${linkAnimacoes[i]}" target="_blank"><img src="${imagensAnimacoes[i]}" ></a><label>${sobreAnimacoes[i]}</label></li>`;
}

for (i = 0; i < linkComedias.length; i++) {
  ulComedias.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${linkComedias[i]}" target="_blank"><img src="${imagensComedias[i]}"></a><label>${sobreComedias[i]}</label></li>`;
}

for (i = 0; i < linkSuspTerr.length; i++) {
  ulSuspTerr.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${linkSuspTerr[i]}" target="_blank"><img src="${imagensSuspTerr[i]}"></a><label>${sobreSuspTerr[i]}</label></li>`;
}

for (i = 0; i < linkFiccao.length; i++) {
  ulFiccao.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${linkFiccao[i]}" target="_blank"><img src="${imagensFiccao[i]}"></a><label>${sobreFiccao[i]}</label></li>`;
}

function adicionar() {
  const nome = document.getElementById("nome");
  const url = document.getElementById("url");
  const imagem = document.getElementById("imagem");
  const categoria = document.getElementById("opcoesCategoria").value;

  if (nome.value != "" && url.value != "" && imagem.value != "") {
    const elemento = `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><button id="btnDeletar" onclick="deletar()"><img src="https://cdn.pixabay.com/photo/2017/11/10/05/24/trash-2935441_960_720.png"></button><a href="${url.value}" target="_blank"><img src="${imagem.value}" onerror="removerImagem()"></a><label>${nome.value}</label></li>`;
    switch (categoria) {
      case "ulAnimacoes":
        ulAnimacoes.innerHTML += elemento;
        break;
      case "ulComedias":
        ulComedias.innerHTML += elemento;
        break;
      case "ulSuspTerr":
        ulSuspTerr.innerHTML += elemento;
        break;
      case "ulFiccao":
        ulFiccao.innerHTML += elemento;
    }
  } else {
    alert("Preencha todos os campos!");
  }
  nome.value = "";
  url.value = "";
  imagem.value = "";
}

function deletar() {
  //Remove o canal/filme
  var target = event.currentTarget;
  var li = target.parentElement;
  var ul = li.parentElement;
  ul.removeChild(li);
}

function removerImagem() {
  //Remove o canal/filme se a imagem não for valida
  var ul = event.currentTarget.parentElement.parentElement.parentElement;
  ul.removeChild(event.currentTarget.parentElement.parentElement);
  alert("Coloque uma imagem válida!");
}

function mostrarTexto() {
  var target = event.currentTarget;
  target.lastChild.style.opacity = "1";
  if (target.firstChild.id == "btnDeletar") {
    target.firstChild.style.opacity = "1";
  }
}

function ocultarTexto() {
  var target = event.currentTarget;
  target.lastChild.style.opacity = "0";
  if (target.firstChild.id == "btnDeletar") {
    target.firstChild.style.opacity = "0";
  }
}
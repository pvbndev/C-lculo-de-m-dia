//botão de enviar
const botaoEnviar = document.querySelector("#btn-submit");

function mediaFunction() {

  const nome = document.querySelector("input#nome").value;
  const nota1 = document.querySelector("input#nota1").value;
  const nota2 = document.querySelector("input#nota2").value;

  //Faz substituição da , para .
  const nota1Replace = nota1.toString().replace(",", ".");
  const nota2Replace = nota2.toString().replace(",", ".");

  const tabela = document.querySelector("table#tabela");

  const media = (parseFloat(nota1Replace) + parseFloat(nota2Replace)) / 2;

  const dados = [];
  dados.push({
    nome: nome,
    nota1: nota1Replace,
    nota2: nota2Replace,
    media: media,
  });


 

  const novaLinha = tabela.insertRow(-1);

  const colunaNome = novaLinha.insertCell(0);
  const colunaNota1 = novaLinha.insertCell(1);
  const colunaNota2 = novaLinha.insertCell(2);
  const colunaMedia = novaLinha.insertCell(3);
  if (media >= 7.0) {
      const colunaAprovado = novaLinha.insertCell(4);
      colunaAprovado.innerHTML = "Aprovado";
    } else {
      const colunaReprovado = novaLinha.insertCell(4);
      colunaReprovado.innerHTML = "Reprovado";
    }


  colunaNome.innerHTML = nome;
  colunaNota1.innerHTML = nota1Replace;
  colunaNota2.innerHTML = nota2Replace;
  colunaMedia.innerHTML = media;

}

botaoEnviar.addEventListener("click", mediaFunction);

const btnScreenMode = document.querySelector('#btn-nightmode');

btnScreenMode.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');
    const className = document.body.className;
    if(className === 'light-theme'){
        btnScreenMode.style.backgroundImage = "url(img/moon.svg)";
    } else {
        btnScreenMode.style.backgroundImage = "url(img/sun.svg)";
    }
    
})
const atualiza = document.querySelector("#btnatualiza");
const salvar = document.querySelector("#btnsalvar");


async function lista_cliente() {
    //monstamos a configuração da requição
    //ao servidor http
    const opt = {
        method: 'POST',
        mode: 'cors',
        cache: 'default'
    }
    //A VARIAVEL response RECEBERÁ UMA PROMISSE
    //DE UMA TENTATIVA DE REQUISIÇÃO.
    const response = await send('listacliente.php', opt);
    //CONVERTEMOS O A RESPOSTA  PARA TEXTO
    //QUE TERÁ UMA ESTRUTURA HTML
    const html = await response.text();
    //PRINTAMOS NO CONSOLE O RESULTADO
    //console.log(html);
    document.getElementById('dados').innerHTML = html;
}

async function inserir() {
    const form = document.querySelector("#frmcliente");
    const formData = new FormData(form);
    const opt = {
        method: "POST",
        mode: 'cors',
        body: formData,
        cache: 'default'
    }
    const response = await send('cadastro.php', opt);
    const dados = await response.text();
    /*const respostaJson = await response.json();
    const alert = getElementById("alert");
    if (respostaJson['resposta'] == "erro") {
        alert.innerHTML = respostaJson['msg'];
    } else {
        alert.innerHTML = respostaJson['msg'];
    }
  */
}

async function obterMsg (){
    const opt = {
        method: "GET",
        mode: 'cors',
        cache: 'default',
        Headers : JSON
        
    }
    const response = await send('cadastro.php/', opt);
    const respostaJson = await response.json();
    const alert = getElementById("alert");
    if (respostaJson['resposta'] == "erro") {
        alert.innerHTML = respostaJson['msg'];
    } else {
        alert.innerHTML = respostaJson['msg'];
    }
};
//MAPEAMOS O EVENTO DE CARREGAMENTO DO DOCUMENTO
document.addEventListener("DOMContentLoaded", function () {
    lista_cliente();
});

atualiza.addEventListener('click', lista_cliente());

/*salvar.addEventListener('click', function () {
    obterMsg ()
   
    //const respostaJson = await dados.json();
    const alert = getElementById("alert");
    if (respostaJson['resposta'] == "erro") {
        alert.innerHTML = respostaJson['msg'];
    } else {
        alert.innerHTML = respostaJson['msg'];
    }
        
        
}); */

atualiza.addEventListener('click', lista_cliente());
function salva() {
    const nome = document.querySelector("#nome").Value;
    const sobrenome = document.querySelector("#sobrenome").Value;
    const cpf = document.querySelector("#cpf").Value;
    const alert = document.querySelector("#alertmsg");
    const alertsucesso = document.querySelector("#alertsucesso");
    if ((nome == undefined) || (sobrenome == undefined) || (cpf == undefined)){
        let html = '<div class="alert alert-danger" role="alert"> Erro em concluir o cadastro</div>'

        alert.innerHTML = html;
   } else {
        let html = '<div class="alert alert-success" role="alert"> Cadastro realizado com sucesso</div>'
        alert.innerHTML = html;
   }
       
};




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
    console.log(dados);
}
//MAPEAMOS O EVENTO DE CARREGAMENTO DO DOCUMENTO
document.addEventListener("DOMContentLoaded", function () {
    lista_cliente();
});

atualiza.addEventListener('click', event=>{
    location.reload(true);
});

/*salvar.addEventListener('click', function () {

    const nome = document.querySelector("#nome").value;
    const sobrenome = document.querySelector("#sobrenome").value;
    const alert = document.querySelector("#alert");
    
    if ((nome == null)||(sobrenome == null)) {
        let html = '<div class="alert alert-danger" role="alert"> Verifique os campos obrigatórios</div>'
        alert.innerHTML = html;
    } else {
        inserir();
        let html = '<div class="alert alert-success" role="alert">Cadastro realizado com sucesso</div>'
        alert.innerHTML = html;
    }
    
    
});*/

function salva() {
    const nome = document.querySelector("#nome").value;
    const sobrenome = document.querySelector("#sobrenome").value;
    const alert = document.querySelector("#alert");
    
    if ((nome == "")||(sobrenome == "")) {
        let html = '<div class="alert alert-danger" role="alert"> Verifique os campos obrigatórios</div>'
        alert.innerHTML = html;
    } else {
       inserir();
        
        let html = '<div class="alert alert-success" role="alert">Cadastro realizado com sucesso</div>'
        alert.innerHTML = html;

        setTimeout(function(){
            location.reload(true);
        },2000);
        
        
    }
    }

    
function remove() {
    const alert = document.querySelector("#alert");
    const nome = document.querySelector("#nome");
    const sobrenome = document.querySelector("#sobrenome");
    const cpf = document.querySelector("#cpf");
    nome.value = "";
    sobrenome.value= "";
    cpf.value = "";
    alert.innerHTML = "";
}
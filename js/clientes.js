const salvar = document.querySelector("#btnsalvar");
const atualiza = document.querySelector("#btnatualiza");
const nome = document.querySelector("#nome").value;


async function adicionar() {
    const form = document.querySelector("#frmcliente");
    const formdata = new FormData(form);
    var opt = {
        method: 'POST',
        body: formdata,
        mode: 'cors',
        cache: 'default'
    };
    const response = await send('cadastro.php', opt);
    const data = await response.json();
    console.log(data);
}
salvar.addEventListener('click', function () {

        adicionar();
       
  
});

atualiza.addEventListener('click', lista_cliente());


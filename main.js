//Máscara para o campo telefone
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    //Remove tudo o que não é dígito
    v=v.replace(/\D/g,""); 
    //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2");
     //Coloca hífen entre o quarto e o quinto dígitos 
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefoneinput').onkeyup = function(){
		mascara( this, mtel );
	}
}

//Modo Escuro

function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

/*Compara o Tamanho da janela com o tamanho pedido */
const tamanho = window.matchMedia('(max-width: 900px)');

function responsividade(e){
    if(e.matches)
    {
        console.log('Yeeeeeey')
        document.getElementById("portifolio").style.display = "block";
    }   
    else{
        console.log('AAAAh')
        document.getElementById("portifolio").style.display = "grid";
    }
}

function MudarConteudo(opcao){
    let opcao_portifolio = document.getElementById("op1");
    let opcao_habilidades = document.getElementById("op2");

    let Portifolio = document.getElementById("portifolio");
    let habilidades = document.getElementById("habilidades");

    if(opcao == 'opcao_portifolio')
    {
        console.log('opcao_portifolio')
        opcao_portifolio.classList.toggle("selecionado");
        opcao_habilidades.classList.toggle("selecionado", false);
        Portifolio.style.display = "grid";
        habilidades.style.display = "none";
    }
    else if (opcao == 'opcao_habilidades' )
    {
        console.log('opcao_habilidades')
        opcao_habilidades.classList.toggle("selecionado");
        opcao_portifolio.classList.toggle("selecionado", false);
        habilidades.style.display = "grid";
        Portifolio.style.display = "none";
    }

}

tamanho.addListener(responsividade);

//Máscara Telefone Professor

/*function mascara_telefone(){
    //limitador
    var tel = document.getElementById("telefoneinput").value;
        console.log(tel);
    tel = tel.slice(0,14); //limita a quantidade
        console.log(tel);
    document.getElementById("telefoneinput") = tel;
    
    //mascara

    var tel_formatado = document.getElementById("telefoneinput").value;

    if(tel_formatado[0] != "(")
    {
        if(tel_formatado[0] != undefined)
        {
            document.getElementById("telefoneinput").value = "(" + tel_formatado[0];
        }

    }

    if(tel_formatado[3] != ")")
    {
        if(tel_formatado[3] != undefined)
        {
            document.getElementById("telefoneinput").value = tel_formatado.slice(0,3) + "(" + tel_formatado[3];
        }
    }

    if(tel_formatado[9] != "-")
    {
        if(tel_formatado[9] != undefined)
        {
            document.getElementById("telefoneinput").value = tel_formatado.slice(0,9) + "-" + tel_formatado[9]
        }
    }
}*/
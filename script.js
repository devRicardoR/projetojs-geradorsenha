alert('HELLO dev, welcome to my WebSite, HAVE A NICE FUNNY!')


let sliderElement = document.getElementById('slider'); //pegando o elemento id slider do meu html
let buttonElement = document.getElementById('button'); // ... id button

let sizePassword = document.getElementById('valor'); // id valor para aparecer o tamanho de caracteres
let password = document.getElementById('password'); //id Senha

let containerPassword = document.getElementById('container-password'); // container de saida

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%¨&*()_+-=/][;~.,<>:?'"; //criando opções para senha
let novaSenha = "";  // nova senha comeca sem nada

sizePassword.innerHTML = sliderElement.value; //ligando o sizePassword a ao valor de sliderElement

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value; //o sizePassword recebe o valor que tem dentro do slider, quando mudar o slider ele aumenta ou diminui o numero de carecteres
}

function generatePassword(){

    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
         //i começa em 0, n = charset.lenght serve para pegar o tamanho/quantidade de caracteres que temos disponiveis, e o i vai continuar passando no for ate que ele seja menor que ovalor de slider que o usuario desejar
         pass += charset.charAt(Math.floor(Math.random() * n)); //gerando um numero aleatorio com o tamanho n de caracteres, cada item sera gerado aleatoriamente toda vez que passar no for
    }
    
    containerPassword.classList.remove("hide") //retirando a class hide para que apareca
    password.innerHTML = pass; 
    novaSenha = pass;   //passando para variavel nova senha o pass

}

function copyPassword(){   //criando uma função para que ao clicar em cima ele ja copie a senha sem precisar selecionar
    alert('Senha copiado com sucesso!')   //mostrando o alerta sempre que a senha for copiada
    navigator.clipboard.writeText(novaSenha);  //copiar oque tiver dentro da novaSenha
}


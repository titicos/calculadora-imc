
function limparCampos(){

    document.getElementById("peso").value="";
    document.getElementById("altura").value="";
    document.getElementById("resultado").innerHTML="";

}



function calcular(){
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value;

    if(peso=="" && altura==""){
        document.getElementById("resultado").innerHTML="preencha todos os campos!";
        
    }

         imc = peso/(altura*altura)


    if(imc<18.4){
        document.getElementById("resultado").innerHTML="O seu imc é "+imc.toFixed(2)+" e está fora do padrao.";
    }

    if(imc>=18.5 && imc <=24.9){

        document.getElementById("resultado").innerHTML="O seu imc é: " +imc.toFixed(2)+" e está com peso normal";
    
    }

    if(imc>=25 && imc <=29.9){

        document.getElementById("resultado").innerHTML="O seu imc é:"+imc.toFixed(2)+" e está com sobrepeso";
    
    }

    if(imc>=30 && imc <=34.9){

        document.getElementById("resultado").innerHTML="O seu imc é: "+imc.toFixed(2)+" e Obesidade grau I";
    
    }

    if(imc>=35 && imc <=39.9){

        document.getElementById("resultado").innerHTML="O seu imc é: "+imc.toFixed(2)+" e Obesidade grau II";
    
    }

    if(imc>=40){

        document.getElementById("resultado").innerHTML="O seu imc é: "+imc.toFixed(2)+" e Obesidade grau III/morbida.";
    
    }


    
    


    

  

}
function calcular(){
    //Mudando o display de none para block
    let mudarDisplay = document.getElementById('resultado')
    mudarDisplay.style.display="flex"

    //coletando os valores dos inputs
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value

    //iniciando variável de IMC e deixando com uma casa decimal
    let IMC = (peso/(altura*altura)).toFixed(1)  

    //iniciando variável que será exibida ao final da função
    let mensagemIMC

    //Calculando o IMC e atribuindo o resultado à variável
    if (document.getElementById('peso').value == "") {
        mensagemIMC = `ERRO. Nenhum campo pode estar vazio`
    } else if (document.getElementById('altura').value == ""){
        mensagemIMC = `ERRO. Nenhum campo pode estar vazio`
    } else if(IMC < 1){
        mensagemIMC = `ERRO. A altura deve ser em metros, não em centímetros. Use uma vírgula ou ponto`
    } else if (IMC < 18.5){
        mensagemIMC = `Seu IMC é de ${IMC} e está abaixo do peso`
    } else if (IMC <= 24.9){
        mensagemIMC = `Seu IMC é de ${IMC} e está no peso normal`
    } else if (IMC <= 29.9){
        mensagemIMC = `Seu IMC é de ${IMC} e está com sobrepeso`
    } else if (IMC <= 34.9){
        mensagemIMC = `Seu IMC é de ${IMC} e está com obesidade grau I`
    } else if (IMC <= 39.9){
        mensagemIMC = `Seu IMC é de ${IMC} e está com obesidade grau II`
    } else if (IMC >= 40){
        mensagemIMC = `Seu IMC é de ${IMC} e está com obesidade grau III`
    }

    document.getElementById('peso').value = ""
    document.getElementById('altura').value = ""

    // jogando o resultado do calculo na tela
    document.getElementById('resultado').innerHTML = mensagemIMC

}
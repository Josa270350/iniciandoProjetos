function saldacao() {
    let data = new Date();
    let hora = data.getHours();
    if (hora < 12) {
        return "Bom dia! Você está acessando meu portfólio pessoal, seja bem-vindo!";
}else if (hora < 18){
    return "Boa tarde! Você está acessando meu portfólio pessoal, seja bem-vindo!";
}else{
    return "Boa noite! Você está acessando meu portfólio pessoal, seja bem-vindo!";
}
}
document.getElementById("saldacao").innerHTML = saldacao();
function redirecionar(event){

//     $email pega todas as informações do input com o id:email
    $email = document.querySelector('#email');
//     $telefone pega todas as informações do input com o id:telefone
    $telefone = document.querySelector('#telefone');
//     $senha pega todas as informações do input com o id:senha
    $senha = document.querySelector('#senha');
    
//     teste para ver se ta pegando tudo msm;-;
    console.dir($email.value)
    
//     if que verifica se os inputs estão preenchidos, se estiverem ele envia a pessoa para outra pagina :)
    if($email.value !== "" && $telefone.value !== "" && $senha.value !== ""){
        
//         window.open() faz com que abra uma nova guia e oque estiver dentro dos () se aberto
        window.open('cadastrocao.html')
    };
}

<?php
include "Conection.php";

try {
    
    $nome      = $_POST["nome"];
    $sobrenome = $_POST["sobrenome"];
    $cpf       = $_POST["cpf"];
    if (empty( $nome ) || empty($sobrenome) || empty($cpf)){
       
       $retorna = ['resposta'=>"erro",'msg'=>"Erro em concluir o cadastro"];
    } else {    
   
    $sql = "INSERT INTO pessoa(nome, sobre_nome, cpf) ".
    " VALUES ('{$nome}','{$sobrenome}','{$cpf}');";
    $pdo->prepare($sql)->execute();
    
    $retorna = ['resposta'=>"sucesso",'msg'=>"Cadastro realizado com sucesso"];
    }
    
    
    echo json_encode($retorna);
    

} catch (PDOException $e) {
    var_dump($e->getMessage());
}


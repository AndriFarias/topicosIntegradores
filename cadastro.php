<?php
include "Conection.php";
try {
    $nome      = $_POST["nome"];
    $sobrenome = $_POST["sobrenome"];
    $cpf       = $_POST["cpf"];

    if (!empty( $nome ) || !empty($sobrenome)){
        $sql = "INSERT INTO pessoa(nome, sobre_nome, cpf) ".
        " VALUES ('{$nome}','{$sobrenome}','{$cpf}');";
    $pdo->prepare($sql)->execute();
    echo "Cadastro realizado com sucesso!";
    }else{
        echo "Erro em concluir o cadastro";
    }
    
} catch (PDOException $e) {
    var_dump($e->getMessage());
}

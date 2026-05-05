# Desafio Valendo 2 Pontos na Nota Final

## Pré-requisitos

## Realiza o login de um usuário com base no email e senha fornecidos.

- Vetor com as propriedades `id`, `nome`, `email`, `senha` e `expirado`: ok
- Ao menos um usuario com `expirado: true` (Hugo Moreira): ok

## Função `fazerLogin`

- Retorna `'Login realizado com sucesso'` quando email e senha estão corretos e não está expirado: ok
- Retorna `'Renove suas credenciais'` quando `expirado` for `true`: ok
- Retorna `'Credenciais incorretas'` quando o email não existe ou a senha está errada: ok

## 4 Testes

- Teste 1 - Sucesso (`maria@teste.com` + senha correta): ok
- Teste 2 - Credencial expirada (`hugo@teste.com` + senha correta, mas expirado): ok
- Teste 3 - Usuario não encontrado (`naoexiste@teste.com`): ok
- Teste 4 - Senha incorreta (`maria@teste.com` + senha errada): ok


//Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: 
// id, nome, email, senha e expirado (boleano, pode ser true ou false). Adicione ao menos um dos usuarios como expirado sendo true.
const usuarios = [
  {
    id: 1,
    nome: 'Hugo Moreira',
    email: 'hugo@teste.com',
    senha: 'senha123',
    expirado: true
  },
  {
    id: 2,
    nome: 'Maria Oliveira',
    email: 'maria@teste.com',
    senha: 'senha456',
    expirado: false
  },
  {
    id: 3,
    nome: 'Carlos Souza',
    email: 'carlos@teste.com',
    senha: 'senha789',
    expirado: false
  }
];
//Construa uma função de para realizar login. Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso
//  caso exista um usuário com email e senha iguais aos informados. A função deve dizer que as credenciais expiraram caso expirado for true.
//  A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou a senha esteja incorreta para aquele email.

export function fazerLogin(email, senha) {
  // Percorre todo o vetor
  for (const usuario of usuarios) {
    // Se encontrar o email correspondente
    if (usuario.email == email) {
      // Valida a senha
      if (usuario.senha != senha) {
        return 'Credenciais incorretas';
      }
      // Valida se está expirado
      if (usuario.expirado) {
        return 'Renove suas credenciais';
      }
      // Se tudo estiver certo, retorna sucesso
      return 'Login realizado com sucesso';
    }
  }
  // Se o laço terminar e não encontrar o email
  return 'Credenciais incorretas';
}


import assert from 'assert';
import { fazerLogin } from '../src/login.js';

describe('Testes de Login', function() {
  
  it('1) Realizar login com sucesso para credenciais válidas', function() {
    const resultado = fazerLogin('maria@teste.com', 'senha456');
    assert.strictEqual(resultado, 'Login realizado com sucesso');
  });

  it('2) Retornar mensagem de renovação para credencial expirada', function() {
    const resultado = fazerLogin('hugo@teste.com', 'senha123');
    assert.strictEqual(resultado, 'Renove suas credenciais');
  });

  it('3) Retornar erro de credenciais para email inexistente', function() {
    const resultado = fazerLogin('naoexiste@teste.com', 'senha123');
    assert.strictEqual(resultado, 'Credenciais incorretas');
  });

  it('4) Retornar erro de credenciais para senha incorreta', function() {
    const resultado = fazerLogin('maria@teste.com', 'senhaErrada');
    assert.strictEqual(resultado, 'Credenciais incorretas');
  });

});

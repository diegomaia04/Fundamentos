package banco;

public class Agencia {
	public double saldo = 2000;
	
	/**
	 * Método simples que executa um código
	 * Métodos ou funções são blocos de código reutilizáveis
	 */
	public void metodoSimples() {
		System.out.println("Banco do Brasil");
		System.out.println("Agência Tatuapé");
	}
	
	/**
	 * Método com passagem de valores (parâmetros)
	 * Obs: Valores obrigatóriamente são variáveis
	 */
	public void depositar(double valor) {
		saldo+= valor;
		System.out.println("Total: " + saldo);
	}
}

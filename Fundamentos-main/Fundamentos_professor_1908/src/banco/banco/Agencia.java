package banco;

public class Agencia {
	public double saldo = 2000;
	
	/**
	 * M�todo simples que executa um c�digo
	 * M�todos ou fun��es s�o blocos de c�digo reutiliz�veis
	 */
	public void metodoSimples() {
		System.out.println("Banco do Brasil");
		System.out.println("Ag�ncia Tatuap�");
	}
	
	/**
	 * M�todo com passagem de valores (par�metros)
	 * Obs: Valores obrigat�riamente s�o vari�veis
	 */
	public void depositar(double valor) {
		saldo+= valor;
		System.out.println("Total: " + saldo);
	}
	
}

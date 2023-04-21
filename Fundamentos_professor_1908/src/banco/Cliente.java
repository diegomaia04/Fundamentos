package banco;

public class Cliente {

	/**
	 * Método principal -> Ponto de partida
	 * Observação: Só pode existir um método principal
	 * @param args
	 */
	public static void main(String[] args) {
		System.out.println("==========================");
		//Acessar os métodos e variáveis de outra classe
		Agencia agencia = new Agencia();
		//método simples
		agencia.metodoSimples();
		//método com passagem de valor
		agencia.depositar(3000);
		
	}

}

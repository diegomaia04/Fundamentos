package poo;

public class celta {

	public static void main(String[] args) {
		// criar objeto a partir da classe para enxergar as variaveis e meteodos
		Carro celta = new Carro();
		// atribuir as variaveis ao obejto criado
		celta.ano = 2012;
		celta.cor = "Vermelho";
		System.out.println("Carro: Celta");
		//exbiri no console as informações
		System.out.println("Ano: " + celta.ano);
		System.out.println("Cor: " + celta.cor);
		celta.ligar();
		celta.acelerar();

	}

}
 
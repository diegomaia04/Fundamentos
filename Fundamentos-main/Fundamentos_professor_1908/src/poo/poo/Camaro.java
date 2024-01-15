package poo;

public class Camaro {

	public static void main(String[] args) {
		//// criar objeto a partir da classe para enxergar as variaveis e meteodos
		Carro Camaro  = new Carro();
		// atribuir as variaveis ao obejto criado
		Camaro.ano = 2012;
	Camaro.cor = "Amarelo";
		System.out.println("Carro: Camaro");
		//exbiri no console as informações
		System.out.println("Ano: " + Camaro.ano);
		System.out.println("Cor: " + Camaro.cor);
		Camaro.ligar();
		Camaro.acelerar();
		Camaro.desligar();


	}

}

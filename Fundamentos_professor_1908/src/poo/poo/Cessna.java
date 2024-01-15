package poo;

public class Cessna {

	public static void main(String[] args) {

		// criando um objeto cessna como modelo a classe aviao
		Avião cessna = new Avião();
		// � possivel ver as variaveis e meteodos vindo da clsse aviao e carro, gra�as
		// ao extends
		// pricnipla conceito de heran�a, reutiliza��o de codigo.
		cessna.cor = "branco";
		cessna.ano = 2015;
		cessna.envergadura = 11;
		System.out.println("Avi�o: cessna");
		System.out.println("Ano: " + cessna.ano);
		System.out.println("Cor:" + cessna.cor);
		System.out.println("Envergadura: " + cessna.envergadura + "m");
		cessna.ligar();
		cessna.acelerar();

	}

}

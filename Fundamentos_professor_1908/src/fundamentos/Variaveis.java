/**
 * Estudo das variáveis
 */
package fundamentos;

/**
 * @author Professor José de Assis
 *
 */
public class Variaveis {

	/**
	 * Método principal
	 * 
	 * @param args
	 */
	public static void main(String[] args) {
		// Criando(declarando) uma variável no Java
		String nome;
		nome = "José de Assis";
		System.out.println("Nome: " + nome);
		// É possível criar a variável e ao mesmo tempo atribuir um valor
		int idade = 54;
		System.out.println("Idade: " + idade);
		// É possível criar em uma única linha 2 ou mais variáveis do mesmo tipo
		double peso, altura;
		peso = 62;
		altura = 1.63;
		System.out.println("Peso: " + peso + " Kg");
		System.out.println("Altura: " + altura + " m");
		char sexo;
		sexo = 'M';
		System.out.println("Sexo: " + sexo);
		boolean vip;
		vip = true;
		System.out.println("Aluno VIP? " + vip);
	}

}

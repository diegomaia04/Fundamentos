/**
 * Sistema de verificação de eleitor
 * Fundamentos do Java
 * Exemplo de uso da estrutura else if
 */
package fundamentos;

/**
 * @author Professor José de Assis
 *
 */
public class Eleitor {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		int idade = 71;
		System.out.println("Idade: " + idade);
		if (idade < 16) {
			System.out.println("Proibido votar");
		} else if (idade == 16 || idade == 17 || idade > 70) {
			System.out.println("Voto facultativo");
		} else {
			System.out.println("Voto obrigatório");
		}

	}

}

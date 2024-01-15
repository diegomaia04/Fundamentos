/**
 * Fundamentos do Java
 * Números aleatórios
 */
package fundamentos;

import java.util.Random;
import java.util.Scanner;

/**
 * @author jose.afilho3
 *
 */
public class NumerosAleatorios {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		char novoJogo = 'n';
		// a linha de baixo cria um objeto para capturar dados
		Scanner teclado = new Scanner(System.in);
		do {
			// A linhas abaixo geram números inteiros aleatóriamente
			// O "zero" sempre é considerado
			// (6) gerar números entre 0 e 5 (0 1 2 3 4 5)
			Random random = new Random();
			int face = random.nextInt(6) + 1;
			System.out.println("========= JOGO DE DADO =========");
			System.out.println("Face do dado: " + face);			
			System.out.print("Deseja jogar novamente(s/n)? ");
			System.out.println("");
			novoJogo = teclado.next().charAt(0);
		} while (novoJogo == 's');
		teclado.close();
	}
}

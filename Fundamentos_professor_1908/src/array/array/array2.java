/*
 * Array simples
 * Exemplo2 - sorteio de uma carta
 */

package array;

import java.util.Random;

public class array2 {

	public static void main(String[] args) {
		String[] nipes = { "♥", "♦", "♣", "♠" };
		String[] faces = { "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" };
		// recuperar a carta Az de ouros
		System.out.println(faces[0] + nipes[1]);
		// recuperar a cara dama de copas
		System.out.println(faces[11] + nipes[0]);
		System.out.println("=================================================");
		System.out.println("carta sorteada");
		// criar um objeto de ome carta para gerar indice aleatorio
		Random carta = new Random();
		// criar uma variavel do tipo inteiro que recebe aleatorio
		// entre zero e o tamanho maximo do vetor faces
		int indiceFace = carta.nextInt(faces.length);
		// criar uma variavel do tipo inteiro que recebe aleatorio
		// entre zero e o tamanho maximo do vetor nipes
		int indiceNipe = carta.nextInt(nipes.length);
		System.out.println(faces[indiceFace] + nipes[indiceNipe]);
	}

}

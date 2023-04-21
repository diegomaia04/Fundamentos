/*
 * estudo do array
 * Exemplo 1 - Array simples(vetor)
 */

package array;

public class array1 {

	public static void main(String[] args) {
		// Array simples (vetor)
		//                    [0]           [1]         [2]         [3]
		String[] times = { "sao paulo", "corinthians", "Santos", "Palmeiras" };
		// recuperar o valor do indice
		System.out.println(times[1]);
		// a linha baixo informa do array (lenght())
		System.out.println("Tamanho do array: " + times.length);
        // Uso do laço for para percorrer o Array
		System.out.println("=============================================");
		System.out.println("times:");
		for (int i = 0; i < times.length; i++) {
			System.out.println(times[i]);
		}
	}
}

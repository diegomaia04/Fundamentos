/*
 * Fundamnetos do Java
 * Estudo do array - Array list (dinamico)
 */

package array;

import java.util.ArrayList;

public class array3 {

	public static void main(String[] args) {
		//a linha abaixo cria um vetor dinaminco
		//O ArrayList aceita o tipo String ou uma classe
		
		ArrayList<String> contatos = new ArrayList<>();
		contatos.add("Diego Maia Fernandes");
		contatos.add("95333-6542");
		contatos.add("maiadiego290@gmail.com");
		contatos.add("Bill Gates");
		contatos.add("98596-2472");
		contatos.add("Bil@gmail.com");

		// a linha abaixo exibe o conteudo do vetor
		System.out.println(contatos);
		
		//a linha abaixo exibe o tamanho do vetor
		System.out.println("Tamanho do array: " + contatos.size());
		
		//a linha abaixo recupera um valor do vetor
		System.out.println("Indice2: " + contatos.get(2));
		System.out.println("=======================================");
		System.out.println("Removendo um vaor do array (Indice 4");
		
		//a linha abaixo remove um valor da lista
		contatos.remove(4);
		System.out.println(contatos);
		System.out.println("Tamanho do array: " + contatos.size());
		//usando um laço for para percorrer o array
		System.out.println("Agenda de contatos");
		for (int i =0; i < contatos.size(); i++) {
			System.out.println(contatos.get(i));
			
		}

	}

}

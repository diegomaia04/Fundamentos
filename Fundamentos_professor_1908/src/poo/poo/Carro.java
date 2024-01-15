package poo;

import java.util.Random;

public class Carro {
	//declarar as variaveis que serao os atrbutos do carro	
	int ano;
	String cor;
	
	//construtor
	public Carro() {
		//gerar numeros aleatorios no Java
		Random gerator = new Random();
		int chassi = gerator.nextInt(1001);
		System.out.println(" Chassi: " +  chassi);
	}
	
	public Carro(int ano, String cor) {
		this.ano = ano;
		this.cor = cor;
	}
	
	// declararas ações que serão os metedos do obejto = classe que sera o carro
	 void ligar() {
		 System.out.println("Motor Ligado");
	 }
	 
	 void desligar() {
		 System.out.println("Motor Desliigado");
	 }
	 
	 void acelerar() {
		 System.out.println("Motor Andando");
	 }

}

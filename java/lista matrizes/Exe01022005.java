package LISTA_MATRIZES;

import javax.swing.JOptionPane;

/*
02 - Faça um algoritmo com uma matriz 5X7 de números inteiros.
Mostrar os números no final
*/

public class Exe01022005 {
    
    public static void main(String[] args) {
        
        int MatNum[][] = new int[5][7];
        
        for (int Lin = 0; Lin < MatNum.length; Lin++) {
            for (int Col = 0; Col < MatNum[0].length; Col++) {
                MatNum[Lin][Col] = Integer.parseInt(JOptionPane.showInputDialog("Informe o número: "));
            }
        }
        for (int Lin = 0; Lin < MatNum.length; Lin++) {
            for (int Col = 0; Col < MatNum[0].length; Col++) {
                System.out.print(MatNum[Lin][Col]+" ");
            }
            System.out.println("");
        }
    }
}
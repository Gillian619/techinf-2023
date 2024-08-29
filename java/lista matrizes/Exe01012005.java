package LISTA_MATRIZES;

import javax.swing.JOptionPane;

/*
01 - Faça uma algoritmo com uma matriz 4X4 de números reais.
Mostrar os números no final.
*/

public class Exe01012005 {
    
    public static void main(String[] args) {
        
        int MatNum[][] = new int[4][4];
        
        for (int Lin = 0; Lin < MatNum.length; Lin++){
            for (int Col = 0; Col < MatNum[0].length; Col++){
                MatNum[Lin][Col] = Integer.parseInt(JOptionPane.showInputDialog("Informe o número: "));
            }
        }
        for (int Lin = 0; Lin < MatNum.length; Lin++){
            for (int Col = 0; Col < MatNum[0].length; Col++){
                System.out.print(MatNum[Lin][Col]+" ");
            }
            System.out.println("");
        }
    }
}
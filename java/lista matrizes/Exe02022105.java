package LISTA_MATRIZES;

import java.util.Arrays;
import javax.swing.JOptionPane;

/*
02 - fazer um progrma com uma matriz 3x3 de números inteiros. Mostrar a matriz
*/

public class Exe02022105 {
    
    public static void main(String[] args) {
        
        int MatNum[][] = new int[3][3];
        
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
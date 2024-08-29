
package basico;

import javax.swing.JOptionPane;

public class exercicio1 {
    public static void main(String args[]){
        int num=0,numa=0,numd=0;
        //entrada de dados
        num = Integer.parseInt(JOptionPane.showInputDialog("insira o número: "));
        //METH
        numa = num - 1;
        numd =num +1;
        //saida
        JOptionPane.showMessageDialog(null,"O antecessor é: "+numa+" e o Sucessor é: "+numd);
    }
}

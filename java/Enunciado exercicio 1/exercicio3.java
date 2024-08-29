
package basico;

import javax.swing.JOptionPane;


public class exercicio3 {
    
    public static void main(String args[]){
        float num=0, num3=0;
        //entrada
        num = Float.parseFloat(JOptionPane.showInputDialog("insira o numero: "));
        //Meth
        num3= num / 3;
        //saida
        JOptionPane.showMessageDialog(null,"a terça parte de "+num+" é "+num3);
    }
}

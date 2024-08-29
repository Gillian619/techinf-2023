
package basico;

import javax.swing.JOptionPane;

public class exercicio2 {
    
    public static void main(String args[]){
        String nome, telefone, endereco;
        //entrada
        nome = JOptionPane.showInputDialog("informe o nome: ");
        telefone =JOptionPane.showInputDialog("informe o telefone: ");                                                                  
        endereco=JOptionPane.showInputDialog("informe o endereço: ");
        //saída
        JOptionPane.showMessageDialog(null,"nome: "+nome+"\ntelefone: "+telefone+"\nendereço: "+endereco);
    }
}

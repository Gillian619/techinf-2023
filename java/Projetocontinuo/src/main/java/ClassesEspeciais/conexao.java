package com.projetofinal;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class conexao {
    private static final String URL = "jdbc:mysql://localhost/aula10052023";
    private static final String USUARIO = "root";
    private static final String SENHA = "1234";
    private static final String CLASS_FOR_NAME = "com.mysql.cj.jdbc.Driver";
    private static Connection con;

    // Método para obter uma conexão com o banco de dados
    public static Connection getConexao() throws SQLException {
        try {
            if (con == null || con.isClosed()) {
                Class.forName(CLASS_FOR_NAME);
                con = DriverManager.getConnection(URL, USUARIO, SENHA);
            }
            return con;
        } catch (ClassNotFoundException e) {
            throw new SQLException("Driver MySQL não encontrado: " + e.getMessage());
        }
    }

    // Método para fechar a conexão com o banco de dados
    public static void closeConnection(Connection con) {
        if (con != null) {
            try {
                con.close();
                System.out.println("Conexão fechada com sucesso!");
            } catch (SQLException e) {
                System.out.println("Erro ao fechar a conexão: " + e.getMessage());
            }
        }
    }
}
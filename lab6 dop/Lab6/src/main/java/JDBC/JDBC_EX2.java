package JDBC;

import java.sql.SQLException;

public class JDBC_EX2 {
    public static void main(String[] args) {
        try {
            JDBC.ConnectorDB connectorDB = new JDBC.ConnectorDB("localhost:5432/citypopulation", "postgres", "1111");
            connectorDB.getConnection();

            // Вывести информацию обо всех жителях заданного города, разговаривающих на заданном языке
            connectorDB.getResidentsByCityAndLanguage("New York", "English");

            // Вывести информацию обо всех городах, в которых проживают жители выбранного типа
            connectorDB.getCitiesByResidentType("Belarusian");

            // Вывести информацию о городе с заданным количеством населения и всех типах жителей, в нем проживающих
            connectorDB.getCityByPopulation(500000);

            // Вывести информацию о самом древнем типе жителей
            connectorDB.getOldestResidentType();

            connectorDB.removeConnection();
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }
}

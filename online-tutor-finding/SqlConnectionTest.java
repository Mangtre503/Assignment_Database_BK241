import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class SqlConnectionTest {
    public static void main(String[] args) {

        String url = "jdbc:sqlserver://localhost:1433;databaseName=Ass2_CO2013;encrypt=true;trustServerCertificate=true";
        String user = "sa";
        String password = "123456789";

        try (Connection connection = DriverManager.getConnection(url, user, password)) {
            System.out.println("Kết nối thành công!");
        } catch (SQLException e) {
            System.err.println("Lỗi kết nối: " + e.getMessage());
        }
    }
}
// javac -cp ".;C:\New\sqljdbc_12.8\enu\jars\mssql-jdbc-12.8.1.jre8.jar" SqlConnectionTest.java
// java -cp ".;C:\New\sqljdbc_12.8\enu\jars\mssql-jdbc-12.8.1.jre8.jar" SqlConnectionTest 
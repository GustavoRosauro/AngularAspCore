using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace CoreAngular.Model
{
    public class UsuarioDao
    {
        const string connection = @"Data source=LAPTOP-VKBJ4J6T\SQLEXPRESS;Initial Catalog=APEXPORTAL;Integrated Security=true";
        public List<Usuario> BuscaUsurios()
        {
            List<Usuario> lista = new List<Usuario>();
            string sql = @"SELECT * FROM USUARIOS";
            using (var conn = new SqlConnection(connection))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sql,conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    Usuario u = new Usuario();
                    u.Id = Convert.ToInt32(reader["ID"]);
                    u.Nome = reader["NOME"].ToString();
                    u.Idade = Convert.ToInt32(reader["IDADE"]);
                    lista.Add(u);
                }
            }
                return lista;
        }
        public void InserirRegistro(string nome,int idade)
        {
            string query = String.Format(@"INSERT INTO USUARIOS (NOME,IDADE) VALUES ('{0}',{1})",nome,idade);
            using (var conn = new SqlConnection(connection))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(query,conn);
                cmd.ExecuteNonQuery();
            }
        }
    }
}

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
        public void DeletaRegistro(int id)
        {
            string query = string.Format(@"DELETE FROM USUARIOS WHERE ID = {0}", id);
            using (var conn = new SqlConnection(connection))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(query,conn);
                cmd.ExecuteNonQuery();
            }
        }
        public Usuario GetUserById(int id)
        {
            string query = string.Format(@"SELECT * FROM USUARIOS WHERE ID = {0}",id);
            using (var conn = new SqlConnection(connection))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(query,conn);
                SqlDataReader reader = cmd.ExecuteReader();
                var user = new Usuario();
                while (reader.Read())
                {
                    user = new Usuario()
                    {                        
                        Id = Convert.ToInt32(reader["ID"]),
                        Nome = reader["NOME"].ToString(),
                        Idade = Convert.ToInt32(reader["IDADE"])
                    };
                }
                return user;
            }
        }
        public void Alterar(Usuario usuario)
        {
            string query = string.Format(@"UPDATE USUARIOS
                                           SET NOME = '{0}', 
                                           IDADE = {1}
                                           WHERE ID = {2}",usuario.Nome,usuario.Idade,usuario.Id);
            using (var conn = new SqlConnection(connection))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(query,conn);
                cmd.ExecuteNonQuery();
            }
        }
    }
}

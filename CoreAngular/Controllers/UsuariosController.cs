using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreAngular.Model;
using Microsoft.AspNetCore.Mvc;

namespace CoreAngular.Controllers
{
    [Route("api/[controller]")]
    public class UsuariosController : Controller
    {
        UsuarioDao usuario = new UsuarioDao();
        [HttpGet("[action]")]
        public List<Usuario> RetornaUsuarios()
        {
            var lista = usuario.BuscaUsurios();
            return lista;
        }
        [HttpPost("[action]")]
        public void InseriRegistro([FromBody]Usuario user)
        {
            usuario.InserirRegistro(user.Nome, user.Idade);
        }
        [HttpDelete("[action]/{id}")]
        public void DeletaRegistro(int id)
        {
            usuario.DeletaRegistro(id);
        }
        [HttpGet("[action]/{id}")]
        public Usuario GetUserById(int id)
        {
            return usuario.GetUserById(id);
        }
    }
}
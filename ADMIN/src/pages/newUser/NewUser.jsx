import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Novo Usuário</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Nome de Usuario</label>
          <input type="text" placeholder="TinhoCarrara" />
        </div>
        <div className="newUserItem">
          <label>Nome Completo</label>
          <input type="text" placeholder="Augusto Carrara" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="tinhocarrara@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Senha</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Endereço</label>
          <input type="text" placeholder="Franca | SP" />
        </div>
        <div className="newUserItem">
          <label>Sexo</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Masculino</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Feminino</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Outro</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Ativo</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
        </div>
        <button className="newUserButton">Criar</button>
      </form>
    </div>
  );
}

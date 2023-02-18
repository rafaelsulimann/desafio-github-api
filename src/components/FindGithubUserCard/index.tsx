import { useState } from "react";
import { UserDTO } from "../../models/user";
import * as userService from "../../services/user-service";
import ErrorMessage from "../ErrorMessage";
import UserInfosCard from "../UserInfosCard";
import './styles.scss';

type FormData = {
  userName: string;
};

export default function FindGithubUserCard() {
  const [formData, setFormData] = useState<FormData>({
    userName: "",
  });

  const [user, setUser] = useState<UserDTO>();
  const [errorMessage, setErrorMessage] = useState<any>();

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleButtonSubmit(event: any) {
    event.preventDefault();
    userService.findUserByUsername(formData.userName)
    .then(response => {
        setUser({
            id: response.data.id,
            avatarUrl: response.data.avatar_url,
            htmlUrl: response.data.html_url,
            followers: response.data.followers,
            location: response.data.location,
            name: response.data.name
        });
    })
    .catch(() => {
        setUser(undefined);
        setErrorMessage("Erro ao buscar usuário");
    });
  }

  return (
    <>
      <div className="github-user-container find-github-user-container">
        <form className="find-github-user-card" onSubmit={handleButtonSubmit}>
          <div className="find-github-user-card-title">
            <h2>Encontre um perfil Github</h2>
          </div>
          <div className="find-github-user-card-input">
            <input
              name="userName"
              value={formData.userName}
              type="text"
              placeholder="Usuário Github"
              onChange={handleInputChange}
            />
          </div>
          <div className="find-github-user-card-submit-button">
            <button type="submit">Encontrar</button>
          </div>
        </form>
      </div>
      {
        user ? <UserInfosCard user={user}/> : <ErrorMessage errorMessage={errorMessage} />
      }
    </>
  );
}

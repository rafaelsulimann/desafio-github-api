import { UserDTO } from "../../models/user";
import './styles.scss';

type Props = {
    user : UserDTO;
}

export default function UserInfosCard({user} : Props) {
  return (
    <div className="github-user-container github-user-infos-card-container">
      <div className="github-user-infos-card">
        <div className="github-user-infos-card-avatar-img">
          <img src={user.avatarUrl} alt="User image" />
        </div>
        <div className="github-user-infos-card-atributes">
            <div className="github-user-infos-card-atributes-title">
                <h3>Informações</h3>
            </div>
            <div className="github-user-infos-card-atributes-url inputs">
                <label htmlFor="url">Perfil:</label>
                <a href={user.htmlUrl}>{user.htmlUrl}</a>
            </div>
            <div className="github-user-infos-card-atributes-followers inputs">
                <label htmlFor="followers">Seguidores:</label>
                <p>{user.followers}</p>
            </div>
            <div className="github-user-infos-card-atributes-location inputs">
                <label htmlFor="location">Localidade:</label>
                <p>{user.location}</p>
            </div>
            <div className="github-user-infos-card-atributes-name inputs">
                <label htmlFor="name">Nome:</label>
                <p>{user.name}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

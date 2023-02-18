import PrimaryButton from "../PrimaryButton";
import './styles.scss';

export default function ChallengeGithub() {
    return(
        <div className="container challenge-github-container">
          <div className="challenge-github-title">
            <h2>Desafio Github API</h2>
          </div>
          <div className="challenge-github-infos">
            <h3>DevSuperior - Escola de programação</h3>
          </div>
          <div className="challenge-github-start-button">
            <PrimaryButton buttonName="Começar" buttonLinkTo="/users" buttonClassName="challenge-github-start-button-link"/>
          </div>
        </div>
    );
}
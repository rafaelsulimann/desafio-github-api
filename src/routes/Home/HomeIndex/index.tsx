import ChallengeGithub from "../../../components/ChallengeGithub";
import './styles.scss';

export default function HomeIndex() {
  return (
    <main className="home-index">
      <section className="challenge-github">
        <ChallengeGithub />
      </section>
    </main>
  );
}

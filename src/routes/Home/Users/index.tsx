import { useState } from "react";
import FindGithubUserCard from "../../../components/FindGithubUserCard";
import "./styles.scss";

type FormData = {
  userName: string;
};

export default function Users() {
  const [formData, setFormData] = useState({
    userName: "",
  });

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({...formData, [name]: value})
  }

  return (
    <main className="users">
      <section className="find-github-user">
        <FindGithubUserCard />
      </section>
    </main>
  );
}

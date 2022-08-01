import { useState } from "react";
import axios from "axios";

const Signup = ({ handleToken }) => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsLetter,
        }
      );
      handleToken(response.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h1>S'inscrire</h1>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <input
        type="checkbox"
        checked={newsletter}
        onChange={() => {
          setNewsletter(!newsletter);
        }}
      />
      <input type="submit" value="s'inscrire" />
    </form>
  );
};
export default Signup;

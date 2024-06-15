import { useState } from "react";

export function RegisterForm() {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [displayName, setDisplayName] = useState("");

  //   const isDisabled = !username || !password || !displayName;

  // creating as object
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
    displayName: "",
  });

  return (
    <form>
      <div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={formFields.username}
            onChange={(e) => {
              setFormFields((currentState) => ({
                ...currentState,
                username: e.target.value,
              }));
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formFields.password}
            onChange={(e) => {
              setFormFields((currentState) => ({
                ...currentState,
                password: e.target.value,
              }));
            }}
          />
        </div>
        <div>
          <label htmlFor="displayName">Display name</label>
          <input
            type="text"
            id="displayName"
            value={formFields.displayName}
            onChange={(e) => {
              setFormFields((currentState) => ({
                ...currentState,
                displayName: e.target.value,
              }));
            }}
          />
        </div>
        <div>
          <span>Username: {formFields.username}</span>
        </div>
        <button disabled={isDisabled}>Sign Up</button>
      </div>
    </form>
  );
}

import { useEffect } from "react";
export function LoginForm() {
  useEffect(() => {
    const resizeEventHandler = (e) => {
      console.log("Window Resized");
    };

    const handleDocumentClick = (e) => {
      console.log("Document clicked");
    };
    window.addEventListener("resize", resizeEventHandler);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      console.log("Unmounting Login Form");
      console.log("Removing Event Listener");
      window.removeEventListener("resize", resizeEventHandler);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        const password = formData.get("password");
        fetch("localhost:3001/api/login", {
          body: {
            username,
            password,
          },
          method: "POST",
        });
        console.log(formData.get("username"));
      }}
    >
      <label htmlFor="username">Username</label>
      <br />
      <input
        id="username"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        name="username"
      />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input
        id="password"
        type="password"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        name="password"
      />
      <br />
      <button>Login</button>
    </form>
  );
}

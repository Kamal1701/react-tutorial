import { useContext } from "react";
import { UserContext } from "../utils/context/UserContext";

export function PostContentButtons() {
  // const UserContextData = useContext(UserContext);
  const { id, setUserData } = useContext(UserContext);
  // return <div>{UserContextData.id}</div>;
  return (
    <div>
      <div>
        <span>Post Content Buttons</span>
      </div>
      <div>{id}</div>

      <br />
      <button
        onClick={() => {
          setUserData((currentState) => ({
            ...currentState,
            name: "updated display name",
          }));
        }}
      >
        Click Me
      </button>
    </div>
  );
}

import { useContext } from "react";
import { PostContentButtons } from "./PostContentButtons";
import { UserContext } from "../utils/context/UserContext";

export function PostContent() {
  const UserContextData = useContext(UserContext);
  return (
    <div>
      <div>
        <span>Post Content</span>
      </div>
      <PostContentButtons />
      {UserContextData.email}
      {}
    </div>
  );
}

import { useContext } from "react";
import { PostContentButtons } from "./PostContentButtons";
import { UserContext } from "../utils/context/UserContext";

export function PostContent() {
  const userContextData = useContext(UserContext);
  return (
    <div>
      <div>
        <span>Post Content</span>
      </div>
      <PostContentButtons />
      {userContextData.email}
    </div>
  );
}

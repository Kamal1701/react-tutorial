import { useContext } from "react";
import { PostContent } from "./PostContent";
import { UserContext } from "../utils/context/UserContext";

export function PostContainer() {
  const UserContextData = useContext(UserContext);

  return (
    <div>
      <div>
        <span>Post Container</span>
      </div>
      <PostContent />
      <div>{UserContextData.displayname}</div>
    </div>
  );
}

import { useContext } from "react";
import { PostContent } from "./PostContent";
import { UserContext } from "../utils/context/UserContext";

export function PostContainer() {
  const userContextData = useContext(UserContext);
  console.log(userContextData.email);

  return (
    <div>
      <div>
        <span>Post Container</span>
      </div>

      <div>{userContextData.name}</div>
      <div>{userContextData.id}</div>
      <div>{userContextData.email}</div>
      <div>{userContextData.username}</div>
      <PostContent />
    </div>
  );
}

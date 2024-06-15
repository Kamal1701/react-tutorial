import PropTypes from "prop-types";
import { useState } from "react";

export function UserDetail({ user, setUsers }) {
  //Unpack the props in argument itself
  // console.log(user);
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  return (
    <div>
      <button
        onClick={() => {
          setIsEditing((currentState) => !currentState);
        }}
      >
        Edit
      </button>
      {isEditing && (
        <button
          onClick={() => {
            setUsers((currentUsersState) => {
              return currentUsersState.map((currentUser) =>
                // {
                //   if (currentUser.id === user.id) {
                //     return { ...currentUser, username, email };
                //   } else {
                //     return currentUser;
                //   }
                // }
                currentUser.id === user.id
                  ? { ...currentUser, username, email }
                  : currentUser
              );
            });
            setIsEditing(false);
          }}
        >
          Save
        </button>
      )}
      <button
        onClick={() => {
          setUsers((currentUsersState) =>
            currentUsersState.filter(
              (currentUser) => currentUser.id !== user.id
            )
          );
        }}
      >
        Delete
      </button>
      <div>
        <b>ID: </b>
        <span>{user.id}</span>
        <br />
        <b>Username: </b>
        {isEditing ? (
          <input
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        ) : (
          <span>{user.username}</span>
        )}

        <br />
        <b>Email: </b>
        {isEditing ? (
          <input
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          <span>{user.email}</span>
        )}
        <br />
      </div>
    </div>
  );
}

UserDetail.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  setUsers: PropTypes.func.isRequired,
};

// export function UserDetail(props) {
//     return (
//       <div>
//         <b>ID: </b>
//         <span>{props.user.id}</span>
//         <br />
//         <b>Username: </b>
//         <span>{props.user.username}</span>
//         <br />
//         <b>Email: </b>
//         <span>{props.user.email}</span>
//         <br />
//       </div>
//     );
//   }

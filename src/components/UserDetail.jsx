import PropTypes from "prop-types";

export function UserDetail({ user }) {
  //Unpack the props in argument itself
  return (
    <div>
      <b>ID: </b>
      <span>{user.id}</span>
      <br />
      <b>Username: </b>
      <span>{user.username}</span>
      <br />
      <b>Email: </b>
      <span>{user.email}</span>
      <br />
    </div>
  );
}

UserDetail.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
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

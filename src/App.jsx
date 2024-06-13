import { UserProfile } from "./components/UserProfile";
import { UserDetail } from "./components/UserDetail";
import { LoginForm } from "./components/LoginForm";

// function App() {

//     const callMe = () => {
//         console.log('hello');
//     }

//     return (
//         <div>
//             <h1>React Root Component</h1>
//             <UserProfile
//                 username="Kamal"
//                 age={41}
//                 isLoggedIn={false}
//                 favouritePersons={[
//                     {
//                         name: 'Siddharth',
//                         id: 'siddharth',
//                     },
//                     {
//                         name: 'selvi',
//                         id: 'selvi',
//                     }
//                 ]}
//                 callMe={callMe} />
//         </div>
//     );
// }

// process json array before rendering
// function App() {
//   const mockUsers = [
//     {
//       id: 1,
//       username: "Kamal",
//       email: "abc@xyz.com",
//     },
//     {
//       id: 2,
//       username: "siddhu",
//       email: "123@xyz.com",
//     },
//   ];

//   return (
//     <div>
//       {mockUsers.map((user) => {
//         return <UserDetail key={user.id} user={user} />;
//       })}
//     </div>
//   );
// }

// function App() {
//   const isAuthenticated = false;
//   // if (isAuthenticated) {
//   //   return (
//   //     <div>
//   //       <h1>Welcome, User!</h1>
//   //     </div>
//   //   );
//   // }
//   // return (
//   //   <div>
//   //     <h1>You are not logged in</h1>
//   //   </div>
//   // );

//   return isAuthenticated ? (
//     <div>
//       <h1>Welcome, User!</h1>
//     </div>
//   ) : (
//     <div>
//       <h1>You are not logged in </h1>
//     </div>
//   );
// }

// Conditional Rendering

// function App() {
//   //NOT_VERIFIED / VERIFIED / ACCOUNT_DISABLED
//   const USER_STATUS = "ACCOUNT_DISABLED";

//   // if (USER_STATUS === "NOT_VERIFIED") {
//   //   return (
//   //     <div>
//   //       <span>
//   //         You are not verified, please verify your Email or mobile number.
//   //       </span>
//   //     </div>
//   //   );
//   // } else if (USER_STATUS === "VERIFIED") {
//   //   return (
//   //     <div>
//   //       <span>
//   //         You are verified. Congrats! click here to access your Dashboard
//   //       </span>
//   //     </div>
//   //   );
//   // } else if (USER_STATUS === "ACCOUNT_DISABLED") {
//   //   return (
//   //     <div>
//   //       <span>
//   //         You are verified. Congrats! click here to access your Dashboard
//   //       </span>
//   //     </div>
//   //   );
//   // } else {
//   //   return (
//   //     <div>
//   //       <span>Please contact a system admin.</span>
//   //     </div>
//   //   );
//   // }

//   switch (USER_STATUS) {
//     case "NOT_VERIFIED":
//       return (
//         <div>
//           <span>
//             You are not verified, please verify your Email or mobile number.
//           </span>
//         </div>
//       );
//     case "VERIFIED":
//       return (
//         <div>
//           <span>
//             You are verified. Congrats! click here to access your Dashboard
//           </span>
//         </div>
//       );
//     case "ACCOUNT_DISABLED":
//       return (
//         <div>
//           <span>
//             You are verified. Congrats! click here to access your Dashboard
//           </span>
//         </div>
//       );
//     default:
//       return (
//         <div>
//           <span>Please contact a system admin.</span>
//         </div>
//       );
//   }
// }

//**************************** */
//Event handling

function App() {
  window.addEventListener("resize", (e) => {
    console.log(window.innerHeight, window.innerWidth);
  });

  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default App;

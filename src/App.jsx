// import { UserProfile } from "./components/UserProfile";
import { LoginForm } from "./components/LoginForm";
import { UserDetail } from "./components/UserDetail";
// import { LoginForm } from "./components/LoginForm";
import { useState, useEffect } from "react";
// import { RegisterForm } from "./components/RegisterForm";
import { UserContext } from "./utils/context/UserContext";
import { PostContainer } from "./components/PostContainer";
import { PostContentButtons } from "./components/PostContentButtons";

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

// function App() {
//   window.addEventListener("resize", (e) => {
//     console.log(window.innerHeight, window.innerWidth);
//   });

//   return (
//     <div>
//       <LoginForm />
//     </div>
//   );
// }

/******************************************/
// Learning about State
// function App() {
//   return (
//     <div>
//       <RegisterForm />
//     </div>
//   );
// }

/******************************************/
// Learning about State and Array
// function App() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [counter, setCounter] = useState(3);

//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       username: "Kamal",
//       email: "kk17kannan@yahoo.com",
//     },
//     {
//       id: 2,
//       username: "Siddhu",
//       email: "kk17siddhu@gmail.com",
//     },
//   ]);

//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           const newUser = { id: counter, username, email };
//           setCounter((currentCounter) => currentCounter + 1);
//           setUsers((currentUser) => [...currentUser, newUser]);
//           setUsername("");
//           setEmail("");
//         }}
//       >
//         <div>
//           <label htmlFor="username">Username</label>
//           <input
//             id="username"
//             name="username"
//             value={username}
//             onChange={(e) => {
//               setUsername(e.target.value);
//             }}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//         </div>
//         <button>Add user</button>
//       </form>
//       <br />
//       {users.map((user) => (
//         // console.log(user);
//         <UserDetail key={user.id} user={user} setUsers={setUsers} />
//       ))}
//     </div>
//   );
// }

// /***************************** */
// //Learing about Hooks

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [sync, setSync] = useState(false);

//   useEffect(() => {
//     console.log("Rendering....");
//     document.title = "React Tutorial " + counter;
//   }, [sync]);

//   useEffect(() => {
//     // fetch("https://jsonplaceholder.typicode.com/users", {
//     //   method: "GET",
//     // })
//     //   .then((response) => {
//     //     return response.json();
//     //   })
//     //   .then((data) => {
//     //     console.log(data);
//     //   })
//     //   .catch((err) => {
//     //     console.log(err);
//     //     console.log("Invalid API");
//     //   });

//     async function fetchUsers() {
//       const controller = new AbortController();
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users",
//           {
//             signal: controller.signal,
//           }
//         );
//         const json = await response.json();
//         console.log(json);
//       } catch (err) {
//         console.log(err);
//       }
//       fetchUsers();
//       return () => {
//         controller.abort();
//       };
//     }
//   });

//   return (
//     <div>
//       <div>You have clicked {counter} times</div>
//       <button onClick={() => setCounter((counter) => counter + 1)}>
//         Click Me
//       </button>
//       <button onClick={() => setSync((current) => !current)}>Sync</button>
//     </div>
//   );
// }

/***************************** */
//Learing about POST request

// function App() {
//   const [blogPostData, setBlogPostData] = useState({
//     title: "",
//     body: "",
//   });

//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           if (blogPostData.title && blogPostData.body) {
//             fetch("https://jsonplaceholder.typicode.com/posts", {
//               method: "POST",
//               body: JSON.stringify({
//                 userId: 1,
//                 title: blogPostData.title,
//                 body: blogPostData.body,
//               }),
//               headers: {
//                 "Content-type": "application/json; charset=UTF-8",
//               },
//             })
//               .then((response) => response.json())
//               .then((data) => {
//                 console.log("Success");
//                 console.log(data);
//               })
//               .catch((error) => {
//                 console.log(error);
//               });
//           }
//         }}
//       >
//         <div>
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={blogPostData.title}
//             onChange={(e) => {
//               setBlogPostData((currentBlogPostData) => ({
//                 ...currentBlogPostData,
//                 title: e.target.value,
//               }));
//             }}
//           />
//         </div>
//         <div>
//           <label htmlFor="body">Body</label>
//           <input
//             type="text"
//             id="body"
//             name="body"
//             value={blogPostData.body}
//             onChange={(e) => {
//               setBlogPostData((currentBlogPostData) => ({
//                 ...currentBlogPostData,
//                 body: e.target.value,
//               }));
//             }}
//           />
//         </div>
//         <button>Create Post</button>
//       </form>
//     </div>
//   );
// }

//Add Event Listener and custom hooks
// function App() {
//   const [toggle, setToggle] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setToggle((currentToggle) => !currentToggle);
//         }}
//       >
//         toggle
//       </button>
//       {toggle && <LoginForm />}
//     </div>
//   );
// }

/*Context API */
//Passing data from parent to child component skipping siblings
//accesing data from any components
function App() {
  const [userData, setUserData] = useState({
    id: 1,
    username: "kamal",
    email: "kk17kannan@yahoo.com",
    displayname: "Kamalakannan",
  });
  return (
    <>
      <UserContext.Provider value={{ ...userData, setUserData }}>
        <div>
          <PostContainer />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;

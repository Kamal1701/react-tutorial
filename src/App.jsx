import { UserProfile } from "./components/UserProfile";
import { UserDetail } from "./components/UserDetail";

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

function App() {
  const mockUsers = [
    {
      id: 1,
      username: "Kamal",
      email: "abc@xyz.com",
    },
    {
      id: 2,
      username: "siddhu",
      email: "123@xyz.com",
    },
  ];

  return (
    <div>
      {mockUsers.map((user) => {
        return <UserDetail key={user.id} user={user} />;
      })}
    </div>
  );
}

export default App;

import { UserProfile } from './components/UserProfile';

function App() {

    const callMe = () => {
        console.log('hello');
    }

    return (
        <div>
            <h1>React Root Component</h1>
            <UserProfile
                username="Kamal"
                age={41}
                isLoggedIn={false}
                favouritePersons={[
                    {
                        name: 'Siddharth',
                        id: 'siddharth',
                    },
                    {
                        name: 'selvi',
                        id: 'selvi',
                    }
                ]}
                callMe={callMe} />
        </div>
    );
}

export default App;
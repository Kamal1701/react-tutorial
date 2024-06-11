export function UserUsername(props) {

    return (
        <div>
            <b style={{
                fontSize: '32px'
            }}>Username: </b>
            <span>{props.username}</span>
        </div>
    );
}
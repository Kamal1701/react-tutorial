// import './styles.css';
import styles from './styles.module.css';

export function UserUsername(props) {

    // return (
    //     <div>
    //         <b style={{
    //             fontSize: '32px',
    //             color: 'red'
    //         }}>Username: </b>
    //         <span>{props.username}</span>
    //     </div>
    // );
    return (
        <div>
            <b className='username'>Username: </b>
            <br></br>
            <b className={styles.username}>Username: </b>
            <span>{props.username}</span>
        </div>
    );
}
import PropTypes from 'prop-types';

import { UserFavouriteFoods } from "./UserFavouriteFoods";
import { UserUsername } from "./UserUsername";

export function UserProfile(props) {

    return (
        <div id='user-profile'>
            <UserUsername username={props.username} />
            <b>Age: </b>
            <span>{props.age}</span>

            <UserFavouriteFoods />
        </div>
    );
}


UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    callMe: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool,
    favouritePersons: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    )
}

// export default UserProfile;

{/* <div>
<span>Email: </span>
<span>kk17kannan@yahoo.com</span>
</div> */}
import { createElement } from "react";
import styles from './users.module.scss';

export function UserFavouriteFoods() {
    return createElement(
        'section',
        null,
        <div>
            <span className={styles.foodsTitle}>Favorite Foods:</span>
            <br />
            <ul>
                <li>Channa</li>
                <li>Chappathi</li>
            </ul>
        </div>);
}

// Otherway to pass argument

// export function UserFavouriteFoods() {
//     return createElement(
//         'section',
//         null,

//         <span>Favorite Foods:</span>,
//         <br />,
//         <ul>
//             <li>Channa</li>
//             <li>Chappathi</li>
//         </ul>
//     );
// } 
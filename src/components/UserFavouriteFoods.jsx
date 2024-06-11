import { createElement } from "react";

export function UserFavouriteFoods() {
    return createElement(
        'div',
        null,
        <section>
            <span>Favorite Foods:</span>
            <br />
            <ul>
                <li>Channa</li>
                <li>Chappathi</li>
            </ul>
        </section>);
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
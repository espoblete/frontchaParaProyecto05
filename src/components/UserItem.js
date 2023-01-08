import React from "react";

function UserItem (props){
    return(
        <div>
           <div>
            <span>{props.name}</span>
            </div>
            <div>
            <span>{props.username}</span>
            </div>
            <div>
            <span>{props.active ? "yes" : "no"}</span>
            </div>
         </div>
    );
}
export {UserItem};
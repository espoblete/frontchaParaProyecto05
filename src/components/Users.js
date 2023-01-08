import React from "react";

function Users(props) {

return (
    <div className="list-users">
        {props.children}
    </div>
)
}

export {Users};
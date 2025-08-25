import React from "react";

export default function Saludar(props) {
    const { userInfo, saludarFn} = props;
    console.log(props);
    return(
        <div>
            <h2>Hola {props.userInfo.name} Tiene {userInfo.edad} su color favorito es el {props.userInfo.color}</h2>

        <button onClick={() => saludarFn(userInfo.nombre)}> Saludar</button>
        </div>
    );
}
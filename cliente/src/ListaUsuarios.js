///imporem la llibreria react del json
import React from 'react';
import UsuarioIndividual from './UsuarioIndividual';

function ListaUsuarios(){
    return(
        <div>
            <h2>lista de usuarios</h2>
            <UsuarioIndividual/>
        </div>
    )
}

export default ListaUsuarios;
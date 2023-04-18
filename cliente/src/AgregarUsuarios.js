///imporem la llibreria react del json
import React from 'react';

function AgregarUsuario(){

}

function AgregarUsuarios(){
    return(
        <div className='container'>
            <div className='row'>
            <h2>Agreagar usuarios</h2>
                <div className='col-sm-6 offset-3'>
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control"></input>
                </div>
                    <button onClick={AgregarUsuario} className="btn btn-success">Guardar Usuario</button>
                </div>
            </div>
    )
}

export default AgregarUsuarios;
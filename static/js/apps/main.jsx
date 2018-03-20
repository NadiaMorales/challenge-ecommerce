import React from 'react';
import ReactDOM from 'react-dom';
import Products from './../../../templates/Products';
import Carrito from './../../../templates/Carrito';

// const App = ({ message }) => <div>{ message }</div>;

ReactDOM.render(

    <div className="all">
        <div className="carro">
            <button>total</button>
            <div className="addcarro"></div>

        </div>
        <div className="productos">
            <h3>Products List</h3>
            <div className="catalogo">
                <Carrito />
            </div>
        </div>
    </div>,
    document.getElementById('app')
);

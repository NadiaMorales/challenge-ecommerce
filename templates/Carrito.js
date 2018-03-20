import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Products from './Products';
// import mock from './../data/mock.json';

class Carrito extends React.Component {
    constructor() {
        super();
        this.state = {
            car: [],
        };
    }

    componentWillMount() {
        fetch(`https://raw.githubusercontent.com/NadiaMorales/challenge-ecommerce/master/data/mock.json`) 
        .then(results  => {
            return results.json();
        }).then(items => {
            console.log(items.catalog);
            let car = items.catalog.map((pic) => {
                return(
                    <div className="img2" key={pic.catalog}>
                        <img src={pic.imageURL} />
                        <p>{pic.name}</p>
                        <p>${pic.price}</p>
                        <Products />
                    </div>
                )
            })
            this.setState({car: car});
        });
        
    }

    render() {
        return (
            <div className="img">
                {this.state.car}
            </div>
        )
    }
}
export default Carrito;
// http://localhost:1337/items
// ./../data/mock.json
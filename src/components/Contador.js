/**
 * Created by Guilherme Lima on 03/08/2016.
 */
import React from 'react';

export default class Contador extends React.Component {
        constructor(){
            super();
            this.state = {
                contador: 0,
            };
        }

        decerementar(){
            this.setState({
                contador: this.state.contador -1,
            });
        }

        incrementar(){
            this.setState({
                contador: this.state.contador +1
            });
        }

    render(){
        return(
            <div>
                <h1>{this.state.contador}</h1>
                <div>
                    <button onClick={this.incrementar.bind(this)}>+</button>
                    <button onClick={this.decerementar.bind(this)}>-</button>
                </div>

            </div>

        );

    }

}
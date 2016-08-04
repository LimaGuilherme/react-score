/**
 * Created by Guilherme Lima on 03/08/2016.
 */
import React from 'react';
import PlacarContainer from './PlacarContainer';

const dados = {
    partida: {
        estadio: "Allianz Parque",
        data:  "03/08/2016",
        horario: "23h",
    },
    casa: {
        nome: "Palmeiras"
    },
    visitante:{
        nome: "Santos"
    },
}

export default class App extends React.Component{
    render(){
        return <PlacarContainer {...dados} clima={'Ensolarado'} tempo={92}/>

    }

}
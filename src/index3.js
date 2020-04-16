import React from 'react';
import ReactDOM from 'react-dom';


function SecondComponent(){
    return <h1 align="center">My componwnr</h1>;
}

class FirstComponent extends React.Component
{
    constructor(props){
        super(props)
        this.state = {name: "NEOleg"}
    }

    
render(){
    return (<div><h1>Hello, world {this.state.name}</h1>
    <SecondComponent></SecondComponent>
    <ThirdComponent></ThirdComponent>
   
    </div>)
}}
class ThirdComponent extends React.Component
{
    constructor(props){
        super(props)
        this.state = {name: "ffZadanie"}
    }

    
render(){
    return (<div><h4>I zdelal {this.state.name}</h4>
    
   
    </div>)
}}
ReactDOM.render(<FirstComponent name="Oleg" />,document.getElementById('root'));


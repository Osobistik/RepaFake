import React from 'react';
import ReactDOM from 'react-dom';


class FirstComponent extends React.Component
{
    constructor(props){
        super(props)
        this.state = {name: "New component"}
    }

    
render(){
    return (<div><h1>{this.state.name}</h1>
    <SecondComponent></SecondComponent>
   
   
    </div>)
}}
function SecondComponent(){
    return <h1 align="center">fucntion</h1>;
}
ReactDOM.render(<FirstComponent/>,document.getElementById('root'));
import React from "react";

class Persona extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age,
        }
    }

    cumplirAños = (e,edad) => 
    {
        edad++;
        this.setState({age: edad})
    }

    render(){
        const {firstName,lastName,hairColor} = this.props;
        
        return(
                <div className="card">
                    <h2>{lastName}, {firstName}</h2>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {hairColor}</p>
                    <button className='btn btn-primary' onClick={(e)=>this.cumplirAños(e,this.state.age)}>Birthday Button for {firstName} {lastName}</button>
                </div>
        )
    }
}

export default Persona;
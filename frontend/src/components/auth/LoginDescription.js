import React, { Component } from "react";

class LoginDescription extends Component {
  
    render() {
        return (
            <div className="card  mt-4 text-dark" style = {{width:700}}>
                <div className="card-body">
                    <h4 className="card-title  text-primary">Defever Post {this.props.text1} </h4>
                    <p>     I want to  share some information and give you opportunity
                                                                to discuss regarding current situation of Covid-19 how can 
                                                                it be helpful for the humans. 
                                                                </p>
                    <ul className = "list-group list-group-flush">
                        <li className="list-group-item"> Title here</li>
                        <li className="list-group-item"> Image or Video here</li>
                        <li className="list-group-item"> Description Text here </li>
                        <li className="list-group-item"> Comments here </li>
                        <li className="list-group-item"> Likes here</li>
                       
                    </ul>
                </div>
            </div>
        );
    }
}

export default LoginDescription;
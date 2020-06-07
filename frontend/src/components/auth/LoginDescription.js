import React, { Component } from "react";

class LoginDescription extends Component {
  
    render() {
        return (
            <div className="card  mt-4 text-dark" style = {{width:700}}>
                <div className="card-body">
                    <h4 className="card-title  text-primary">Welcome to Defever </h4>
                    <h6>     Defever is a forum application which aims to give its users a space where to get reliable data and interact with other users in a comfortable environment. Main functionalities are: 
                                                                </h6>
                    <ul className = "list-group list-group-flush">
                        <li className="list-group-item"> Up-to-date numbers related with COVID-19 (Confirmed cases, number of people in intensive care, deaths). Cases per region in Sweden and also an overview of other countries.</li>
                        <li className="list-group-item"> Link to latest relevant news.</li>
                        <li className="list-group-item"> Forum page where to see and interact with the most relevant topics brought up by other users. </li>
                        <li className="list-group-item"> Chat page for a more direct and quick form of messaging.

</li>
                        
                       
                    </ul>
                </div>
            </div>
        );
    }
}

export default LoginDescription;
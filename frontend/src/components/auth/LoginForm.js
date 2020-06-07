import React, {useState} from 'react';

function LoginForm({onSubmit}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        
        
            <div className="d-flex flex-row mt-2">
                <div className="form-group mr-5">
                    <label className="mb-1">Email</label>
                    <input style={{ height:30}}
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </div>

                <div className="form-group mr-3">
                    <label className="mb-1">Password</label>
                    <input style={{ height:30}}
                        type="password" 
                        placeholder="Password" 
                        className="form-control" 
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </div>

                <div className="form-group d-flex flex-row" >
                
                    <button 
                        className="btn btn-primary 	ml-4" 
                        style={{height: 30, position:"relative",  top: 27}}
                        onClick={() => onSubmit({email, password})}>
                        Login
                        
                        
                    </button>
                    
                </div>
            </div>
       
        
    );
}

export default LoginForm;
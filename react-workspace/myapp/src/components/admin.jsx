import React,{ Component } from 'react'
import UserService from '../services/userService'
import { Link } from "react-router-dom";
  
class Admin extends Component{
    constructor(props){
        super(props)

        this.state={
            userid:'',
            password:''
    
        }
        this.changeUserIdHandler=this.changeUserIdHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.saveUser=this.saveUser.bind(this);
    }
    saveUser= (e) =>{
        e.preventDefault();
        let loginentity ={userid:this.state.userid,password:this.state.password};
        console.log('loginentity => '+JSON.stringify(loginentity));

        UserService.login(loginentity).then(res => {
           this.props.history.push(`/Home`);
        });
    }
    changeUserIdHandler =(event) =>{
        this.setState({userid:event.target.value});
    }
    changePasswordHandler =(event) =>{
        this.setState({password:event.target.value});
    }
    
render(){
    return(
        <div>
            <br></br>
            <div class="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                className = "center"
                width="100%"
                height="800px"
                alt="crop"
              /></div>
        <div>
            <div className = "container-md" style={{marginTop:"5%"}}>
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className = "text-center">Admin Login Page</h3>
                          <div className = "card-body">
                              <form>
                              <div className="form-group">
                                      <label>UserId</label>
                                      <input placeholder="UserId" name="userid" className="form-control" value={this.state.userid} onChange={this.changeUserIdHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Password</label>
                                      <input placeholder="Password"type ="Password"name="password" className="form-control" value={this.state.password} onChange={this.changePasswordHandler}/>
                                  </div>
                                  <button className="btn btn-success" onClick={this.saveUser}>Login</button>
                                  <div className="mt-2 text-center">
                                 <small>
                                     New user? <Link to="/register">SignUp</Link>
                                </small>
                                  </div>
                              </form>
                          </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
}
export default Admin;
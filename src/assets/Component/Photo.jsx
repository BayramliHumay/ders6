import React, {Component} from 'react'
import './style.css'
class Photo extends Component {
    state = {
        name:"" ,
         email:"",
         password:"" ,
         type:"password"
    
        };
   
    handleName = (e) => {
        this.setState({name:e.target.value});
    }
    
    handleEmail = (e) => {
        this.setState({email:e.target.value});
    }
    
    handlePassword = (e) => {
        this.setState({password:e.target.value});
    }
    handlerClick1  = (e) =>{
        this.setState({name:''})
    }
    handlerClick2  = (e) =>{
        this.setState({email: ''})
    }
    handlerClick3  = (e) =>{
        this.setState({password: ''})
    }
    handleCheckboxChange = () => this.setState({type:this.state.type ==="text"?"password":"text"})
    render () {
        console.log(this.state)
        return(
            <div className ="Photo">
            <label htmlFor = ""> Name: 
            <input type="text" value={this.state.name} id="name" name="name"onChange={this.handleName} /><button type='button' className='btn' onClick={this.handlerClick1}>X</button></label><br></br>
            <label htmlFor = "">Email:
            <input type="text" id="email" value={this.state.email} name="email"onChange={this.handleEmail} /><button type='button' className='btn' onClick={this.handlerClick2}>X</button></label><br></br>
            <label htmlFor ="password">Password:
            <input type={this.state.type} id="password" value={this.state.password} name="password"onChange={this.handlePassword} /><button type='button' className='btn' onClick={this.handlerClick3}>X</button></label><br></br>
            Show Passwords:
           <input type="checkbox" checked={this.state.isActive} onChange={this.handleCheckboxChange}/>
           
            </div>
            
        )
    }

}
export default Photo
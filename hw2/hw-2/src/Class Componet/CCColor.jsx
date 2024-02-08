import { Component } from "react";


export default class CCColor extends Component{

constructor(props){
    super(props);
    
    this.state={
     inputValue:"",
     bgColor: "white"
    };
}

btnChangeColor=(e)=>{
    console.log(e.target.innerHTML);
    this.setState({ bgColor:e.target.innerHTML });
}

    render(){
       
        
        return(
            <div id="d1" style={{backgroundColor:this.state.bgColor,border:"solid black 3px", width:500}}>
                <button onClick={(e)=>this.btnChangeColor(e)}>red</button><br></br>
                <button onClick={(e)=>this.btnChangeColor(e)}>yellow</button><br></br>
                <button onClick={(e)=>this.btnChangeColor(e)}>green</button><br></br>
                <button onClick={(e)=>this.btnChangeColor(e)}>blue</button><br></br>
                <button onClick={(e)=>this.btnChangeColor(e)}>white</button><br></br>
                <button onClick={(e)=>this.btnChangeColor(e)}>black</button><br></br>
                <button onClick={(e)=>this.btnChangeColor(e)}>purple</button><br></br>
                <button onClick={(e)=>this.btnChangeColor(e)}>orange</button><br></br>
            </div>

        );
        
    }
}
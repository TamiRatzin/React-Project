import  { Component } from "react";



export default class CCScore extends Component{

constructor(props){
super(props);



this.state={
    nameM:"**Please Enter name",
    fnamem:"**please enter family name",
    scoreM:'**please enter pysometry score',
};

}

changeName=(e)=>{
    if(e.target.value!=""){
        this.setState({nameM:""})
    }
   else{
    this.setState({nameM:"**Please Enter name"})
   }
}

changeScore=(e)=>{
    if(e.target.value!=""){
        
        this.setState({scoreM:""})
        if(e.target.value>555){
            alert("Your Score is enought to study at ruppin academy")
        }
    }
   else{
    this.setState({scoreM:"**Please Enter name"})
   }
}

changefName=(e)=>{
    if(e.target.value!=""){
        this.setState({fnamem:""})
    }
   else{
    this.setState({fnamem:"**Please Enter name"})
   }
}

render(){


return(

<div style ={{border:'solid blue 2px',width:400,color:"black"}}>
<h2>change score </h2>
{this.state.nameM}
<br></br>
<label>Name : </label>
<input type="text" onChange={this.changeName}></input><br></br>
{this.state.fnamem}<br></br>
<label>Family Name : </label>
 <input type="text" onChange={this.changefName}></input> <br></br>
 {this.state.scoreM}<br></br>
 <label>Pyscometry Score : </label>
 <input type="number" onChange={this.changeScore} min="200" max="800" placeholder="200"></input> 
</div>


);

}



}
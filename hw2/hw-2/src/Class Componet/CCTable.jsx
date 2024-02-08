import { Component } from "react";

export default class CCTable extends Component{

    constructor(props){
        super(props);

        this.state={
            width:'100%'

        }
    }
   
 
     handleClick = (e) => {
        switch (e.detail) {
          case 1:
            console.log("click");
            this.setState({width:"50%"})
            break;
          case 2:
            this.setState({width:"100%"})

            console.log("double click");
            break;
          
        }
      }; 

 
       



render(){
return(

<div style={{height:'300px' ,width:this.state.width,border:"solid black 2px"}} onClick={this.handleClick}>
      <table style={{ height:'30%',width: this.state.width }}>
        <thead>
          <tr>
            <th >Header 1</th>
            <th >Header 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
          </tr>
          <tr>
            <td>Row 3, Cell 1</td>
            <td>Row 3, Cell 2</td>
          </tr>
        </tbody>
      </table>
    </div>


);


}





}
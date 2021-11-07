/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-undef */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/no-unused-state */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from "react";

export default class Form extends React.Component {
    state = {
        title: "javaScript",
        text: "JavaScript is Awesome",
      library: "React",
        isAwesome: true
        
      
    }
    handleChange = (e) => {
      if(e.target.type === "text") {
        this.setState({
          title: e.target.value
        });
      } else if(e.target.type === "textarea") {
        this.setState({
          text: e.target.value
        });
      } else if(e.target.type === "select-one") {
        this.setState({
          library: e.target.value
        });
      }else if(e.target.type === "checkbox") {
          this.setState({
            isAwesome: e.target.checked
          });
        }
      else {
        console.log("error");
      }
     
  }
  submitHandler = (e) => {
    const { title, text, library,isAwesome } = this.state;
    e.preventDefault();
    console.log(title, text, library,isAwesome); 
    
  }
    render() {
        const { title, text, library,isAwesome } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" placeholder="Enter Title" value={title} onChange={ this.handleChange}/>
                </form><br/><br/>

                <textarea name="text" value={text} onChange={this.handleChange}></textarea><br /><br />
                <select name="" value={library} onChange={this.handleChange}>
                    <option value="">Select</option>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                  
            </select><br /><br />
          
            <input type="checkbox" checked={isAwesome} onChange={this.handleChange} /><br /><br />
            <input type="submit" value="" />
            </div>
        );
    }
}
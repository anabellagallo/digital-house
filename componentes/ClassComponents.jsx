import React, { Component } from 'react'

export default class ClassComponents extends Component {
    constructor(){
        super()
        this.state = {
            name :"Anabella",
            country: "Argentina"
        }
        this.changeName = this.changeName.bind(this)
    }
    // setState () modificador del estado
    changeName(){
     if(this.state.name === "Anabella")   this.setState ({name:"Ornella"})
     else this.setState ({name : "Anabella"})

    }
    
  
  render() {
    console.log(this)
    return (
      <div>
        <h2>{this.state.name}</h2>
        <button onClick={this.changeName}>Cambiar nombre</button>
      </div>
    )
  }
}


import React, { Component } from "react";
import data from "../data.js";

class Info extends Component {
  constructor() {
    super();

    this.state = {
      employees: data,
      position: 0
    };
  }

  increment = () => {
    if (this.state.position < this.state.employees.length - 1) {
      this.setState({ position: this.state.position + 1 });
    } else {
      this.setState({ position: 0 });
    }
  };

  decrement = () => {
      console.log(this.state.position)
      if(this.state.position === 0){
          this.setState({ position: this.state.employees.length - 1})
        }else{
            this.setState({ position: this.state.position - 1})
      }
  }

  render() {
    var inter = this.state.employees;
    var index = this.state.position;
    var currrentCard = inter[index];
    console.log(inter)
    let movies = inter[index].favoriteMovies.map(element => <li>{element}</li>);
    // let mappedData = this.state.data.map(val => val.id)
    return (
      <section className='section'>
        <main>
          <div>
            <h3 className='id'>{currrentCard.id}</h3>
            <h3 className='name'>
              {currrentCard.name.first} {currrentCard.name.last}
            </h3>
            <h3>
              From: {currrentCard.city}, {currrentCard.country}
            </h3>
            <h3>Job Title: {currrentCard.title}</h3>
            <h3>Employer: {currrentCard.employer}</h3>
            <h3>Favorite Movies:</h3>
            <ol>{movies}</ol>
          </div>
        </main>
        <div className="buttons">
          <a onClick={this.decrement}>
           <span> {"<"} Previous</span>
          </a>
          <a onClick={this.increment}> <span>Next ></span> </a>
        </div>
      </section>
    );
  }
}

export default Info;

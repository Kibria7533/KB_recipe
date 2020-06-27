import React, { Component } from 'react';

class Recipe extends Component {

    render() {
        return (
            <div className="card border border-primary m-2" style={{width: "18rem"}}>
            <img className="card-img-top" src={this.props.img} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Recipe:{this.props.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{Math.floor(this.props.calorie)}</h6> 
               <ul className="list-group list-group-flush">
            {this.props.ing.map(item => {
                    return (  <li key={item.text} className="list-group-item">{item.text}</li>)
                })}
            </ul>
            </div>
          
          </div>
        );
    }
}

export default Recipe;
import React, { Component } from 'react';
import axios from 'axios';
import Recipe from './Recipe';

 
class App extends Component {
  constructor(){
    super()
    this.state={
      hits:[],
      name:"banana"

    }
  }
  async componentDidMount(){
    const response= await axios.get(`https://api.edamam.com/search?q=${this.state.name}&app_id=039f7dfc&app_key=64f9406d2b515cb59d2a1432cd37532f`)
    .then(item=>{
   this.setState({hits:item.data.hits});
  })
  }
  nameset=e=>{
    this.setState({name:e.target.value});
  }
  sub=async (e)=>{
    e.preventDefault();
    const response= await axios.get(`https://api.edamam.com/search?q=${this.state.name}&app_id=039f7dfc&app_key=64f9406d2b515cb59d2a1432cd37532f`)
     .then(item=>{
    this.setState({hits:item.data.hits});
   })
   
  }
 
  render() {

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <header className="text-center display-3">KB_RECIPE_APP</header>
            <br></br>
            <br></br>
            <hr></hr>         
               <form className="form-inline" onSubmit={this.sub}>
              <div className="form-group mx-sm-3 mb-2">
                <label className="sr-only">Password</label>
                <input type="text" name="name"className="form-control required" onChange={this.nameset} placeholder="Enter ingredients like banana,mango..etc"></input>
              </div>
              <button type="submit" className="btn btn-primary mb-2">Search</button>
            </form>
            <br></br>
            <div className="d-flex  justify-content-center flex-wrap p-2 border-2 border-primary">
                {this.state.hits.map(item=>{
                   return(
                     <Recipe  key={item.recipe.label} title={item.recipe.label} calorie={item.recipe.calories} ing={item.recipe.ingredients} img={item.recipe.image}/>
                   )
            })}
            </div>

          
            

          </div>
        </div>
        

        <div className="bg-info text-center" style={{height:"190px",marginTop:"400px"}}>
          <h1>Please subscribe my channel</h1>
        </div>

      </div>
    );
  }
}


export default App;

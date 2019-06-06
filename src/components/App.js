import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Pig from "./Pig.js";
import 'semantic-ui-css/semantic.min.css';



// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace("./", '')] = r(item); });
//     return images;
// }

// const images = importAll(require.context('../hog-imgs', false, /\.(png|jpe?g|svg)$/));

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nameSort: false,
            weightSort: false,
            greasedSort: false,
            hogss:hogs
        }
    }

    sortName = () => {
        let sortedHogs=this.state.hogss.sort(function(a, b) {
            var keyA = (a.name),
                keyB = (b.name);
            // Compare the 2 dates
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });
        
        this.setState({
            hogss:sortedHogs
        })
    }

    render() {

        return (

            <div className="App">
                
                <Nav sortName={this.sortName}/>
                
          
                <div className="ui link cards">
                    
                    {
                        this.state.hogss.map(pig=>{
                            return <Pig pig={pig}/>
                        })
                    }

          
                </div>
          
            </div>
        )
    }
}

export default App;

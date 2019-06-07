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
            hogss:hogs,
            hiddenHogs:[]
        }
    }
        
    sortHogsName=()=>{
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
    
    hiddenPigs=(e)=>{
        console.log(e)
        this.state.hiddenHogs.push(e)
        }

    
    sortHogsWeight=()=>{
        let sortedHogs=this.state.hogss.sort(function(a, b) {
            var keyA = (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']),
                keyB = (b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']);
            // Compare the 2 dates
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });
        
        this.setState({
            hogss:sortedHogs
        })
    }   
    
    isGreased=()=>{
        let sortedHogs=this.state.hogss.filter(x=>x.greased)
        this.setState({
            hogss:sortedHogs
        })
    }
        
    sortName = (e) => {
        if(e=='Name'){
            this.sortHogsName()
        }else if(e==="Weight(ACS)"){
            this.sortHogsWeight()
        }else if(e==="Greased"){
            this.isGreased()
        }
        
    }

    showDead=()=>{
        console.log(this.state.hiddenHogs)
        
        this.state.hiddenHogs.map(x=>{
            console.log(x)
        })
    }
    
    render() {

        return (

            <div className="App">
                <button onClick={this.showDead}>SHOW DEAD</button>
                <Nav sortName={this.sortName}/>
                
                
                <div className="ui link cards">
                    
                    {
                        this.state.hogss.map(pig=>{
                            return <Pig pig={pig} hidePigs={this.hiddenPigs} noShow={this.state.hiddenHogs}/>
                        })
                    }

          
                </div>
          
            </div>
        )
    }
}

export default App;

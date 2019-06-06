import React from "react";
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import "semantic-ui-react";




class Pig extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            details: false
        }
    }

    

    showDetails = () => {
        this.setState({
            details: !this.state.details
        })
    }

    render() {
        let pigPic = require(`../hog-imgs/${this.props.pig.name.toLowerCase().replace(/ /g,"_")}.jpg`)
        return (
            <div>
                <Card>
                <button className="button">Hide</button>
                    <Image src={pigPic} />
                    <button className="button" onClick={this.showDetails}>Show Details</button>
                    <Card.Content>
                        <Card.Header>{this.props.pig.name}</Card.Header>
                         
                        <Card.Meta>
                            <span className='date'>highest medal achieved:{this.props.pig['highest medal achieved']}</span>
                    </Card.Meta>
                    </Card.Content>
                    
                    {this.state.details ===true
                    ? 
                    <div>
                    <Card.Description>
                        weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water:{this.props.pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
                    </Card.Description>
                    <Card.Content extra>
                        <a>
                            specialty:{this.props.pig.specialty}
                        </a>
                    </Card.Content>
                    </div>: null
            } 
            </Card> 
        </div>
        )
    }

}

export default Pig

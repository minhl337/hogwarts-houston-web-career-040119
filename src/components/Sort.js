import React from "react";
import { Checkbox, Select } from 'semantic-ui-react';

export default class Sort extends React.Component {
    constructor(props) {
        super(props)
    }

    handleName=(e)=>{
        this.props.sortName(e.target.innerText)
    }

    render() {
        return (
            <div>
                <Select placeholder='Sort By' onChange={(e)=>this.handleName(e)} options={[
                    { key: 'Name', text: 'Name', value: 'Name' },
                    { key: 'Weight', text: 'Weight(ACS)', value: 'Weight' },
                    { key: 'Greased', text: 'Greased', value: 'Greased' },
                ]} />
            </div>
        )
    }
}

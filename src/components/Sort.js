import React from "react";
import { Checkbox, Select } from 'semantic-ui-react';

export default class Sort extends React.Component {
    constructor(props) {
        super(props)
    }

    handleName=()=>{
        this.props.sortName()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Select placeholder='Sort By' options={[
                    { key: 'Name', text: 'Name', value: 'Name' },
                    { key: 'Weight', text: 'Weight', value: 'Weight' },
                    { key: 'Greased', text: 'Greased', value: 'Greased' },
                ]} />
            </div>
        )
    }
}

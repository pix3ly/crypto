import React from 'react'

export default class Currency extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.value}</h2>
                {this.props.name}
            </div>
        )
    }
}

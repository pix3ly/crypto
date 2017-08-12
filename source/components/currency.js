import React from 'react'

export default class Currency extends React.Component {
    render() {
        return (
            <div>
                {typeof this.props.value === 'undefined' ? (
                    <h2>N/A</h2>
                ) : (
                    <h2>{this.props.value}</h2>
                )}
                {this.props.name}
            </div>
        )
    }
}

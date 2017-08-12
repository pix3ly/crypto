import React from 'react'

import Currency from './currency'

export default class App extends React.Component {
    constructor() {
        super()

        this.state = {
            base: {
                currency: 'USD',
                value: 1
            }
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h1>{this.state.base.value}</h1>
                    {this.state.base.currency}
                </div>
                <Currency name="Test" value="300" />
            </div>
        )
    }
}

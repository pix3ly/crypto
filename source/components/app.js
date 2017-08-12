import React from 'react'

import Currency from './currency'

export default class App extends React.Component {
    constructor() {
        super()

        this.state = {
            base: {
                currency: 'ZUSD',
                value: 1
            },
            quotes: ['XXBT', 'XETH']
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h1>{this.state.base.value}</h1>
                    {this.state.base.currency}
                </div>
                {this.state.quotes.map((quote) => {
                    return (
                        <Currency name={quote} value="N/A" />
                    )
                })}
            </div>
        )
    }
}

import React from 'react'
import axios from 'axios'

import Currency from './currency'

export default class App extends React.Component {
    constructor() {
        super()

        this.state = {
            base: {
                name: 'USD',
                value: 1
            },
            quotes: [
                {
                    name: 'BTC'
                },
                {
                    name: 'ETH'
                }
                ,
                {
                    name: 'BCH'
                }
            ]
        }

        this.fetchQuotes()

        setInterval(this.fetchQuotes.bind(this), 1000 * 60)
    }

    fetchQuotes() {
        var copiedQuotes = this.state.quotes

        copiedQuotes.forEach((quote) => {
            axios.get('https://api.bitfinex.com/v2/tickers?symbols=t' + quote.name + this.state.base.name).then((response) => {
                quote.value = Number(response.data[0][7]).toFixed(2)

                this.setState({ ...this.state, quotes: copiedQuotes })
            })
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>{this.state.base.value}</h1>
                    {this.state.base.name}
                </div>
                {this.state.quotes.map((quote) => {
                    return (
                        <Currency name={quote.name} value={quote.value} />
                    )
                })}
            </div>
        )
    }
}

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
                quote.value = response.data[0][7]

                this.setState({ ...this.state, quotes: copiedQuotes })
            })
        })
    }

    updateBaseValue(e) {
        this.setState({ ...this.state, base: { ...this.state.base, value: e.target.value } })
    }

    render() {
        return (
            <div>
                <div className="align-center">
                    <p className="label">{this.state.base.name}</p>
                    <input type="text" value={this.state.base.value} onChange={this.updateBaseValue.bind(this)} />
                </div>
                <div>
                    {this.state.quotes.map((quote) => {
                        return (
                            <Currency name={quote.name} value={Number(quote.value * this.state.base.value).toFixed(2)} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

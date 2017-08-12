import React from 'react'
import axios from 'axios'

import Currency from './currency'

export default class App extends React.Component {
    constructor() {
        super()

        this.state = {
            base: {
                name: 'ZUSD',
                value: 1
            },
            quotes: [
                {
                    name: 'XXBT'
                },
                {
                    name: 'XETH'
                }
            ]
        }

        this.fetchQuotes()

        setInterval(this.fetchQuotes.bind(this), 1000 * 60)
    }

    fetchQuotes() {
        var copiedQuotes = this.state.quotes

        copiedQuotes.forEach((quote) => {
            axios.get('https://api.kraken.com/0/public/Ticker?pair=' + quote.name + this.state.base.name).then((response) => {
                quote.value = Number(response.data.result[quote.name + this.state.base.name].c[0]).toFixed(2)

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

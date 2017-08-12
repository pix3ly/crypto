import React from 'react'

import Currency from './currency'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Currency name="Test" value="300" />
            </div>
        )
    }
}

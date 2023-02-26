// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  withdrawal = id => {
    const {amount} = this.state
    const {denominationsList} = this.props
    const deduct = denominationsList.filter(each => each.id === id)
    console.log(deduct)
    this.setState(prevState => ({amount: prevState.amount - deduct[0].value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="card">
          <div className="name-container">
            <p className="para">S</p>
            <h1 className="heading">Sara Williams</h1>
          </div>
          <div className="money-container">
            <p className="para1">Your Balance</p>
            <div className="amount">
              <p className="heading">{amount}</p>
              <p className="para1">In Rupees</p>
            </div>
          </div>
          <p className="heading">Withdrawal</p>
          <p className="para1">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination">
            {denominationsList.map(each => (
              <DenominationItem
                denominationItem={each}
                key={each.id}
                withdrawal={this.withdrawal}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

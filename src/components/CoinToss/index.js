// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    randomImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onChangeNumber = () => {
    const number = Math.floor(Math.random() * 2)
    console.log(number)
    if (number === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        tails: prevState.tails,
        randomImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else if (number === 1) {
      this.setState(prevState => ({
        heads: prevState.heads,
        tails: prevState.tails + 1,
        randomImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {heads, tails, randomImage} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img className="toss-image" src={randomImage} alt="toss result" />
          <button
            type="button"
            className="toss-button"
            onClick={this.onChangeNumber}
          >
            Toss Coin
          </button>
          <div className="toss-details">
            <p className="toss-description">Total: {heads + tails}</p>
            <p className="toss-description">Heads: {heads}</p>
            <p className="toss-description">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

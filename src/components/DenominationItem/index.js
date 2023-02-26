// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationItem, withdrawal} = props
  const {id, value} = denominationItem
  const onClicked = () => {
    withdrawal(id)
  }

  return (
    <li>
      <button
        type="button"
        className="button"
        onClick={onClicked}
        value={`${value}`}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

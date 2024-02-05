import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSuggestionInput} = props
  const {suggestion} = suggestionDetails

  const onClickButton = () => {
    updateSuggestionInput(suggestion)
  }

  return (
    <li>
      <p className=" suggestion-item">{suggestion}</p>
      <button type="button" className="arrow-button" onClick={onClickButton}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />{' '}
      </button>{' '}
    </li>
  )
}

export default SuggestionItem

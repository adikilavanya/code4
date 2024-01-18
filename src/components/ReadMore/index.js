import {useState} from 'react'
import {Heading} from './styledComponents'

const ReadMore = ({text, maxLength}) => {
  const [isReadMore, setIsReadMore] = useState(true)

  const toggleReadMore = () => {
    setIsReadMore(isReadMore)
  }

  const displayText = isReadMore ? text.slice(0, maxLength) : text

  return (
    <div>
      <Heading>React Hooks</Heading>
      <p>Hooks are a new addition to React</p>
      <img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <p>{displayText}</p>
      {text.length > maxLength && (
        <button onClick={toggleReadMore}>
          {isReadMore ? 'Read More' : 'Read Less'}
        </button>
      )}
    </div>
  )
}

export default ReadMore

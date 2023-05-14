import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {cardDetails} = props
  console.log(cardDetails)
  const {courseTitle, description, duration, tagsList} = cardDetails
  return (
    <div className="CourseTimelineCard">
      <div className="heading-container">
        <h1 className="card-heading">{courseTitle}</h1>
        <div className="icon-contianer">
          <AiFillClockCircle className="icon" />
          <p className="duration-text">{duration}</p>
        </div>
      </div>

      <p className="card-description">{description}</p>
      <ul className="tags-list-container">
        {tagsList.map(each => (
          <li className="tag-item" key={each.id}>
            {each.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard

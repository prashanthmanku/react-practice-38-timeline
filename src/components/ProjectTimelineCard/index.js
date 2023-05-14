import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {cardDetails} = props
  console.log(cardDetails)
  const {
    description,
    duration,
    imageUrl,
    projectTitle,
    projectUrl,
  } = cardDetails

  return (
    <div className="ProjectTimelineCard">
      <img src={imageUrl} alt="project" className="card-image" />
      <div className="heading-container">
        <h1 className="card-heading">{projectTitle}</h1>
        <div className="icon-contianer">
          <AiFillCalendar className="icon" />
          <p className="duration-text">{duration}</p>
        </div>
      </div>
      <p className="card-description">{description}</p>
      <a
        href={projectUrl}
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard

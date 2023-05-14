import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="app-container">
      <div className="app-width-container">
        <h1 className="main-heading-1">
          MY JOURNEY OF
          <br />
          <span className="main-heading-2">CCBP 4.0</span>
        </h1>

        <div style={{width: '100%', height: '85vh'}}>
          <Chrono
            mode="VERTICAL_ALTERNATING"
            items={timelineItemsList}
            timelinePointDimension={80}
            theme={{
              primary: ' #0967d2',
              secondary: '#ffffff',

              titleColor: '  #0967d2',
              titleColorActive: ': #0967d2',
            }}
          >
            {timelineItemsList.map(each => {
              if (each.categoryId === 'COURSE') {
                return <CourseTimelineCard cardDetails={each} key={each.id} />
              }
              return <ProjectTimelineCard cardDetails={each} key={each.id} />
            })}
          </Chrono>
        </div>
      </div>
    </div>
  )
}
export default TimelineView

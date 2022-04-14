import {WeeklyContainer} from './weeklyElement'

export const LearnMore = ({header, link, path}) => {
  return (
    <WeeklyContainer className='left'>
        <p className="title left">{header}</p>
        <button className="btnn left">
          <a href={link}>{path}</a>
        </button>
    </WeeklyContainer>
  )
}

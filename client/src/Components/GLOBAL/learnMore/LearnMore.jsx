import Wrapper from '../../../assets/wrappers/Weekly'

export const LearnMore = ({header, link, path}) => {
  return (
    <Wrapper>
        <p className="title left">{header}</p>
        <button className="btnn left">
          <a href={link}>{path}</a>
        </button>
    </Wrapper>
  )
}

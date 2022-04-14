import {SabbathSchoolContainer, SabbathSchoolMessage, LessonLink} from './sabbathSchoolElement'

export const SabbathSchool = () => {
  return (
      <section className="section">
           <h1 className="title primary">sabbath school</h1>
           <SabbathSchoolContainer>
               <SabbathSchoolMessage>
                   <p className="subtitle">
                       Awake in yourself the true desire to
                        love study his word.
                       join use this sabbath as we
                        dive into the study of Gods word
                   </p>
               </SabbathSchoolMessage>
               <LessonLink>
               <iframe title="school" height="400" width="800" src="https://www.sabbath.school/ThisQuarterLessonAndBook?loc=SDA" frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no"></iframe>
            
               </LessonLink>
           </SabbathSchoolContainer>
      </section>
   
  )
}

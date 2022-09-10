import { useState } from 'react'
import Wrapper from '../../../assets/wrappers/Ministry'
import { Mini } from './Mini'
import Min from './ministryData'

export const Ministry = () => {
    /* eslint-disable no-unused-vars */
    const [data, setData] = useState(Min)
    /* eslint-disable no-unused-vars */
  return (
      <Wrapper>
                <div className='Item'>
                    {data.map((item) => {
                        return (
                            <Mini key={item.id} {...item} />
                        )
                    })}
                </div>
      </Wrapper>
    
  )
}

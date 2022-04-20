import { useState } from 'react'
import { Mini } from './Mini'
import Min from './ministryData'
import {FlexContainer, Item} from './ministryElement'

export const Ministry = () => {
    /* eslint-disable no-unused-vars */
    const [data, setData] = useState(Min)
    /* eslint-disable no-unused-vars */
  return (
      <FlexContainer>
                <Item>
                    {data.map((item) => {
                        return (
                            <Mini key={item.id} {...item} />
                        )
                    })}
                </Item>
      </FlexContainer>
    
  )
}

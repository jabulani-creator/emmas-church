import { useState } from 'react'
import { Mini } from './Mini'
import Min from './ministryData'
import {FlexContainer, Item} from './ministryElement'

export const Ministry = () => {
    const [data, setData] = useState(Min)
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

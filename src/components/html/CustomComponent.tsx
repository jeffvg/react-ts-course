import React from 'react'
import { Greet } from '../Greet'
// extract component props from a different component within source

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
        {props.messageCount}{props.name}
    </div>
  )
}

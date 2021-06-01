import { FC } from 'react'

interface GreetingProps {}

const Greeting: FC<GreetingProps> = ({ ...props }) => {
  return <>Hello? This is Bread Test</>
}

export default Greeting

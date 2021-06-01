import { FC } from 'react'

import { createUseStyles } from 'react-jss'

interface GreetingProps {}

const Greeting: FC<GreetingProps> = ({ ...props }) => {
  const classes = useStyles()
  return (
    <div className={classes.greetingWrapper}>Hello? This is Bread Test</div>
  )
}

const useStyles = createUseStyles({
  greetingWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  }
})

export default Greeting

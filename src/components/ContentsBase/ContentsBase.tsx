import { FC } from 'react'
import { createUseStyles } from 'react-jss'

const ContentsBase: FC = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.base}>{children}</div>
}

const useStyles = createUseStyles({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ContentsBase

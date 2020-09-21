import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: userType => userType.alignItems,
    width: '80%'
  },
  message: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    minWidth: 140,
    maxWidth: 350,
    minHeight: 50,
    margin: '10px 30px',
    backgroundColor: userType => userType.backgroundColor
  },
  title: {
    fontSize: 20,
    color: '#eee',
    textAlign: 'center',
    padding: '0 7px'
  }
})

function Message({ message }) {
  const userType = message.type === 'user' ? { backgroundColor: '#333', alignItems: 'flex-end' } : { backgroundColor: 'green', alignItems: 'flex-start' }
  const classes = useStyles(userType)
  return (
    <div className={classes.wrap}>
      <div className={classes.message}>
        <p className={classes.title}>{message.title}</p>
      </div>
    </div>
  )
}

Message.propTypes = {
  message: PropTypes.object
}

export default Message

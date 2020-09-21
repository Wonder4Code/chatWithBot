import React from 'react'
import { useSelector } from 'react-redux'
import Message from './Message'
import Form from './Form'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  messageWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px 0'
  }
})

function MessagesList() {
  const classes = useStyles()
  const messages = useSelector(state => state.chat.messages)
  
  return (
    <div>
      <div className={classes.messageWrap}>
        {messages.map(message => <Message message={message} key={message.id} />)}
      </div>
      <Form />
    </div>
  )
}

export default MessagesList

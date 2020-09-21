import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../actions/addMessage'
import { v4 as uuid4 } from 'uuid'

const useStyles = makeStyles({
  input: {
    width: '80%'
  },
  enterForm: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(46, 49, 49, 0.2)'
  }
})

function Form() {
  const classes = useStyles()
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const bot = useSelector(state => state.bot)
  const login = useSelector(state => state.login)

  const handler = ({ target }) => {
    const { value } = target
    setValue(value)
  }

  const onSubmit = (event) => {
    if (value) {
      if (event.key === 'Enter' || event.type === 'click') {
        dispatch(addMessage({ id: uuid4(), title: value, type: 'user' }))
        setValue('')
        setTimeout(() => {
          dispatch(addMessage({ id: uuid4(), title: `Привет, ${login.name ? login.name : 'гость'}, я бот`, type: 'bot' }))
        }, 500)
      }
    }
  }

  return (
    <div className={classes.enterForm}>
      <TextField
        id="standard-basic"
        label="Введите сообщение"
        className={classes.input}
        value={value}
        onChange={handler}
        onKeyDown={onSubmit}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={onSubmit}
      >send</Button>
    </div>
  )
}

export default Form

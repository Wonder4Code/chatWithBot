import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import { login } from '../actions/login'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px 0'
  },
  input: {
    width: '40%',
    margin: '20px 0'
  }
})

function Login() {
  const classes = useStyles()
  const [value, setValue] = useState('')
  const dispath = useDispatch()
  const [save, setSave] = useState(false)

  const handler = ({ target }) => {
    const { value } = target
    setValue(value)
  }

  const onSubmit = (event) => {
    if (value) {
      if (event.key === 'Enter' || event.type === 'click') {
        setSave(true)
        setTimeout(() => {
          dispath(login(value))
          setSave(false)
        }, 1000)
        setValue('')
      }
    }
  }

  return (
    <div className={classes.wrap}>
      <TextField
        id="outlined-basic"
        label="Введите ваше имя"
        variant="outlined"
        className={classes.input}
        value={value}
        onChange={handler}
        onKeyDown={onSubmit}
      />
      {save
        ?
        <CircularProgress />
        :
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          onClick={onSubmit}>Сохранить</Button>
      }
    </div>
  )
}

export default Login

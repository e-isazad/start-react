import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import style from "./index.module.scss"
import HttpsIcon from '@mui/icons-material/Https';
import Button from '@mui/material/Button';
const Logo = () => {
  return (
    <React.Fragment>
      <form>
        <div className={style.form}>
          <div className={style.center}>
            <div className={style.logo}>
              <HttpsIcon/>
            </div>
            <b>Sig in</b>
          </div>
          <div>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField required id="outlined-basic" label="Email Addres*" variant="outlined" /><br />
              <TextField id="outlined-basic" label="Password" variant="outlined" />
            </Box>
          </div>
          <input id='check' type='checkbox' />
          <label htmlFor='check'>Remember me</label>

        </div>
        <div className={style.buttonBox}>
          <Button type='submit' variant="contained">SIG IN</Button>
        </div>

        <div className={style.link}>
          <a href='#' >Forgot password?</a>
          <a href='#'>Dont have an account? Sigin Up</a>
          <p>Copygrith @ Your website</p>

        </div>
      </form>
    </React.Fragment>
  )
}

export default Logo
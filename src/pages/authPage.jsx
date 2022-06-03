import React from "react"
import { useForm } from "react-hook-form";
import { useState } from "react"

const AuthPage = ({Login, error}) => {
  const [details, setDetails] = useState({email: '', password: ''});
  
  const {
    formState: {errors},
    register
  } = useForm()

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  }

  
  return(
      <center>
        <div className="logo">
          ONLY.
        </div>
      <div className="mainForm">
        <form onSubmit={submitHandler}>
          <div className="formItem">
            {(error !== '') ? (<div className="errorMessage"><span className="test"></span><span>Пользователя {error} не существует</span></div>) : ''}
            <div className="formLabel">
              <label htmlFor="email">Логин</label>
            </div>
            <div className="formInput">
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="E-mail" 
                onChange={e => setDetails({...details, email: e.target.value})} value={details.email} 
                />
            </div>
            <div className="emailError">{errors?.email && <p>Ошибка</p>}</div>
          </div> 
          <div className="formItem">
            <div className="formLabel">
              <label  htmlFor="password">Пароль</label>
            </div>
            <div className="formInput">
              <input type="password" name="password" id='password' placeholder="Password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <div className="rememberPassword">
              <input type="checkbox" id='checkPassword' class='options_input' />
              <label htmlFor="checkPassword" class='options_label'>
                <span>Запомнить пароль</span>
              </label>
            </div>
          </div>
          <div className="formButton">
            <input type='submit' value='Войти' />
          </div>
        </form>
      </div>
      </center>
    )
}

export {AuthPage}
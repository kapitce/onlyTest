import {useForm} from 'react-hook-form'
import {} from 'styled-components'
import "./style.scss"

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="App">
      <center>
        <div className="logo">
          ONLY.
        </div>
      <div className="mainForm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formItem">
            <div className="formLabel">
              <label htmlFor="">Логин</label>
            </div>
            <div className="formInput">
              <input type="email" placeholder="Email" {...register("email", {required: "Обязательное поле"})} />
            </div>
          <div className='err'>
            {errors?.email && <p>{errors?.email?.message || "Ошибка"}</p>}
          </div>
          </div>
         
          <div className="formItem">
            <div className="formLabel">
              <label>Пароль</label>
            </div>
            <div className="formInput">
              <input type="password" placeholder="Password" {...register("Password", {})} />
            </div>
            <div className="rememberPassword">
              <input type="radio" id='checkPassword' class='options_input'/>
              <label htmlFor="checkPassword" class='options_label'>
                <span>Запомнить пароль</span>
              </label>
            </div>
          </div>
          <div className="formButton">
            <button type='submit'>Войти</button>
          </div>
        </form>
      </div>
      </center>
    </div>
  );
}

export default App;

import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store';

const Auth = () => {
  const view = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const loginButtonHandler = ()=>{
    dispatch(authActions.login())
  }
  

  return (
    <main className={classes.auth}>
      <section>
        {!view ? <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={loginButtonHandler}>Login</button>
        </form> : <h1>My User Profile</h1>}
      </section>
    </main>
  );
};

export default Auth;

import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {login} from '../redux/action/authAction';
import {useDispatch, useSelector} from 'react-redux';
const Login = () => {
  const initialState = {email: '', password: ''};
  const [userData, setUserData] = useState(initialState);
  const {email, password} = userData;
  const [typePass, setTypePass] = useState(false);
  const {auth} = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (auth.token) history.push('/');
  }, [auth.token, history]);
  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setUserData({...userData, [name]:value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    dispatch(login(userData));
  };
  return (
    <div className="auth_page ">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center">Insta</h1>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            onChange={handleChangeInput}
            value={email}
            name="email"
            type="email"
            className="form-control"
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <div className="pass">
            <input
              onChange={handleChangeInput}
              value={password}
              name="password"
              type={typePass ? 'text' : 'password'}
              className="form-control"
              id="pwd"
            />
            <small className="" onClick={() => setTypePass(!typePass)}>
              {typePass ? 'Hide' : 'Show'}
            </small>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-dark w-100"
          disabled={email && password ? false : true}
        >
          Login
        </button>
        <p className="my-2">
          You don`t Have an account
          <Link to="/register" style={{color: 'crimson'}}>
            Register Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

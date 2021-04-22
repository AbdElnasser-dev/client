import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
import { register } from '../redux/action/authAction';
// import { register } from '../redux/action/authAction';
const Register = () => {
  const {auth,alert} = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();

  const initialState = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    cf_password: '',
    gender: 'male',
  };

  const [userData, setUserData] = useState(initialState);
  // , gender
  const {fullname, username, email, password, cf_password} = userData;

  const [typePass, setTypePass] = useState(false);
  const [typeCF_Pass, setTypeCF_Pass] = useState(false);
  useEffect(() => {
    if (auth.token) history.push('/');
  }, [auth.token, history]);

  useEffect(() => {
    if (auth.token) history.push('/');
  }, [auth.token, history]);
  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setUserData({...userData, [name]: value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    dispatch(register(userData))
  };
  return (
    <div className="auth_page ">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center">Insta</h1>
        <div className="form-group">
          <label htmlFor="fullname">Fullname:</label>
          <input
            onChange={handleChangeInput}
            value={fullname}
            name="fullname"
            type="text"
            className="form-control"
            id="fullname"
            style={{background:`${alert.fullname?'#fd2d6a14':''}`}}
          />
          <small className="text-danger form-text">
          {alert.fullname?`${alert.fullname}`:''}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="Username">Username:</label>
          <input
            onChange={handleChangeInput}
            name="username"
            type="text"
            className="form-control"
            id="Username"
            style={{background:`${alert.username?'#fd2d6a14':''}`}}

            value={username.toLowerCase().replace(/ /g,'')}
          />
          <small className="text-danger form-text">
              {alert.username?`${alert.username}`:''}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            onChange={handleChangeInput}
            value={email}
            name="email"
            type="email"
            className="form-control"
            style={{background:`${alert.email?'#fd2d6a14':''}`}}
            id="email"
          />
          <small>we `ill never share your email with any one else</small>
          <small className="text-danger form-text">
              {alert.email?`${alert.email}`:''}
          </small>
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
            style={{background:`${alert.password?'#fd2d6a14':''}`}}

            />
            <small className="" onClick={() => setTypePass(!typePass)}>
              {typePass ? 'Hide' : 'Show'}
            </small>
          
          </div>
          <small className="text-danger form-text">
              {alert.password?`${alert.password}`:''}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="cfpwd">Confirm Password:</label>
          <div className="pass">
            <input
              onChange={handleChangeInput}
              value={cf_password}
              name="cf_password"
              type={typeCF_Pass ? 'text' : 'password'}
              className="form-control"
              id="cfpwd"
            style={{background:`${alert.cf_password?'#fd2d6a14':''}`}}

            />
            <small className="" onClick={() => setTypeCF_Pass(!typeCF_Pass)}>
              {typeCF_Pass ? 'Hide' : 'Show'}
            </small>
          </div>
          <small className="text-danger form-text">
              {alert.cf_password?`${alert.cf_password}`:''}
          </small>
        </div>
        <div className="row justify-content-between mx-0 mb-1">
          <label htmlFor="male">
            Male: 
            <input
              type="radio"
              onChange={handleChangeInput}
              name="gender"
              id="male"
              defaultChecked
              value="male"
            />
          </label>
          <label htmlFor="female">
            Female: 
            <input
              type="radio"
              onChange={handleChangeInput}
              name="gender"
              id="female"
              value="female"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Register
        </button>
        <p>
          You Already Have an account
          <Link to="/login" style={{color: 'crimson'}}>
            login Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

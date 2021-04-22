import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getDataAPI} from '../../utils/fetchData';
import {GLOBALTYPES} from '../../redux/action/globalTypes';
import UserCard from '../UserCard';
import LoadIcon from '../../images/loading.gif'
const Search = () => {
  const [search, setSearch] = useState ('');
  const [users, setUsers] = useState ([]);
  const [load,setLoad]=useState(false);
  const {auth} = useSelector (state => state);
  const dispatch = useDispatch ();
  useEffect (
    () => {
      if (search) {
     getDataAPI (`search?username=${search}`, auth.token)
          .then (res => setUsers (res.data.users))
          .catch (err => {
            dispatch ({
              type: GLOBALTYPES.ALERT,
              payload: {error: err.response.data.msg},
            });
          });
      } else{
        setUsers([])
      }
    },
    [search, auth.token, dispatch]
  );
 const handleClose = ()=>{
setSearch('')
setUsers([])
 }
  return (
    <form className="search_form" >
      <input
        name="search"
        type="text"
        value={search}
        id="search"
        onChange={e =>
          setSearch (e.target.value.toLowerCase ().replace (/ /g, ''))}
      />
      <button style={{display:'none'}} type="submit">Submit</button>
          {load&&<img src={LoadIcon} alt="loading"/>}


      <div className="search__icon" style={{opacity: search ? '0' : '0.5'}}>
        <span className="material-icons">search</span>
        <span>search</span>
      </div>
      <div className="close__search" onClick={handleClose}>&times;</div>
      <div className="users">
        {search &&
          users.map (user => (
            <UserCard
              key={user._id}
              user={user}
              border="border"
              handleClose={handleClose}
            />
          ))}
      </div>
    </form>
  );
};

export default Search;

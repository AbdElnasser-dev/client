import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { GLOBALTYPES } from '../../redux/action/globalTypes';
import Loading from './Loading';
import Toast from './Toast';
const Notify = () => {
  const {alert} = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      {/* <Loading /> */}
      {alert.loading && <Loading />}
      {alert.success && (
        <Toast
          msg={{title: 'Success', body: alert.success}}
          bgColor="bg-success"
          handleShow={() => dispatch({type: GLOBALTYPES.ALERT, payload: {}})}
        />
      )}
      {alert.error && (
        <Toast
          msg={{title: 'error', body: alert.error}}
          bgColor="bg-danger"
          handleShow={() => dispatch({type: GLOBALTYPES.ALERT, payload: {}})}
        />
      )}
    </div>
  );
};

export default Notify;

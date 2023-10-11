import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editUsernameAPI, loadUserProfile } from '../../redux/api';
import { updateUserName } from '../../redux/authSlice';

function Account() {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(user.userName); 

  useEffect(() => {
    if (token) {
      loadUserProfile(dispatch, token);
    } setNewUsername(user.userName);

  }, [dispatch, token , user.userName]);

  const saveUsername = async () => {
    const updatedUser= await editUsernameAPI(token, newUsername, user);

    if (updatedUser) {
      
      dispatch(updateUserName(updatedUser ));
      
      setIsEditing(false);
  };
}

  return (
    <main>
      {isEditing ? (
        <div className='header-editname'>
          <div>
            <h1>Edit user info</h1>
            <form>
              <div className='input-wrapper'>
                <label htmlFor='username'>User name</label>
                <input
                  type='text'
                  id='username'
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                />
              </div>

              <div className='input-wrapper'>
                <label htmlFor='firstName' >First Name</label>
                <input type='text' id='firstName' value={user?.firstName} className='label-gray' />
              </div>

              <div className='input-wrapper'>
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' id='lastName' value={user?.lastName} className='label-gray'/>
              </div>
            </form>
            <button type='submit' className='header-button' onClick={saveUsername}>
              Save
            </button>
            <button type='button' className='header-button' onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className='header'>
          <h1>Welcome back <br /> {user?.firstName} {user?.lastName}! </h1>
          <button className='edit-button' onClick={() => setIsEditing(true)}>Edit Name</button>
        </div>
      )}

      <section className='account'>
        <div className='account-content-wrapper'>
          <h3 className='account-title'>Argent Bank Checking (x8349)</h3>
          <p className='account-amount'>$2,082.79</p>
          <p className='account-amount-description'>Available Balance</p>
        </div>
        <div className='account-content-wrapper cta'>
          <button className='transaction-button'>View transactions</button>
        </div>
      </section>

      <section className='account'>
        <div className='account-content-wrapper'>
          <h3 className='account-title'>Argent Bank Savings (x6712)</h3>
          <p className='account-amount'>$10,928.42</p>
          <p className='account-amount-description'>Available Balance</p>
        </div>
        <div className='account-content-wrapper cta'>
          <button className='transaction-button'>View transactions</button>
        </div>
      </section>

      <section className='account'>
        <div className='account-content-wrapper'>
          <h3 className='account-title'>Argent Bank Credit Card (x8349)</h3>
          <p className='account-amount'>$184.30</p>
          <p className='account-amount-description'>Current Balance</p>
        </div>
        <div className='account-content-wrapper cta'>
          <button className='transaction-button'>View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default Account;

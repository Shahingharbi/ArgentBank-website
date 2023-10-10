import React, { useEffect }from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadUserProfile } from '../../redux/api';
function Account() {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch()

  useEffect(() => {
    if(token) {
     loadUserProfile (dispatch, token)
    }
     
   }, [dispatch, token]); 



  return (
 <main>
      <div className='header'>
        <h1>Welcome back <br /> {user?.firstName} {user?.lastName}! </h1>
        <button className="edit-button">Edit Name</button>
      </div>
 

<section className="account">
<div className="account-content-wrapper">
  <h3 className="account-title">Argent Bank Checking (x8349)</h3>
  <p className="account-amount">$2,082.79</p>
  <p className="account-amount-description">Available Balance</p>
</div>
<div className="account-content-wrapper cta">
  <button className="transaction-button">View transactions</button>
</div>
</section>

<section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
</main>

  )
}

export default Account
import React from 'react'
import Account from '../../components/account'
import Transaction from '../../components/transaction'

function User() {
  return (
    <main className='main bg-dark'>
      <Account />
      <Transaction title = 'Argent Bank Savings (x6712)' amount ='$10,928.42' description ='Available Balance'/> 
      <Transaction title = 'Argent Bank Savings (x6712)' amount ='$10,928.42' description ='Available Balance'/> 
      <Transaction title = 'Argent Bank Savings (x6712)' amount ='$10,928.42' description ='Available Balance'/> 
    </main>
  )
}

export default User
import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: "Asif" }
  return (
      <section className='home'>
          <div className='home-content'>
              <header className='home-header'>
                  <HeaderBox
                      type='greeting'
                      title='Welcome'
                      user={loggedIn?.firstName || "Guest"}
                      subtext="Access and manage your account and transactions efficiently"
                  />

                  <TotalBalanceBox
                      accounts={[]}
                      totalBanks={1}
                      totalCurrentBalance={135653.32}
                  />
              </header>

              recent Transactions
          </div>

          <RightSidebar
              user={loggedIn}
              transactions={[]}
              banks={[]}
          />
    </section>
  )
}

export default Home
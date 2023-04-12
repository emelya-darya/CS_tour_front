import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'

import { List } from './components/pages/list/List'
import { Rules } from './components/pages/rules/Rules'
// import { Pamyatka } from './components/pages/pamyatka/Pamyatka'
import { Page_404 } from './components/pages/page_404/Page_404'
import { TablesResults } from './components/pages/tablesResults/TablesResults'
import { SostavyComand } from './components/pages/sostavyComand/SostavyComand'



const baseAdress = 'http://172.28.112.14'


function App() {

  const [membersData, setMembersData] = React.useState([])

  const registerNewMember = function (memberObj) {
    return fetch(baseAdress + '/register', {
      method: 'post',
      body: JSON.stringify(memberObj),
      headers: {
        'content-type': 'application/json; charset=utf-8'
      }
    })
  }

  const getMembers = function () {
    fetch(baseAdress + '/list')
      .then(response => response.json())
      .then(response => setMembersData(response))
      .catch(err => alert('Не удалось получить список зарегистрировавшихся участников'))
  }

  React.useEffect(() => {
    getMembers()
  }, [])


  return (
    <div className='wrapper'>
      {/* тут нужен membersData, setMembersData, registerNewMember */}
      <Header registerNewMember={registerNewMember} membersData={membersData} setMembersData={setMembersData} />

      <main>
        <Routes>
          <Route path='/' element={<Rules />} />
          {/* тут нужен membersData */}
          <Route path='/list' element={<List membersData={membersData} />} />
          {/* <Route path='/pamyatka' element={<Pamyatka />} /> */}
          <Route path='/sostavy-komand' element={<SostavyComand/>} /> 
          <Route path='/results' element={<TablesResults />} /> 
          <Route path='*' element={<Page_404 />} />
        </Routes>
      </main>


      <Footer />

    </div>
  )
}

export default App

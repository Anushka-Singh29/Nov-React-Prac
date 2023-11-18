//handling an input from a form

import { useState } from 'react'
import './App.css'

const App = () => {

  const [users, setuser] = useState([])
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [city, setcity] = useState("ujjain")
  const [gender, setgender] = useState("")

  const Submithonekiprakriya = (e) => {
    e.preventDefault()
    // console.log(username, password, city, gender)
    const newUser = { username, password, city, gender }
    const copyUser = [...users]
    copyUser.push(newUser)
    setuser(copyUser)
  }

  const deleteHandle = (index) => {
    const copyUser = [...users]
    copyUser.splice(index, 1)
    setuser(copyUser)
  }

  let data = <h2>Loading Data to print....</h2>
  if (users.length > 0) {
    data = users.map((user, index) => {
      return (
        <div key={index}>
          <h1> {user.username}<p onClick={()=>deleteHandle(index)}>❌</p>
          </h1>
        </div>
      )
    })
  }

  return (
    <div>
      <form onSubmit={Submithonekiprakriya}>
        <input
          type="text"
          placeholder='username'
          onChange={(e) => { setUsername(e.target.value) }}
          value={username} />
        <input
          type="password"
          placeholder='password'
          onChange={(e) => { setPassword(e.target.value) }}
          value={password} />
        <select defaultValue={city} onSelect={(e) => { setcity(e.target.value) }}>
          <option value="bhopal">BHOPAL</option>
          <option value="jabalpur">JABALPUR</option>
          <option value="indore">INDORE</option>
          <option value="ujjain">UJJAIN</option>
          <option value="dewas">DEWAS</option>
        </select>
        <input type="radio" name="gender" value='male' onChange={(event) => { setgender(event.target.value) }} />Select Male
        <input type="radio" name="gender" value='female' onChange={(event) => { setgender(event.target.value) }} />Select Female
        <button>SUBMIT HOJAAYE</button>
      </form>

      <br />
      <h2 id='card'>{data}</h2>
      {/* <h3 style={{ fontFamily: 'gilroy', color: 'brown', fontWeight: 400, fontSize: '16px' }}>{JSON.stringify(users.username)}</h3> */}
    </div>
  )
}

export default App


// import React, { useState } from 'react'

// const App = () => {

//   const [name, setname] = useState("Anushka")
// // const wrapper = (e) =>
// // {
// // changename("anushkasingh")
// // }

// const changename= (n)=>{
//   // n.preventDefault()
// setname(n)
// console.log('clicked')
// }

//   return (
//     <>
//    <h1>{name}</h1>
//    <button onClick={() => changename('anushkasingh')}>CLICK TO CHANGE NAME</button>
//     </>
//   )
// }

// export default App


// // const App = () => {

// //   // const [username, setusername] = useState("")

// //   const Submithonekebaad = (e) => {
// //     e.preventDefault()
// //     console.log("Submitted")
// //     console.log(e.target[0].value)
// //     console.log(e.target[1].value)

// //   }

// //   return (
// //     <>
// //       <form id='registration' onSubmit={Submithonekebaad} >
// //         <input type="text" placeholder='username' />
// //         <input type="password" placeholder='password' />
// //         <button>SUBMIT</button>
// //       </form>
// //     </>
// //   )
// // }

// // export default App
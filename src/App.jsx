import { useEffect, useState } from "react";
import { db } from "./firebase-config"
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";

const App = () => {

  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  const userCollectionRef = collection(db, "crud")

  const createUser = async () => {
    await addDoc(userCollectionRef, { name: name, age: age })
  }

  const updateAge = async (id, age)=> {
    const usersDoc =doc(db, "crud", id)
    const newAge = {age:age+5}
    await updateDoc(usersDoc,newAge) 
  }

  const deleteUser = async (id)=>{
    const usersDoc = doc(db, "crud", id)
    await deleteDoc(usersDoc)
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef)

      const docsRef = data.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      }))

      setUsers(docsRef)
    }

    getUsers()
  }, [createUser])



  return (
    <div>
      <input type="text" placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Age..." value={age} onChange={(e) => setAge(e.target.value)} />
      <button onClick={createUser}>Create User</button>

      {users.map((user) => {
        return <div key={user.name}>
          <h1>Name : {user.name}</h1>
          <h1>Age : {user.age}</h1>
          <button onClick={()=> updateAge(user.id, user.age)}>Update age</button>
          <button onClick={()=> deleteUser(user.id)}>Delete</button>
        </div>
      })}
    </div>
  )
}

export default App
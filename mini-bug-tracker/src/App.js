import Header from "./components/Header";
import Bugs from "./components/Bugs";
import LogBug from "./components/LogBug";
import {useState} from 'react'

function App() {
  const [showBugForm, setShowBugForm] = useState(false);
  const [bugs, setBugs] =  useState([
    {
      id: 1,
      title: 'Bug 1',
      description: 'Description for bug 1',
      status: 'open'
    },
    {
      id: 2,
      title: 'Bug 2',
      description: 'Description for bug 2',
      status: 'closed'
    },
    {
      id: 3,
      title: 'Bug 3',
      description: 'Description for bug 3',
      status: 'open'
    }
  ])
  //log bug
  const logBug = (bug) =>{
    const id = Math.floor(Math.random() * 10000) + 1
    const newBug = {id, ...bug}
    setBugs([...bugs, newBug])
  }

  // delete  bug
  const deleteBug = (id) => {
    setBugs(bugs.filter((bug) => bug.id !== id))
  }

  // change bug status
  const changeStatus = (id) => {
    setBugs(bugs.map((bug)=> bug.id === id? 
    {...bug, status: bug.status === "open" ?
     "closed" : "open"}
      : bug))
  }
  return (
    <div className="container">
      <Header onLog={()=> setShowBugForm(!showBugForm)} showForm={showBugForm} />
      {showBugForm && <LogBug logBug={logBug}/>}
      {bugs.length > 0? <Bugs bugs={bugs} onDelete={deleteBug} changeStatus={changeStatus}/>: 'No bugs logged'}
    </div>
  );
}

export default App;

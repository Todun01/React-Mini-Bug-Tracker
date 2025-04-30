import { useState } from "react"

const LogBug = ({logBug}) => {
  const [bugTitle, setTitle] = useState('')
  const [bugDescription, setDescription] = useState('')
  const [bugStatus, setStatus] = useState('open')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!bugTitle) {
      alert('Please add a bug title')
      return
    }
    if (!bugDescription) {
      alert('Please add a bug description')
      return
    }
    logBug({title: bugTitle, description: bugDescription, status: bugStatus})
    setTitle('')
    setDescription('')
  }
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Bug Title</label>
        <input 
          type="text" 
          placeholder="Bug Title" 
          value={bugTitle}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Bug Description</label>
        <input 
        type="text" 
        placeholder="Bug Description" 
        value={bugDescription}
        onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <input type="submit" value="Log Bug" className="btn btn-block" />
    </form>
  )
}

export default LogBug

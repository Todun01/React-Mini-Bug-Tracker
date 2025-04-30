import Bug from "./Bug"
const Bugs = ({bugs, onDelete, changeStatus}) => {
    
  return (
    <>
      {bugs.map((bug) => (
        <Bug 
        key={bug.id} 
        bug={bug} 
        onDelete={onDelete} 
        changeStatus={changeStatus}/>
      ))}
    </>
  )
}

export default Bugs

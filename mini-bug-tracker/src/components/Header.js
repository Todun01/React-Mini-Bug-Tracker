import Button from "./Button"
const Header = ({title= "Bug Tracker"}) => {
  const onClick = ()=> {
    console.log('click')
  } 
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button style={{
          color: "white",
          backgroundColor: "green",
          }} text='Log' onClick={onClick} type="button"></Button>
    </header>
  )
}

// const headingStyle = {
//   color: 'red', 
//   backgroundColor: 'black'
// }


export default Header

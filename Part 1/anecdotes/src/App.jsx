import Header from '../src/Header.jsx'
import Content from '../src/Content.jsx'
import Total from '../src/Total.jsx'

const App = () => {
  
  return (
    <div>
      <Header course='Full stack aplication develoment'/>
      <Content part1='Fundamentals of react' part2='Using props to pass data' part3='State of component'/>
      <Total excercise1={15} excercise2={41} excercise3={48} />
    </div>
  )
}

export default App
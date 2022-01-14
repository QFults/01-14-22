import Navbar from './components/Navbar'

const dog = {
  name: 'Beef',
  age: 2,
  breed: 'Chihuahua'
}

const title = 'My Awesome App'

const App = () => {
  return (
    <>
      <Navbar title={title} />
      <h1>Hello World!</h1>
      <button className="btn btn-primary">Click Me</button>
      <p>Name: {dog.name}</p>
      <p>Age: {dog.age}</p>
      <p>Breed: {dog.breed}</p>
    </>
  )
}

export default App

import React from 'react'
// import { render } from 'react-dom'
import AddKidsToyAnimalForm from './AddKidsToyAnimalForm'
// import HeaderIsFooter from './HeaderIsFooter'
import fishes from '../sample-fishes'
import Fish from './Fish'

class AppWes extends React.Component {
  state = {
    fargelagteArk: {},
  }
  addArk = toyAnimal => {
    // I. Ta en kopi av fargelagteArk existing state
    const fargelagteArk = { ...this.state.fargelagteArk }
    // II. legg til Lillians nye fargelegging til den fargelagteArk variabelen
    fargelagteArk[`toyAnimal${Date.now()}`] = toyAnimal
    /// III. set den nye fargeleggings objektet til state
    this.setState({ fargelagteArk })

    // console.log('Adding')
  }
  loadSampleFishes = () => {
    this.setState({ fargelagteArk: fishes })
  }

  render() {
    return (
      <div className="form">
        <h1>Yo</h1>
        <AddKidsToyAnimalForm
          addArk={this.addArk}
          loadSampleFishes={this.loadSampleFishes}
        />
        <button onClick={this.loadSampleFishes}>load SampleSketchNote</button>
        <ul className="fishes">
          {Object.keys(this.state.fargelagteArk).map(key => (
            <Fish key={key} details={this.state.fargelagteArk[key]} />
          ))}
        </ul>
      </div>
    )
  }
}

export default AppWes

// Bokvelger få egen lenke = nei
//<HeaderIsFooter tagline="wes is cool" /> on line 13

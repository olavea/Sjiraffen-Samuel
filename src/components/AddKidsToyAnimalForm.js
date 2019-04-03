import React from 'react'

class AddKidsToyAnimalForm extends React.Component {
  myInput = React.createRef()
  pageRef = React.createRef()

  uploadSketchNote = event => {
    // I stop form from sub
    event.preventDefault()

    const toyAnimal = {
      name: this.myInput.current.value,
      denneSiden: this.pageRef.current.value,
    }
    //console.log(toyAnimal)
    this.props.addArk(toyAnimal)

    //this.props.addColoringPage(toyAnimal);
    //refresh the form
    //event.currentTarget.reset();
  }

  // II get the text from that input
  // const storeName = this.myInput.current.value

  // III drop change page
  // this.props.history.push(`/store/${storeName}`);

  render() {
    return (
      <form className="upload-photo" onSubmit={this.uploadSketchNote}>
        <h2>Last opp bilde av tegningen på</h2>
        {/*
        <h3 className="denneSiden">
          <span>{this.props.denneSiden}</span>
        </h3>
*/}
        <input
          name="name"
          type="text"
          ref={this.myInput}
          required
          placeholder="Kid Name"
        />
        <input
          name="denneSiden"
          ref={this.pageRef}
          type="text"
          placeholder="/2-page"
        />
        <button type="submit">upload SketchNote</button>
      </form>
    )
  }
}

export default AddKidsToyAnimalForm
//on line 47
{
  /*ref={this.props.denneSiden}*/
}

// få inn sidetall her
// Bokvelger få egen lenke = nei

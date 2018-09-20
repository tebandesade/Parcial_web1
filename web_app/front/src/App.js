import React, { Component } from 'react';
import { Label, Input , Container, Row, Col} from 'reactstrap';
import './App.css';
import vegaEmbed from 'vega-embed';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {estupefacientes:[]}
    this.state = {value: {}};
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(event) {
      try{
    this.setState({value: JSON.parse(event.target.value)});
      }
      catch(error){
        if (event.target.value===''){
          this.setState({value: {}});
        console.log(error)
        }

      }

  }

 handleChangeFile(event) {
      try{
    this.setState({value: JSON.parse(event.target.value)});
      }
      catch(error){
        if (event.target.value===''){
          this.setState({value: {}});
        console.log(error)
        }

      }

  }

  componentDidUpdate(){
      var spec = this.state.value
    vegaEmbed(this.divTarget, spec).then(function (result) {
      console.log('result');
      console.log(result);
    }).catch(console.error);

  }

  renderGrafica(){
    return ( <div ref={(div) => this.divTarget=div}></div>)
  }
  renderFormGroup(){
  return (<Container>
    <Label for="exampleText" sm={10}>Please input your json to be dislayed</Label>
    <Input type="textarea" name="text" id="exampleText" onChange={this.handleChange}  size='500'/>
    <Label for="exampleInput" sm={10}> Or if you have a file, please upload it</Label>
    <Input type="file" name="file" id="exampleFile"onChange={this.handleChangeFile} />

    </Container>)}

  render() {
    return (
      <div className="App">
      <h1 className="parcialtitulo">Parcial Web 1 by TebanDesade</h1>
      <Container>
      <Row>
          <Col lg="6">{this.renderGrafica()}</Col>
          <Col lg="6">{this.renderFormGroup()}</Col>
        </Row>
        </Container>
      </div>

    );
  }
}

export default App;

import React, {Component} from 'react'

class Search extends Component {
  constructor(){
    super();

    this.state = {
      firstStation: '',
      firstLine: '',
      lastStation: '',
      secondLine: ''

    }
  }


  _handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.firstStation,
                        this.state.firstLine,
                        this.state.lastStation,
                        this.state.secondLine);


  }



  _firstStationInput = (e) => {
    this.setState({firstStation: e.target.value})
  }
  _firstLineInput = (e) => {
    this.setState({firstLine: e.target.value})
  }
  _lastStationInput = (e) => {
    this.setState({lastStation: e.target.value})
  }
  _secondLineInput = (e) => {
    this.setState({secondLine: e.target.value})
  }
  _refresh = () => {
    window.location.reload(false);
  }
  render(){
    return(
      <div>
        <form onSubmit={this._handleSubmit}>

          <h1> MTA </h1>

          <div className='labels_inputs'>

            <div className='form-labels'>
              <p>Enter the First Station:</p>
              <p>Enter the Last Station:</p>
            </div>

            <div className='form-inputs'>
              <p><input name='firstStation' onInput={ this._firstStationInput }/></p>
              <p><input name='LastStation' onInput={ this._lastStationInput }/></p>
            </div>

            <div className='form-labels'>
              <p>Enter the First Line:</p>
              <p>Enter the second Line:</p>
            </div>

            <div className='form-inputs'>
              <p><input name='firstLine' onInput={ this._firstLineInput }/></p>
              <p><input name='SecondLine' onInput={ this._secondLineInput }/></p>
            </div>

          </div>

        <div className='button'>
          <button>Search</button>
          <button onClick= { this._refresh }>Home</button>
        </div>

      </form>
    </div>

    )
  }
}

export default Search;

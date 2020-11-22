import React, {Component} from 'react';


class Result extends Component {
  state = {
    lines: {
      N: [ 'Times Square' , '34th' , '28th' , '23rd' , 'Union Square' , '8th' ],
      L: [ '8th' , '6th' , 'Union Square' , '3rd' , '1st' ],
      6: [ 'Grand Central' , '33rd' , '28th' , '23rd' , 'Union Square' , 'Astor Place' ]
    }
  }

  render(){

    return(
      <div>
        <div className='result'>
          {this.props.result.split('.').map((result) => (
            <p>{result}</p>
          ))}
        </div>
      </div>
    )
  }
}

export default Result;

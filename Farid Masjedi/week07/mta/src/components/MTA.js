import React, {Component} from 'react'
import Search from './Search';
import Result from './Result';

class MTA extends Component {
  constructor(){
    super();

    this.state = {
      firstStation:'',
      firstLine:'',
      lastStation: '',
      secondLine: '',
      result:'',
      tripArrayInFirstLine:[],
      tripArrayInSecondLine:[],
      lines: {
        N: [ 'Times Square' , '34th' , '28th' , '23rd' , 'Union Square' , '8th' ],
        L: [ '8th' , '6th' , 'Union Square' , '3rd' , '1st' ],
        6: [ 'Grand Central' , '33rd' , '28th' , '23rd' , 'Union Square' , 'Astor Place' ]
      },
      unionStation: 'Union Square',
      flag: 'visible'
    }
  }

  generateTrip = (firstStation,firstLine,lastStation,secondLine) => {

    this.setState({firstStation:'',
                   firstLine:'',
                   lastStation: '',
                   secondLine: '',
                   result:'',
                   tripArrayInFirstLine:[],
                   tripArrayInSecondLine:[],
                   flag: 'visible'
                 })

   // Check: if the lines existed or not.
   // Exp: planTrip( 'West', '5th','N', 'Times Square')
   if (!Object.keys(this.state.lines).includes(firstLine)) {
     return this.setState({result:`There is no ${firstLine} line.`})
   } else if (!Object.keys(this.state.lines).includes(secondLine)){
     return this.setState({result:`There is no ${secondLine} line.`})
   }

   // // check: if the stops are in the lines or not.
   // // Exp: planTrip( 'N', '34th','L', 'Times Square')
   if (!this.state.lines[firstLine].includes(firstStation)) {
     return this.setState({result:`There is no ${firstStation} station in line ${firstLine}`})
   } else if (!this.state.lines[secondLine].includes(lastStation)) {
     return this.setState({result:`There is no ${lastStation} station in line ${secondLine}`});
   };

   // check: if one of the stops is 'Union Square', but two different -
   // - lines has been inputed.
   // Exp: planTrip( 'N', 'Union Square','L', 'Times Square')
   if (firstStation === this.state.unionStation) {
     firstLine = secondLine;
   }else if (lastStation === this.state.unionStation) {
     secondLine = firstLine;
   }

   // Structure of the function.
   let result = '';
   let startStop = this.state.lines[firstLine].indexOf(firstStation);
   let lastStop = this.state.lines[secondLine].indexOf(lastStation);
   let unionIndex1 = this.state.lines[firstLine].indexOf(this.state.unionStation);
   let unionIndex2 = this.state.lines[secondLine].indexOf(this.state.unionStation);

   let totalstops = 0;
   let travel = [];

   // Check if the trip is inside one of the lines.
   if (firstLine === secondLine) {
     let first = 0;
     let last = 0;

     totalstops = Math.abs(lastStop-startStop);
     first = Math.min(lastStop,startStop);
     last = Math.max(lastStop,startStop);

     travel = this.state.lines[firstLine].slice(first,last+1);
     if (startStop>lastStop){
       travel.reverse();
     }
     this.setState({tripArrayInFirstLine:travel})
     travel.shift();

     let result = `You must travel through the following stops on the line ${firstLine} : ${travel.join(', ')}.`;
     result = result + `\n\n${totalstops} stops in total.`;
     this.setState({result:result});

   }else{

     let firstS = 0;
     let firstE = 0;
     let secondS = 0;
     let secondE = 0;

     // if changing the line is needed.
     totalstops = Math.abs(startStop-unionIndex1)+Math.abs(unionIndex2-lastStop);
     firstS = Math.min(startStop,unionIndex1);
     firstE = Math.max(startStop,unionIndex1)
     secondS = Math.min(lastStop,unionIndex2);
     secondE = Math.max(lastStop,unionIndex2);

     travel = this.state.lines[firstLine].slice(firstS,firstE+1)

     if (startStop>unionIndex1){
       travel.reverse();
     }
     this.setState({tripArrayInFirstLine:[...travel]})
     travel.shift();
     let result = `You must travel through the following stops on the line ${firstLine} : ${travel.join(', ')}.`;
     result = result + `\n\nChange at ${this.state.unionStation} and go to line ${secondLine}.`;

     travel = [];
     travel = this.state.lines[secondLine].slice(secondS,secondE+1);

     if (unionIndex2>lastStop){
       travel.reverse();
     }

     travel.shift();
     this.setState({tripArrayInSecondLine:[...travel]})


     result = result + `\n\nYour journey continues through the following stops: ${travel.join(', ')}.`;
     result = result + `\n\n${totalstops} stops in total.`;
     this.setState({result:result});
   }

   this.setState({firstStation:firstStation,
                  firstLine:firstLine,
                  lastStation:lastStation,
                  secondLine:secondLine,
                  flag: 'hide'
                });
  }

  render(){

    return(

      <div className='container'>
      
        <Search onSubmit={ this.generateTrip }/>

        <div>

          <Result
            firstStation={this.state.firstStation}
            firstLine={this.state.firstLine}
            lastStation={this.state.lastStation}
            secondLine={this.state.secondLine}
            result ={this.state.result}
          />

          <div className='route'>
            {(this.state.tripArrayInFirstLine.length) ?
                <div className="trip">

                  <h1>Line {this.state.firstLine}</h1>
                  {this.state.tripArrayInFirstLine.map( (stop) => (
                        <div className='stops'>
                          <div className='circle-trip-line1'></div>
                          <p>{stop}</p>
                        </div>
                  ))}

                </div>

            : null}

            {(this.state.tripArrayInSecondLine.length) ?
                <div className="trip">

                  <h1>Line {this.state.secondLine}</h1>
                  {this.state.tripArrayInSecondLine.map( (stop) => (
                        <div className='stops'>
                          <div className='circle-trip-line2'></div>
                          <p>{stop}</p>
                        </div>
                  ))}

                </div>

            : null}
          </div>

          {Object.keys(this.state.lines).map( (line) => (

            <div className={this.state.flag}>
              <h1>Line {line}</h1>
              {this.state.lines[line].map( (stop) => (
                <div className='stops'>
                  <div className='circle'></div>
                  <p>{stop}</p>
                </div>
              ))}

            </div>

          ))}

        </div>

      </div>
    )
  }
}

export default MTA;

import React, {Component} from 'react';
import { List, AutoSizer, CellMeasurer, CellMeasurerCache  } from "react-virtualized";
import logo from './logo.svg';
import './App.css';
import { loremIpsum } from 'lorem-ipsum';

const rowCount = 1000;
// const listHeight = 600;
// const rowHeight = 50;
// const rowWidth = 600;

class App extends Component {
  constructor() {
    super();
    this.cache =new CellMeasurerCache({
      defaultHeight:100,
      fixedWidth: true
    });
    this.renderRow = this.renderRow.bind(this);
    this.list = Array(rowCount).fill().map((val, idx) => {
      return {
        id: idx,
        name: 'Lorem Ipsum',
        image: '../public/logo192.png',
        text: loremIpsum({
          count: 2,
          units: 'sentences',
          sentenceLowerBound: 10,
          sentenceUpperBound: 100
        })
      }
    });
  }


render() {
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      {/* <div className="list">
        {this.list.map(this.renderRow)}
      </div> */}
      <div className="list">
        <AutoSizer>
          {
            ({ width, height }) => {
              return <List
                width={width}
                height={height}
                deferredMeasurementCache = {this.cache}
                rowHeight={this.cache.rowHeight}
                rowRenderer={this.renderRow}
                rowCount={this.list.length} 
                overscanRowCount = {3} />
            }
          }
        </AutoSizer>
      </div>
      {/* <div className="list">
        <AutoSizer>
          {
            ({ width, height }) => {
              return <List
                width={width}
                height={height}
                rowHeight={rowHeight}
                rowRenderer={this.renderRow}
                rowCount={this.list.length} 
                overscanRowCount = {3} />
            }
          }
        </AutoSizer>
      </div> */}
    </div>
  );
}
renderRow({ index, key, style, parent }) {
  return (
    <CellMeasurer 
      key = {key}
      cache = {this.cache}
      parent = {parent} 
      columnIndex = {0}
      rowIndex = {index} >
        <div style={style} className="row">
            <div className="image">
              <img src={this.list[index].image} alt="" />
            </div>
            <div className="content">
              <div>{this.list[index].name}</div>
              <div>{this.list[index].text}</div>
            </div>
          </div>
      </CellMeasurer>
    // <div key={key} style={style} className="row">
    //   <div className="image">
    //     <img src={this.list[index].image} alt="" />
    //   </div>
    //   <div className="content">
    //     <div>{this.list[index].name}</div>
    //     <div>{this.list[index].text}</div>
    //   </div>
    // </div>
  );
}

// renderRow(item) {
//   return (
//     <div key={item.id} className="row">
//       <div className="image">
//         <img src={item.image} alt="" />
//       </div>
//       <div className="content">
//         <div>{item.name}</div>
//         <div>{item.text}</div>
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
    
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <div className="list">
//         {this.list.map(this.renderRow)}        
//       </div>
//     </div>
//     this.list = Array(rowCount).fill().map((val, idx) => {
//       return {
//         id: idx,
//         name: 'Manish',
//         image: '../public/logo192.png',
//         text: loremIpsum({
//           count: 1,
//           units: 'sentences',
//           sentenceLowerBound: 4,
//           sentenceUpperBound: 8         
//         })
//       }
//     })
//   );
// }

// renderRow(item) {
//   return (
//     <div className="row"></div>
//   )
// }
}
export default App;

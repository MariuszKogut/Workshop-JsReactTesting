import * as React from 'react';
import { SyntheticEvent } from 'react';
import { MathCalc } from '../services/MathCalc';

export interface CalculatorState {
  value1: string;
  value2: string;
  result: string;
}

export default class Calculator extends React.Component<{}, CalculatorState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      result: ''
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleCalcClicked = this.handleCalcClicked.bind(this);
  }

  render() {
    const {value1, value2, result} = this.state;

    return (
      <fieldset>
        <label htmlFor="value1">First value</label>
        <input type="text" name="value1" value={value1} onChange={this.handleOnChange}/>
        <br/>

        <label htmlFor="value2">Second value</label>
        <input type="text" name="value2" value={value2} onChange={this.handleOnChange}/>
        <br/>

        <span className="label-wrapper" />
        <span className="value-wrapper">
          <button onClick={this.handleCalcClicked}>Calc</button>
        </span>
        <br/>

        {
          result &&
          <div>
            <span className="label-wrapper" />
            <span className="value-wrapper">{value1} + {value2} = {result}</span>
          </div>
        }
      </fieldset>
    );
  }

  private handleOnChange(e: SyntheticEvent<HTMLInputElement>) {
    let {name, value} = e.target as any;

    if (!name) {
      throw new Error('name is null');
    }
    if (!value) {
      throw new Error('value is null');
    }

    this.setState((prevState, props) => ({
      ...prevState,
      [name]: value
    }));
  }

  private handleCalcClicked() {
    let {value1, value2} = this.state;

    const mathCalc = new MathCalc();
    const result = mathCalc.add(Number(value1), Number(value2));

    this.setState(prevState => ({
      ...prevState,
      result
    }));
  }
}

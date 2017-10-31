import * as React from 'react';
import { configure, mount, shallow } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import Calculator, { CalculatorState } from './Calculator';

describe('<Calucaltor />', () => {
  beforeAll(() => {
    configure({adapter: new ReactSixteenAdapter()});
  });

  it('renders without crashing', () => {
    const sut = shallow(<Calculator/>);
    expect(sut).not.toBeNull();
  });

  it('should render value1, value2 and a button', () => {
    const sut = mount(<Calculator/>);
    expect(sut).not.toBeNull();

    const controls = {
      value1: sut.find('[name="value1"]').first(),
      value2: sut.find('[name="value2"]').first(),
      button: sut.find('button').first()
    };

    expect(controls.value1.length).toBe(1);
    expect(controls.value2.length).toBe(1);
    expect(controls.button.text()).toBe('Calc');
  });

  it('should set state if value1 and value2 is changed', () => {
    let sut = shallow(<Calculator/>);
    expect(sut).not.toBeNull();

    const controls = {
      value1: sut.find('[name="value1"]').first(),
      value2: sut.find('[name="value2"]').first(),
    };

    expect(controls.value1.length).toBe(1);
    expect(controls.value2.length).toBe(1);

    controls.value1.simulate('change', {target: {name: 'value1', value: 123}});
    controls.value2.simulate('change', {target: {name: 'value2', value: 456}});

    let state: CalculatorState = sut.state();
    expect(state.value1).toBe(123);
    expect(state.value2).toBe(456);
  });

  it('should return correct value if calc was clicked', () => {
    let sut = shallow(<Calculator/>);
    const controls = {
      value1: sut.find('[name="value1"]').first(),
      value2: sut.find('[name="value2"]').first(),
      button: sut.find('button').first()
    };

    Object.keys(controls).forEach(x => expect(controls[x].length).toBe(1));

    controls.value1.simulate('change', {target: {name: 'value1', value: 1}});
    controls.value1.simulate('change', {target: {name: 'value2', value: 1}});
    controls.button.simulate('click');

    let state: CalculatorState = sut.state();
    expect(state.result).toBe(2);
  });
});
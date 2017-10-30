import * as React from 'react';
import { configure, mount, shallow } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import Calculator from './Calculator';

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
    expect(sut.find('[name="value1"]').length).toBe(1);
    expect(sut.find('[name="value2"]').length).toBe(1);
    expect(sut.find('button').text()).toBe('Calc');
  });

  it('should set state if value1 is changed', () => {
    let sut = mount(<Calculator/>);
    expect(sut).not.toBeNull();

    const value1 = sut.find('[name="value1"]').first();
    expect(value1).not.toBeNull();

    value1.simulate('change', {target: {name: 'value1', value: 4711}});
    expect(sut.state()['value1']).toBe(4711);
  });
});
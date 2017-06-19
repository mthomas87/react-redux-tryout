import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import {Square} from '../Square';

let props, squareShallow;

beforeEach(() => {
    props = {
        onClick: () => {
            return null;
        },
        value: ''
    };

    squareShallow = shallow(<Square {...props}/>);
    // loginFormMount = mount(<LoginForm {...props}/>);
});

it('Square component is not null', () => {
    expect(squareShallow).to.be.not.null;
});

it('should render with square Button', () => {
    if (squareShallow) {
        expect(squareShallow.containsAllMatchingElements([
            <button className="square" />,
        ])).to.equal(true);
    }
});
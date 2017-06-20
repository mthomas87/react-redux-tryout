import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';
// import {describe, it, beforeEach} from 'mocha';
import {Square} from '../Square';


describe('<Square />', () => {
    let props, squareShallow, squareMount;

    beforeEach(() => {
        props = {
            onClick: () => {
                return 'X';
            },
            value: ''
        };

        squareShallow = shallow(<Square {...props}/>);
        // squareMount = mount(<Square {...props}/>);
    });

    it('Square component is not null', () => {
        expect(squareShallow).to.be.not.null;
    });

    it('Square component contains class square', () => {
        expect(squareShallow.prop('className')).to.equal('square');
    });

    it('simulates click events', () => {
        const onClick = sinon.spy();
        squareShallow.find('.square').simulate('click');

        // console.log(onClick);

        expect(onClick.calledOnce).to.equal(true);
        // expect(squareShallow.text()).to.equal('X');
    });
});

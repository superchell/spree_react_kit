// Core
import React from 'react';
import { shallow } from 'enzyme';

// Test component
import Seo from '../';


const result = shallow(<Seo />);

describe('Компонент Scheduler:', () => {
    describe('должен иметь базовую разметку JSX:', () => {
        test('должен соответствовать снепшоту разметки', () => {
            expect(result).toMatchSnapshot();
        });
    });
});

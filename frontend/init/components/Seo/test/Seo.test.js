// Core
import React from 'react';
import { mount } from 'enzyme';

// Test component
import Seo from '../';

const props = {
    title: 'TestString',
};

const result = mount(<Seo { ...props } />);

describe('Компонент Seo:', () => {
    describe('должен иметь базовую разметку JSX:', () => {
        test('должен соответствовать снепшоту разметки', () => {
            expect(result).toMatchSnapshot();
        });
    });

    describe('должен иметь базовые пропсы, полученные от родительского компонента:', () => {
        describe('title — заголовок для <title>', () => {
            test('должен существовать', () => {
                expect(result.prop('title')).toBeDefined();
            });
            test('должен иметь строковый тип', () => {
                expect(typeof result.prop('title')).toBe('string');
            });
        });
    });
});

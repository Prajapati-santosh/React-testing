import { cleanup, render, screen } from '@testing-library/react';
import Todo from '../Todo';
import { Simulate } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

afterEach(()=>{
    cleanup;
})

test('tests todo component',()=>{
    render(<Todo/>);
    const todoEle=screen.getByTestId('test-2');
    expect(todoEle).toBeInTheDocument();
    expect(todoEle).toHaveTextContent('Hello world');
    

})

test('test todo comopnent button',()=>{
    render(<Todo/>);
    const todoEle=screen.getByTestId('test-1');
    Simulate.input(todoEle,"Hello")
})

test('test to do snapshots',()=>{
    const tree=renderer.create(<Todo/>);
    expect(tree).toMatchSnapshot();
})
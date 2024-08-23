import {render, screen} from "@testing-library/react";
import Card from "../Card";

test('Testing card component',()=>{
    render(<Card/>);
    const ele=screen.findAllByTestId('test-1');
    const element=document.querySelector('.container');
    const elen=screen.findByText('Card TitleThis is a description of the card. It provides some details about the content of the card');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent();

})
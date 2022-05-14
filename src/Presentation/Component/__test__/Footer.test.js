import { render, screen, fireEvent } from '@testing-library/react';
import Footer from "../Footer/index"

const mockedSetTodo = jest.fn();

describe("footer", () => {

    it('should render footer with word that will sned it props', () => {
        render(
            <Footer  footer="saeed footer"/>
        );
        const inputElement = screen.getByText(/Copyright/i);
        expect(inputElement).toHaveTextContent("saeed");
    });
     
})
import { render, screen, cleanup } from '@testing-library/react';
import Title  from './Title';

it('should render Hello', () => {
    render(<Title />);
    const helloElement = screen.getByText(/Hello World/i);
    expect(helloElement).toBeInTheDocument();
})
import { render, screen } from '@testing-library/react';
import Form from './form';

describe('Form', () => {
  it('should work as expected', () => {
    const { container } = render(<Form />);

    //const element = screen.getByText('The Bots Frontend coding challenge');

    //expect(element).toBeDefined();
  });

  it('should output lowercase only after uppercase input', () => {});

  it('should take an input with mixed chars and only ouput alphabet chars with default cipher settings', () => {});

  it('should output xxxxxx with given input and cipher shift of 2', () => {});

  it('should change the output to xxxxx when shift is changed after given input', () => {});
});
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Form from './form';

describe('Form', () => {
  it('should output lowercase only after uppercase input', async() => {
    render(<Form />);
    await userEvent.type(screen.getByTestId('cipherInput'), 'ABCDE');
    expect(screen.getByText(/nopqr/)).toBeInTheDocument();
  });

  it('should take an input with mixed chars and only output alphabet chars with default cipher settings', async() => {
    render(<Form />);
    await userEvent.type(screen.getByTestId('cipherInput'), 'A+b1cdE@');
    expect(screen.getByText(/nopqr/)).toBeInTheDocument();
  });

  it('should output cdefg with given input and cipher shift of 2', async() => {
    render(<Form />);
    await userEvent.type(screen.getByTestId('cipherInput'), 'abcde');
    await userEvent.type(screen.getByTestId('shiftInput'), '2');
    expect(screen.getByText(/cdefg/)).toBeInTheDocument();
  });

  it('should change the output to xxxxx when shift is changed after given input', async() => {
    render(<Form />);
    await userEvent.type(screen.getByTestId('cipherInput'), 'abcde');
    expect(screen.getByText(/nopqr/)).toBeInTheDocument();
    await userEvent.type(screen.getByTestId('shiftInput'), '14');
    expect(screen.getByText(/opqrs/)).toBeInTheDocument();
  });
});
import { render, screen, fireEvent } from '@testing-library/react';
import Contact, { emailDraft } from './components/Contact';
import Experience from './components/Experience';
import Skills from './components/Skills';

test('contact uses the portfolio owner and creates a correctly encoded email draft', () => {
  render(<Contact />);
  expect(screen.getByRole('link', {name: 'hkasireddy123@gmail.com'})).toHaveAttribute('href', 'mailto:hkasireddy123@gmail.com');
  const url = emailDraft({name: ' A & B ', email: 'a@example.com', message: 'Hello? #project'}, 'hkasireddy123@gmail.com');
  const query = new URLSearchParams(url.split('?')[1]);
  expect(query.get('subject')).toBe('Portfolio enquiry from A & B');
  expect(query.get('body')).toBe('Hello? #project\n\nFrom: A & B\nReply to: a@example.com');
});
test('shows confirmed work history and education', () => {
  render(<Experience />);
  expect(screen.getByText('Osprosys Software Systems')).toBeInTheDocument();
  expect(screen.getByText('Enkonix Software Services Pvt Ltd')).toBeInTheDocument();
  expect(screen.getByText(/Graduated 2025/)).toBeInTheDocument();
});
test('skill filters show the matching category without percentage ratings', () => {
  render(<Skills />);
  fireEvent.click(screen.getByRole('button', {name: 'Backend'}));
  expect(screen.getByRole('heading', {name: 'Django'})).toBeInTheDocument();
  expect(screen.queryByRole('heading', {name: 'Bootstrap'})).not.toBeInTheDocument();
  expect(screen.queryByText(/\d+%/)).not.toBeInTheDocument();
});

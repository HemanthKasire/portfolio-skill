import { render, screen, fireEvent } from '@testing-library/react';
import Contact, { emailDraft } from './components/Contact';
import Experience from './components/Experience';
import Skills from './components/Skills';
import About from './components/About';
import Certifications from './components/Certifications';
import PortfolioContent from './data/PortfolioContent';

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

test('about retains animated bars with factual skill descriptions', () => {
  const { container } = render(<About />);
  expect(container.querySelectorAll('.skill-bar')).toHaveLength(PortfolioContent.about.skills.length);
  expect(screen.getByText('Python & Django')).toBeInTheDocument();
  expect(screen.queryByText(/\d+%/)).not.toBeInTheDocument();
});
test('certification details open and close with keyboard and restore focus', () => {
  render(<Certifications />);
  const button = screen.getAllByRole('button', {name: 'View Details →'})[0];
  button.focus();
  fireEvent.click(button);
  expect(screen.getByRole('dialog', {name: 'Cisco Certified Network Technician'})).toBeInTheDocument();
  expect(document.body.style.overflow).toBe('hidden');
  fireEvent.keyDown(document, {key: 'Escape'});
  expect(document.body.style.overflow).not.toBe('hidden');
  expect(button).toHaveFocus();
});

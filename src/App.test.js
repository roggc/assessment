import { render, screen,prettyDOM } from '@testing-library/react';
import App from './App';

it('renders a header',()=>{
  const {container}=render(<App />)
  console.log(prettyDOM(container))
  expect(screen.getByTestId('header')).toBeInTheDocument()
})

it('renders a footer',()=>{
  render(<App />)
  expect(screen.getByTestId('footer')).toBeInTheDocument()
})

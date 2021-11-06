/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen } from '@testing-library/react'
 import Members from '../pages/members'
 
 describe('Members', () => {
   it('renders a heading', () => {


 const fakeMembers = [
  {
    "id": "136b5f58-957b-4403-94d4-32a254819b6c",
    "github": "github-1",
    "location": "location-1",
    "name": "name-1"
  },
  {
    "id": "28b665ee-15ac-45e5-85fb-7081530d9f09",
    "github": "github-2",
    "location": "location-2",
    "name": "name-2"
  }
];

global.fetch = jest.fn().mockImplementation(() =>
Promise.resolve({
  json: () => Promise.resolve(fakeMembers)
}))

     render(<Members />)
 
     const heading = screen.getByText(/Hi There, here are the members/i)
    //  const heading = screen.getByRole('paragraph', {
    //   name: /Hi There, here are the members/i,
    // })
     
 
     expect(heading).toBeInTheDocument()


    //  global.fetch.mockRestore();

    global.fetch.mockClear()
delete global.fetch

   })
 })
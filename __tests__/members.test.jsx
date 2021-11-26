/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen, act, within } from '@testing-library/react'
import Members from '../pages/members'

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

describe('Members', () => {
  it('fetch data', async () => {

    // Setup
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeMembers)
      }))

    await act(async () => render(<Members />))

    const list = screen.getByRole("list", {
      name: /Hi There, here are the members/i,
    })

    expect(fetch).toBeCalledWith('http://localhost:3000/api/members')

    const { getAllByRole } = within(list)
    const items = getAllByRole("listitem")
    expect(items.length).toBe(2)


    expect(items[0]).toHaveTextContent(/name-1/i)
    expect(items[1]).toHaveTextContent(/name-2/i)

    // Cleanup
    global.fetch.mockClear()
    delete global.fetch
  })
})
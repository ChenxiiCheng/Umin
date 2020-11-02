import React from "react"
import { cleanup } from "@testing-library/react"

import { render } from "../../test-utils"
import { Header } from '../../components/Header';

afterEach(cleanup)

describe('Test <Header />', () => {
  test('should render links, buttons, icons, avatar, image correctly', () => {
    const { getByTestId, getByAltText, container } = render(<Header />)
    
    expect(getByTestId('links')).toBeTruthy()
    expect(getByTestId('btn__download')).toBeTruthy()
    expect(getByTestId('btn__premium')).toBeTruthy()
    expect(getByTestId('icon__clipboard')).toBeTruthy()
    expect(getByTestId('icon__bell')).toBeTruthy()
    expect(getByTestId('avatar')).toBeTruthy()
    expect(getByAltText('new feature')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
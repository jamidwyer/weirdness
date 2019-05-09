import React from 'react'
import Enzyme, { shallow } from 'enzyme'

import { Home } from  '../../../src/js/common/components/Home'

const fixture = {
  home: {
    result: {
      testing: 'data',
    },
  },
};

describe('HomeView', () => {
  it('should render a blank div without data', () => {
    const el = shallow(<Home />)

    expect(el.length).toEqual(1)
    expect(el.find('.homeOutput').length).toEqual(0)
  })

  it('should render with correct data', () => {
    const el = shallow(
      <Home {...fixture} />
    )

    expect(el.length).toEqual(1)
    expect(el.find('.homeOutput').length).toEqual(1)
  })
})

import { reducers, constants, actions, initialState } from  '../../../src/js/redux/modules/home'
import { getStore } from '../../../__fixtures__/store'

const fixture = {
  title: 'fake-title',
  description: 'fake-description',
  source: 'fake-source',
}

describe('redux.modules.home', () => {
  let store = null;

  beforeEach(() => {
    store = getStore({
      home: initialState()
    });
  });

  afterEach(() => {
    store = null;
  })

  it('should return correct state when running updateHome', () => {
    const type = constants.UPDATE_HOME
    const state = store.getState().home

    const result = reducers[type](state, { payload: fixture })

    expect(result.get('source')).toEqual(fixture.source)
    expect(result.get('title')).toEqual(fixture.title)
  })
})

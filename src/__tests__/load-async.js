import '@testing-library/jest-dom'
import {render, waitForElement} from '@testing-library/vue'
import LoadAsync from './components/LoadAsync.vue'

beforeEach(() => {
  // the only way vue-jest supports `import()` is through transforming async imports to deferred requires.
  // however deferred requires will cause the import to happen asynchronously once, and synchronously on subsequent calls.
  // therefore to get isolation in test behavior, require cache needs to be reset each time a mount happens.
  // @see https://github.com/vuejs/vue-jest/issues/20
  jest.resetModules()
  // eslint-disable-next-line no-unused-vars
  // const foo = require('./components/LoadAsync.vue').default
})

test('should render async component', async () => {
  const {getByText} = render(LoadAsync)

  await waitForElement(() => getByText('Hello World!'))
})

test('exposes store to async rendered component', async () => {
  // const { getByText } = render(LoadAsync, {
  //     store: {
  //         state: {
  //             title: 'foo'
  //         }
  //     }
  // })
  // await waitForElement(() => getByText('foo'))
})

import { render, cleanup } from '@testing-library/vue'
import Form from './components/Form'

afterEach(cleanup)

test('Form contains search button', () => {
  const { getByText } = render(Form, {
    stubs: ['FontAwesomeIcon']
  })
  getByText('Search now')
})

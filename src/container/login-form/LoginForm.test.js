import Enzyme, { mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { LoginForm } from './LoginForm'
import { Provider } from 'react-redux'
import store from '../../store'

Enzyme.configure({ adapter: new Adapter() })
describe('test LoginForm', () => {
	let wrapper

	beforeEach(() => {
		wrapper = mount(
			<Provider store={store}>
				<LoginForm />
			</Provider>
		)
	})

	afterAll(() => {
		wrapper.unmount()
	})

	test('render emailField', () => {
		expect(wrapper).toBeDefined()
		const emailField = wrapper.find('#email')
		const emailValue = emailField.get(0).props.value
		expect(emailValue).toEqual('')

		const passwordField = wrapper.find('#password')
		const passwordValue = passwordField.get(0).props.value
		expect(passwordValue).toEqual('')

		const buttonsubmit = wrapper.find('button')
		expect(buttonsubmit).toBeDefined()
	})

	test.skip('render email', () => {
		const email = wrapper.find('.email').get(0)
		expect(email).toHaveProperty('type', 'input')
	})

	test.skip('render name email ', () => {
		const email = wrapper.find('.email').get(0).props.name
		expect(email).toMatch('email')
	})

	test('render password', () => {
		const password = wrapper.find('password').get(0)
		console.log(password)
		expect(password).toHaveProperty('type', 'password')
	})
})

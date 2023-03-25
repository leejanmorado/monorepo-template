import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Button component', () => {
	let container: HTMLElement;

	beforeEach(() => {
		({ container } = render(<App />));
	});

	it('matches DOM snapshot', () => {
		expect(container.firstChild).toMatchSnapshot();
	});

	it('increments counter', async () => {
		// arrange
		const user = userEvent.setup();
		const button = screen.getByRole('button', { name: 'Click Me' });

		// act
		await user.click(button);

		// assert
		expect(screen.getByText('Count: 1')).toBeInTheDocument();
	});
});

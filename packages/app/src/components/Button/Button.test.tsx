import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Button } from '@components';

describe('Button component', () => {
	it('matches DOM snapshot', () => {
		const { container } = render(<Button>Click me</Button>);

		expect(container.firstChild).toMatchSnapshot();
	});
});

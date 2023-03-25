
import { Button } from '@components';
import { useState } from 'react';

const App: React.FC = () => {
	const [count, setCount] = useState<number>(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div className='h-screen bg-gray-900 text-2xl sm:text-5xl lg:text-8xl'>
			<div className='flex h-full flex-col items-center justify-center'>
				<p className='mb-4 w-full text-center text-white'>Count: {count}</p>
				<Button onClick={handleClick}>Click Me</Button>
			</div>
		</div>
	);
};

export default App;

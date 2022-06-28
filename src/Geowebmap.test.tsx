import { render } from '@testing-library/react';
import Geowebmap from 'Geowebmap';

test('Initialize map', () => {
    const { container } = render(<Geowebmap />);
    expect(container.firstChild).toHaveClass('main');
});

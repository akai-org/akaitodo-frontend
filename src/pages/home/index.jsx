import Home from './Home';
import Guard from '../../auth/Guard';

const HomeGuard = () => {
    return <Guard component={Home} />;
};

export default HomeGuard;

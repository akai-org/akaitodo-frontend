import Settings from './Settings';
import Guard from '../../auth/Guard';

const SettingsGuard = () => {
    return <Guard component={Settings} />;
};

export default SettingsGuard;

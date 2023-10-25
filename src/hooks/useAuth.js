import { useSelector } from 'react-redux/es/hooks/useSelector';
import { authSelector } from '../store/slices/Auth';

const useAuth = (prop) => {
    const { user } = useSelector(authSelector);

    return user[prop];
};

export default useAuth;

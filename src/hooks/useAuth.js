import { useSelector } from 'react-redux/es/hooks/useSelector';
import { authSelector } from '../store/slices/Auth';

const useAuth = () => useSelector(authSelector);

export default useAuth;

import { useSelector } from 'react-redux/es/hooks/useSelector';
import { authSelector } from '../store/slices/Auth';

//Functionality

// dispatch {nameOfSlice/reducerName}
// Shorten useSelector and useDispatch

const useAuth = () => useSelector(authSelector);

export default useAuth;

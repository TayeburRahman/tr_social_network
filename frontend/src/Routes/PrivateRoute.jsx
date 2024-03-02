import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { loading, isAuthenticated, user } = useSelector(state => state.user);

    return (
        <>
            {loading === false && (
                isAuthenticated === false||undefined ? <Navigate to="/login" /> : children
            )}
        </>
    );
};

export default PrivateRoute;



// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import useAuth from "./useAuth";

// const PrivateRoute = ({ children }) => {

//     const { loading, isAuthenticated, user } = useSelector(state => state.user);
//     const isLoggedIn = useAuth(); 

//     return (
//      isLoggedIn ? children : <Navigate to='/login'/>
//     );
// };

// export default PrivateRoute;


 
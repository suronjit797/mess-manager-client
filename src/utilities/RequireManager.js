import React from 'react';
import { useSelector } from 'react-redux';

const RequireManager = ({children}) => {
    const user = useSelector(state => state.user.user)

    if(Object.keys(user).length === 0){
        return <h4 className="text-danger"> Loading... </h4>
    }

    if(user.post.toLowerCase() === 'manager'){
        return children
    }
    return <h4 className="text-danger"> Only manager can handle this part </h4>

};

export default RequireManager;
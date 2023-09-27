import React, { useEffect } from 'react';
import { getOneUser, clearOneUserState } from '../store/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {
    const { oneUser } = useSelector(state => state.users);
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneUser(id));
        return () => dispatch(clearOneUserState());
    }, []);

  return (
    <>
        {oneUser ? (
            <div>
                <p>Name: { oneUser.name }</p>
                <p>Position: { oneUser.position }</p>
                <p>Expirience: { oneUser.expirience }</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        ) : (
            <h3>Loading...</h3>
        )}
    </>
  )
}

export default UserDetails
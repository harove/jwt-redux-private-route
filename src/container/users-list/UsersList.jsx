import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usersList } from "../../store/users/actions";
import { usersSelectorFunction } from "../../store/users/selectors";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'

function UsersList() {
  const users = useSelector((state) => state.users.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(usersList());
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div className="list-group-item">
            <div className="row">
              <div className="col-4">{user.name}</div>
              <div className="col-4">{user.username}</div>
              <div className="col-4"><Link to={`/users/remove/${user.email}`} className="btn btn-danger">delete</Link></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UsersList;

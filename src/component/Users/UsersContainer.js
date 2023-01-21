import React from "react";
import User from "./User";

const UsersContainer = ({ users, handleAll, handleRemove }) => {
  return <div className={`grid grid-cols-1 md:grid-cols-3 gap-2 `}>{users?.length === 0 ? <h2>Ops! Nothing Was Found</h2> : users.map((curr) => <User user={curr} key={curr.id}></User>)}</div>;
};

export default UsersContainer;

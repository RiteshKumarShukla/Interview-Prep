import React from "react";

const UserRow = ({ name, gender, role, maritalStatus, id }) => {
  return (<>
  
    
    <tbody>
      <tr key={id}>
      <td>{id}</td>
        <td>{name}</td>
        <td>{gender}</td>
        <td>{role}</td>
        <td>{maritalStatus}</td>
      </tr>
    </tbody>
  
  </>);
};  
export { UserRow };

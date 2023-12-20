import { useState } from "react";

function User(){
    const [users, setUsers] = useState([
        {
            userId: 0,
            userName: 'Creola Katherine Johnson',
        },{
            userId: 1,
            userName: 'Mario José',
        },{
            userId: 2,
            userName: 'Mohammad Abdus',
        },{
            userId: 3,
            userName: 'Percy Lavon',
        }
    ]);

    const removeElement = (index) => {
        const newUsers = users.filter((i) => i.userId !== index);
        setUsers(newUsers);
    }
    return(
        <div>
            {users.map((user, index) => (
                <ul>
                    <li key={index}>{user.userName}
                        <button onClick={()=>removeElement(index)}>Delete</button>
                    </li>
                </ul>
            ))}
        </div>
    );
}   
    
    
export default User
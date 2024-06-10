import {useState} from "react"

const ListRender = () => {
    const [list] = useState(["Gabriel", "Paulo", "Bruno", "Maria"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Joao", age: 31},
        {id: 2, name: "Pedro", age: 21},
        {id: 3, name: "Joaquim", age: 44},
    ])

    const deleteRandom = () => {
        const RandomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((users) => RandomNumber !== users.id);
        })
    }

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((users) => (
                  <li key={users.id}> {users.name} - {users.age}</li>  
                ))}
            </ul>
            <ul>
                <button onClick={deleteRandom}>Delete Random User</button>
            </ul>
        </div>
    )
}

export default ListRender
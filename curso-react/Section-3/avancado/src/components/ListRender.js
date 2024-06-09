import {useState} from "react"

const ListRender = () => {
    const [list] = useState(["Gabriel", "Paulo", "Bruno", "Maria"]);

    const [users] = useState([
        {id: 1, name: "Joao", age: 31},
        {id: 7463721, name: "Pedro", age: 21},
        {id: 233215, name: "Joaquim", age: 44},
    ])

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
        </div>
    )
}

export default ListRender
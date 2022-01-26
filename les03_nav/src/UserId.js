import { useParams } from "react-router-dom"

function UserId() {
    let {userName} = useParams();
    return (
        <div>
            <a href="/Users">revers</a>
            <h2>User: {userName}</h2>
        </div>
    )
}

export default UserId
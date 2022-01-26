import { useLocation } from "react-router-dom"

function Users() {
    let url = useLocation();
    
    return (
        <>
            <h2>Users</h2>
            <ul>
                <li><a href={`${url.pathname}/ivanov`}>Ivanov</a></li>
                <li><a href={`${url.pathname}/petrov`}>Petrov</a></li>
                {/* <li><a href="/Users/ivanov">ivanov</a></li>
                <li><a href="/Users/petrov">Petrov</a></li> */}
            </ul>
        </>
    );
}

export default Users;
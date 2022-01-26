function Header(props) {
    return (
        <header>
            <h1>{props.data.site_name}</h1>
            <h2>{props.second}</h2>
            <Nav navig={props.data.nav} />
        </header>
    )
}

function Nav(props) {
    let data = props.navig
    const listItem = data.map(item => <li key={item.link}><a href={item.link}>{item.text} </a></li>)

    return (
        <nav>
            {listItem}
        </nav>
    )
}

export default Header
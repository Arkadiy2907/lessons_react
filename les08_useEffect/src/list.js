import React from "react"

class ListClass extends React.Component {

    state = {
        numbers: [1, 2, 3]
    }

    addNum = () => {
        const rundomNum = Math.round(Math.random() * 10)
        this.setState({
            numbers: [...this.state.numbers, rundomNum]
        })
    }

    componentDidMount() {
        console.log('componentDidMount')//только 1 раз при 1 отрисовке
    }

    componentDidUpdate(prevProps, prevState) {//только после изм-я пропсов или стэйта
        console.log(prevProps, prevState)//старые до того как компонент отображен
        console.log(this.props, this.state)//новые после того как компонент отображен

        if (prevState.numbers.length !== this.state.numbers.length)// проверка обновления
        {
            console.log("new numbers")
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")//перед удалением компонента
    }

    render() {
        return (
            <>
                <button onClick={this.addNum}>new nam</button>
                <ul>
                    {
                        this.state.numbers.map((el, index) => <li key={index}>{el}</li>)
                    }
                </ul>
            </>
        )
    }
}

export default ListClass;
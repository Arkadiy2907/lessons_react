import React from "react";

class ClassCycle extends React.Component {
    constructor(props) {
        console.clear()
        console.log('constructor')
        console.log(props)
        super();
        this.state = {
            count: 0, 
            // count: props.arg
        }       
    }

     handler = () => {
        let val = this.state.count
        val++
        this.setState({ count: val })
    }    

    static getDerivedStateFromProps(prpos, state) {
        console.log('get Derived State')
        return null
        // return({count: prpos.arg})
    }   
    
    componentDidMount() {
        console.log("component Did Mount")
    }

    componentDidUpdate() {
        console.log("component Did Update")
    }

    render() {
        console.log('render1')
        return (
            <>
                {console.log("render2")}
                <div>
                    <button onClick={this.handler}>Push</button>
                </div>   
                <div>
                    {this.state.count}
                </div>
            </>
        )
    }
}

export default ClassCycle
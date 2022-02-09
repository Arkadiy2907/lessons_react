import React from "react"
import Count from "./components/Count"
import IsThree from "./components/IsThree"

const App = () => {
	const [count1, setCount1] = React.useState(0)
	const [count2, setCount2] = React.useState(0)

	return (
		<div className="wrap">
			<p>count 1</p>
			<div>
				<button onClick={() => setCount1(count1 + 1)}>+</button>
				<Count id={1} value={count1} />
			</div>

			<p>count 2</p>
			<div>
				<button onClick={() => setCount2(count2 + 1)}>+</button>
				<Count id={2} value={count2} />
				<IsThree value={count2} />
			</div>

		</div>

	)
}

export default App;

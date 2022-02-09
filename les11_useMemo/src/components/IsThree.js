import React from "react";

let renderCount = 0

export default React.memo(function IsThree({ value }) {//React.memo если пропсы изменяются делается ререндер ВСЕГО компонента
	console.log(`isThree ${++renderCount}`)

	const getResult = React.useMemo(() => {//useMemo устанавливает условие при котором будет выполнятся ДАННАЯ функция
		let i = 0
		while (i < 500000000) i++//эта ф-я заставляет тормозить приложение
		return value === 3 ? `this three ;)` : ` this no three :(`
	}, [value])//при изменении value будет выполняться ф-я т е работает как эффект только возвращает результат

	return (
		<div>
			<h2>{getResult}</h2>
		</div>
	)
},
	(prevProps, nextProps) => {
		console.log(prevProps, nextProps)//чтоб рендер был только по условию ==3
		if (nextProps.value === 3) {
			return false //будет рендер
		} else {
			return true//рендера не будет  
		}
	}
)

//<h2>{getResult()}</h2> тут getResult уже возвращает строчку и не является ф-й потому пишем как <h2>{getResult}</h2>
// React.useMemo тут делает - если изменяется count1 то сложныая ф-я не запускается и лишь только при изменении count2 будет запускаться

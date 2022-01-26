import React from "react";
import './scss/style.scss';
import { useDispatch, useSelector } from "react-redux";
import { ADD, SUBTRACT } from "./action/ActionTypes"
import { arithmeticOperation, asinc_reset, addCustomAction, removeCustAction } from "./action/Action"
import { fetchCustom } from "./asyncActions/custAsinc"


function App() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count.count)
  const custom = useSelector(state => state.custom.custom)

  const addNamber = () => {
    dispatch(arithmeticOperation(ADD, 1))
  }

  const subtractNamber = () => {
    dispatch(arithmeticOperation(SUBTRACT, 1))
  }

  const addCustom = (name) => {
    const custom = {
      name,
      id: Date.now()
    }
    dispatch(addCustomAction(custom))
  }

  const removeCust = (custom) => {
    dispatch(removeCustAction(custom.id))
  }

  return (
    <div className="wrap">
      <div>
        <button onClick={() => addNamber()}>add</button>
        <button onClick={() => subtractNamber()}>subtract</button>
        <button onClick={() => dispatch(asinc_reset())}>resert</button>
        <h3>Number: <span className="counter">{count}</span></h3>
        <button onClick={() => addCustom(prompt())}>add</button>
        <button onClick={() => dispatch(fetchCustom())}>get new custom</button>
      </div>
      {custom.length > 0 ?
        <div>
          {custom.map(custom =>
            <div style={{ fontSize: '1.5rem' }} onClick={() => removeCust(custom)}>
              {custom.name}
              {custom.address.street}
            </div>
          )}
        </div>
        :
        <div style={{ fontSize: '1.5rem' }}>
          nothin
        </div>
      }
    </div>
  )
}

export default App;

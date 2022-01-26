import './styles.css'
import { createStore } from './createStor';
import { rootReducer } from './redax/rootReducer';
import {increment, decrement} from './redax/action'

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn  = document.getElementById('theme');

const store = createStore(rootReducer, 0)

addBtn.addEventListener('click', ()=> {
   store.dispatch(increment())
})

subBtn.addEventListener('click', ()=> {
    store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
    setTimeout(() => {
    
    })
})

store.subscribe(() => {
    const state = store.getState()
counter.textContent = state
}) 

store.dispatch({ type: "init_app" })
themeBtn.addEventListener('click', ()=> {
    // document.body.classList.toggle('dark')
})




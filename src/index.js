import ReactDOM from "react-dom/client";

// import App from './02_购物车案例/App';
// import "./02_购物车案例/App.css"

// import App from './03_组件的生命周期/App'
// import App from './04_组件的嵌套关系/App'
// import App from './05_组件通信-父传子/App'
// import App from './06_组件通信-子传父/App'
// import App from './07_组件通信案例/App'
// import App from './08_组件插槽实现/App'
// import App from './09_作用域插槽实现/App'
// import App from './10_非父子组件通信-Context/App'
// import App from './11_非父子组件通信-EventBus/App'
import App from "./12_setState详细使用/App";
// import App from './13_render函数的优化/02_pureComponent/App'
// import App from './14_数据不可变的力量/App'
// import App from './15_ref获取dom元素/App'
// import App from './16_受控和非受控组件/App'
// import App from './17_高阶组件/App'
// import App from './18_Portals的使用/App'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App rootData={{ name: "pak", age: 20 }} />);

console.log("-----");

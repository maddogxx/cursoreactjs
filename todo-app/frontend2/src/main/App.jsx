import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

import Todo from "../todo/Todo";
import About from "../about/About";
import Menu from "../template/Menu";

export default function App() {
    return (
        <div>
            <Menu />
            <Todo />
            <About />
        </div>
    );
}
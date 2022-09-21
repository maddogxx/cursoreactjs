export default function Menu() {

    return (
        <nav className="navbar navbar-inverse bg-inverse">
            <div className="container">
                <div className="navbar-header">
                    <a href="/teste" className="navbar-brand">
                        <i className="fa fa-calendar-check-o" /> TodoApp
                    </a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="/teste1">Tarefas</a></li>
                        <li><a href="/teste2">Sobre</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
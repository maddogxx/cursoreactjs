import "./menu.css";
import React from "react";

export default function Menu() {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <a href="/">Início</a>
                    </li>
                    <li>
                        <a href="/">Sobre</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

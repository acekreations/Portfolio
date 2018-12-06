import React, { Component } from "react";
import NavBar from "../../components/NavBar";

class Home extends Component {
    componentDidMount() {
        this.spinCycle();
    }

    runCylce = (words, time, i, cb) => {
        const container = document.getElementById("spinCylcle");
        container.innerHTML = "";
        if (i < words.length) {
            let h2 = document.createElement("h2");
            const text = document.createTextNode(words[i]);
            h2.appendChild(text);
            h2.setAttribute("class", "animated flipInX");
            h2.style.animationDuration = `${time}ms`;
            container.appendChild(h2);

            time += 50;
            i++;
            setTimeout(() => {
                cb(words, time, i, cb);
            }, time);
        } else {
            container.innerHTML =
                "<h2 class='animated flipInX faster' style='animation-delay:0.4s'>Full Stack Developer</h2>";
        }
    };

    spinCycle = () => {
        const words = [
            "CSS",
            "HTML",
            "jQuery",
            "Sass",
            "Heroku",
            "Bootstrap",
            "Github",
            "Javascript",
            "MySQL",
            "UIkit",
            "Express",
            "MongoDB",
            "Node"
        ];

        let time = 20;

        this.runCylce(words, time, 0, this.runCylce);
    };

    render() {
        return (
            <div className="uk-cover-container uk-height-viewport">
                <video autoPlay loop muted playsInline uk-cover="true">
                    <source src={"./assets/home.mp4"} type="video/mp4" />
                </video>
                <div
                    className="cover uk-panel uk-flex"
                    uk-parallax="background-color: #7244ca, #7244ca;"
                >
                    <NavBar />
                    <div className="uk-container uk-container-expand uk-flex uk-flex-center uk-flex-middle">
                        <div id="spinCylcle" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

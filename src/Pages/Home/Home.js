import React, { Component } from "react";
import NavBar from "../../components/NavBar";

class Home extends Component {
    componentWillMount() {
        this.props.changeBG("home.mp4");
    }

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
                "<h2 class='animated fadeInDown' style='animation-delay:1s'>Full Stack Developer</h2>";
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
            <div className="cover uk-panel uk-flex">
                <NavBar />
                <div className="uk-container uk-container-expand uk-flex uk-flex-center uk-flex-middle">
                    <div id="spinCylcle" />
                </div>
            </div>
        );
    }
}

export default Home;

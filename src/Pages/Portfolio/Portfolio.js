import React, { Component } from "react";
import portfolio from "../../portfolio";

class Portfolio extends Component {
    render() {
        return (
            <div
                className="cover uk-panel uk-flex"
                uk-parallax="background-color: #f8f9f8, #f8f9f8;"
            >
                <div className="uk-container uk-container-small containerSpacer">
                    {/* <div className="uk-child-width-1-2@s uk-child-width-1-1@m"> */}
                    <div
                        className="uk-child-width-1-3@m"
                        uk-grid="masonry: true"
                    >
                        {portfolio.data.map((item, i) => (
                            // <div
                            //     key={i}
                            //     className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
                            //     uk-grid="true"
                            //     uk-parallax="opacity: 0.7,1,1; viewport: 0.5;"
                            // >
                            //     {/* switch left or right media based on even or odd index */}
                            //     <div
                            //         className={
                            //             i % 2 === 0
                            //                 ? "uk - card - media - left uk-cover-container"
                            //                 : "uk-flex-last@s uk-card-media-right uk-cover-container"
                            //         }
                            //     >
                            //         <img
                            //             src={"./assets/" + item.image}
                            //             alt=""
                            //             uk-cover="true"
                            //         />
                            //         <canvas width="600" height="390" />
                            //     </div>
                            //     <div>
                            //         <div className="uk-card-body">
                            //             <h3 className="uk-card-title">
                            //                 {item.name}
                            //             </h3>
                            //             <p>{item.description}</p>
                            //             <div className="uk-flex uk-flex-left">
                            //                 <a
                            //                     href={item.link}
                            //                     className="cardLink"
                            //                 >
                            //                     <span uk-icon="icon: link; ratio: 1.3" />
                            //                 </a>
                            //                 <a
                            //                     href={item.github}
                            //                     className="cardLink"
                            //                 >
                            //                     <span uk-icon="icon: github-alt; ratio: 1.3" />
                            //                 </a>
                            //             </div>
                            //         </div>
                            //     </div>
                            // </div>

                            <div key={i}>
                                <div class="uk-card uk-card-default">
                                    <div class="uk-card-media-top">
                                        <img
                                            src={"./assets/" + item.image}
                                            alt=""
                                        />
                                    </div>
                                    <div class="uk-card-body">
                                        <h3 class="uk-card-title">
                                            {item.name}
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;

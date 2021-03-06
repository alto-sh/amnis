import React from "react";
import Draggable from "react-draggable";
import Particles from "react-particles-js";

import { cx } from "emotion";
import Styles from "./HomeStyles";

type Props = {};
type State = {

};

export default class Home extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);   

    }

    render() {
        return(
            <div>
                <h1>yes</h1>
                <Particles
                params={{
                    fps_limit: 28,
                    particles: {
                        collisions: {
                            enable: false
                        },
                        number: {
                            value: 200,
                            density: {
                                enable: false
                            }
                        },
                        line_linked: {
                            enable: true,
                            distance: 30,
                            opacity: 0.4
                        },
                        move: {
                            "speed": 1
                        },
                        opacity: {
                            anim: {
                                enable: true,
                                opacity_min: 0.05,
                                speed: 1,
                                sync: false
                            },
                            value: 0.4
                        }
                    },
                    polygon: {
                        enable: true,
                        scale: 0.5,
                        move: {
                            radius: 10
                        },
                        url: "../../../../public/assets/img/svg/AmnisLogo.svg",
                        inline: {
                            arrangement: "equidistant"
                        },
                        "draw": {
                            "enable": true,
                            "stroke": {
                                "color": "rgba(0, 0, 0, .2)"
                            }
                        }
                    },
                    retina_detect: false,
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "bubble"
                            }
                        },
                        modes: {
                            bubble: {
                                size: 6,
                                distance: 40
                            }
                        }
                    }
                }} />
                {/**
                <Particles
                params={{
                    particles: {
                        number: {
                            value: 200,
                            density: {
                                enable: true,
                                value_area: 2000
                            }
                        },
                        color: {
                            value: '#24292e'
                        },
                        opacity: {
                            value: 0.5,
                            anim: {
                                enable: true
                            }
                        },
                        size: {
                            value: 6,
                            anim: {
                                enable: true,
                                speed: 3
                            }
                        },
                        line_linked: {
                            enable: false
                        },
                        move: {
                            speed: 1,
                            direction: "top",
                            out_mode: "out"
                        }
                    }    
                }}    
            />
            **/}
        </div>
        
        )
    }

}
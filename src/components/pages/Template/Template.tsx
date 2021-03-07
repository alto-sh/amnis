import React from "react";

import { cx } from "emotion";
import Styles from "./TemplateStyles";
import Container from "react-bootstrap/Container";

import Particles from "react-tsparticles";
import "./Particles/particlesBg.css";
import particlesLight from "./Particles/particlesLight.json";
import particlesDark from "./Particles/particlesDark.json";
import { ISourceOptions } from 'tsparticles';

type Props = {
    dark?: boolean,
    toggleDarkMode: Function
};
type State = {};

export default class Template extends React.Component<Props, State> {

    render() {
        const theme = (this.props.dark ? Styles.templateDark : Styles.templateLight);
        const particlesOption = (this.props.dark ? particlesDark : particlesLight)
        return (
            <div>
                <Particles options={particlesOption as ISourceOptions}/>
                <div className={cx( Styles.template, theme )}>
                    <h1 className={cx( Styles.pageHeader )} onClick={() => { this.props.toggleDarkMode(); }}>Amnis&nbsp;<img src="../../../../public/assets/img/svg/AmnisLogo.svg" height="50px"/></h1>
                    <Container className={cx( Styles.containerStyles)}>
                        {this.props.children}
                    </Container>
                </div>
            </div>
        )
    }

}
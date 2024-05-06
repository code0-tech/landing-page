import React from "react";
import {Button, Container} from "@code0-tech/pictor";

import styles from "./Navigation.module.scss"
import Image from "next/image";

export const Navigation: React.FC = () => {

    return <div style={{position: "fixed", top: "2rem", left: "50%", transform: "translateX(-50%)", width: "100%", zIndex: 999}}>
        <Container>
            <div className={styles.nav}>
                <div className={styles.nav__container}>
                    <div className={styles.nav__item}>
                        <Image src={"/code0_logo.png"} width={"30"} height={"30"} alt={"Code0 Logo"}/>
                    </div>
                </div>
                <div className={styles.nav__container}>
                    <div className={styles.nav__item}>
                        <Button href={"https://discord.com/invite/vsMtqBBqC7"} color={"secondary"} variant={"none"}>
                            Discord
                        </Button>
                    </div>
                    <div className={styles.nav__item}>
                        <Button href={"mailto:nsammito@code0.tech"} color={"secondary"} variant={"none"}>
                            Contact
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    </div>

}
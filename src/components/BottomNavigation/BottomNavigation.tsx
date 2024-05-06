import styles from './BottomNavigation.module.scss';
import React from "react";
import {Container} from "@code0-tech/pictor";

export const BottomNavigation: React.FC<{children: React.ReactNode}> = ({children}) => {

    return <div className={styles['bottom-navigation']}>
        <Container display={"flex"} justify={"center"}>
            {children}
        </Container>
    </div>

}
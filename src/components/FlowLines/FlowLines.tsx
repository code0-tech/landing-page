import React from "react";

import styles from "./FlowLines.module.scss"

export const ParentFlowSplitter: React.FC = () => {
    return <div className={styles["parent-flow-splitter"]}>
        <div className={styles["parent-flow-splitter__left"]}/>
        <div className={styles["parent-flow-splitter__right"]}/>
    </div>
}

export const ChildFlowSplitter: React.FC<{pos: "right" | "left"}> = ({pos}) => {
    return <div className={styles["child-flow-splitter"]}>
        <div className={styles[`child-flow-splitter__${pos}`]}/>
    </div>
}

export const FlowSplitter: React.FC = () => {
    return <div className={styles["flow-splitter"]}/>
}
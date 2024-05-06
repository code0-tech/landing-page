import React from "react";
import {Col, Container, Quote, Row} from "@code0-tech/pictor";

export const CommunitySection: React.FC = () => {
    return <Container my={5}>
        <h1 style={{color: "white", fontSize: "3rem"}}>What our <span
            style={{color: "#70ffb2"}}>Community</span> says</h1>
        <Row mt={1}>
            <Col xs={12} lg={3} mb={1}>
                <Quote name={"Nico Sammito"} position={"Co-Founder Code0"} logo={"sds"}>
                    The product enables us to create complex backend infrastructure in no-time.
                    It completely replaces the need to lean any programming language and everyone can build flows.
                </Quote>
            </Col>
            <Col xs={12} lg={3} mb={1}>
                <Quote name={"Gero Liebig"} position={"Managing board GLS Germany"}
                       logo={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/GLS_Logo_2021.svg/2560px-GLS_Logo_2021.svg.png"}>
                    The product enables us to create complex backend infrastructure in no-time.
                    It completely replaces the need to lean any programming language and everyone can build flows.
                </Quote>
            </Col>
            <Col xs={12} lg={3} mb={1}>
                <Quote name={"Dario Pranjic"} position={"Co-Founder Code0"} logo={"sds"}>
                    The product enables us to create complex backend infrastructure in no-time.
                    It completely replaces the need to lean any programming language and everyone can build flows.
                </Quote>
            </Col>
            <Col xs={12} lg={3} mb={1}>
                <Quote name={"Niklas van Schrick"} position={"Gitlab Core-Team"}
                       logo={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/GitLab_logo.svg/2560px-GitLab_logo.svg.png"}>
                    The product enables us to create complex backend infrastructure in no-time.
                    It completely replaces the need to lean any programming language and everyone can build flows.
                </Quote>
            </Col>
        </Row>
    </Container>
}
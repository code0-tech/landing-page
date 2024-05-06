import React from "react";
import {Col, Container, Quote, Row} from "@code0-tech/pictor";

export const CommunitySection: React.FC = () => {
    return <Container my={5}>
        <h1 style={{color: "white", fontSize: "3rem"}}>What our <span
            style={{color: "#70ffb2"}}>Community</span> says</h1>
        <Row mt={1}>
            <Col xs={12} lg={3} mb={1}>
                <Quote name={"Nico Sammito"} position={"Co-Founder Code0"} logo={"/code0_logo.png"}>
                    The platform enables everyone to create complex backend infrastructure in no-time.
                    It completely replaces the need to learn any programming language and everyone can build flows.
                </Quote>
            </Col>
            <Col xs={12} lg={3} mb={1}>
                <Quote name={"Dario Pranjic"} position={"Co-Founder Code0"} logo={"sds"}>
                    Code0 is a game-changer, simplifying the creative process and letting me focus on the big picture without any coding needed
                </Quote>
            </Col>
            <Col xs={12} lg={3} mb={1}>
                <Quote name={"Niklas van Schrick"} position={"Gitlab Core-Team"}
                       logo={""}>
                    The product enables us to create complex backend infrastructure in no-time.
                    It completely replaces the need to lean any programming language and everyone can build flows.
                </Quote>
            </Col>
        </Row>
    </Container>
}
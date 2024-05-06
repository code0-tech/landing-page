import React from "react";
import {Col, Container, Row, Text} from "@code0-tech/pictor";
import {FlowCard} from "@/components/FlowCard/FlowCard";

export const AdaptersSection: React.FC = () => {

    return <Container my={5}>
        <Row>
            <Col xs={12} lg={8}>
                <h1 style={{color: "white", fontSize: "3rem"}}>Planned <br/>
                    <span style={{color: "#70ffb2"}}>adapters </span> by us</h1>
                <Text size={"md"} mt={1} display={"block"}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                    ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                    dolores et ea rebum.
                </Text>
            </Col>
            <Col xs={12} lg={4} mt={1}>
                <Row>
                    <Col sm={12}>
                        <FlowCard parameters badge={"TRIGGER"} color={"secondary"}
                                  title={"Representational State Transfer"}
                                  description={"Build REST endpoints in seconds with integrated database and easy to use algorithms"}/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <FlowCard parameters badge={"TRIGGER"} color={"secondary"}
                                  title={"Representational State Transfer"}
                                  description={"Build REST endpoints in seconds with integrated database and easy to use algorithms"}/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <FlowCard parameters badge={"TRIGGER"} color={"secondary"}
                                  title={"Representational State Transfer"}
                                  description={"Build REST endpoints in seconds with integrated database and easy to use algorithms"}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
}
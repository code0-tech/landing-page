import React from "react";
import {Card, Col, Container, Row, Text} from "@code0-tech/pictor";
import {FlowCard} from "@/components/FlowCard/FlowCard";
import {ChildFlowSplitter, FlowSplitter, ParentFlowSplitter} from "@/components/FlowLines/FlowLines";

export const FlowSection: React.FC = () => {

    return <Container my={5}>
        <Row>
            <Col xs={12} lg={6}>
                <h1 style={{color: "white", fontSize: "3rem"}}>Create flows in <br/>
                    <span style={{color: "#70ffb2"}}>no-time</span></h1>
                <Text size={"md"} display={"block"} mt={1}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                    ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                    dolores et ea rebum.
                </Text>
            </Col>
            <Col xs={12} lg={6}>
                <div style={{opacity: ".5"}}>
                    <FlowCard badge={"TRIGGER"} color={"info"} title={"Representational State Transfer"}
                              description={"Build REST endpoints in seconds with integrated database and easy to use algorithms"}/>
                    <ParentFlowSplitter/>

                    <Row>
                        <Col xs={6}>
                            <ChildFlowSplitter pos={"left"}/>
                            <FlowCard badge={"DATABASE"} parameters color={"warning"} title={"Get User from Database"}
                                      description={"Build REST endpoints in seconds with integrated database and easy to use algorithms"}/>
                            <FlowSplitter/>
                            <FlowCard badge={"RETURN"} parameters color={"success"} title={"Get User from Database"}
                                      description={"Build REST endpoints in seconds with integrated database and easy to use algorithms"}/>
                        </Col>
                        <Col xs={6}>
                            <ChildFlowSplitter pos={"right"}/>
                            <FlowCard badge={"DATABASE"} parameters color={"warning"} title={"Get User from Database"}
                                      description={"Build REST endpoints in seconds with integrated database and easy to use algorithms"}/>
                            <FlowSplitter/>
                            <FlowCard badge={"RETURN"} parameters color={"success"} title={"Get User from Database"}
                                      description={"Build REST endpoints in seconds with integrated database and easy to use algorithms"}/>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </Container>

}
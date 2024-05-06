import React from "react";
import {Card, Col, Container, Row, Text} from "@code0-tech/pictor";
import {
    IconBrandAws,
    IconBrandDiscord,
    IconBrandGoogle, IconBrandMeta,
    IconBrandPaypal,
    IconBrandStripe,
    IconBrandTeams, IconBrandTwitch, IconBrandWhatsapp, IconBrandX
} from "@tabler/icons-react";

export const IntegrationsSection: React.FC = () => {

    return <Container my={5}>
        <Row>
            <Col xs={12} lg={4}>
                <Row>
                    <Col xs={3}>
                        <></>
                    </Col>
                    <Col xs={3}>
                        <Card gradient style={{
                            aspectRatio: "1/1",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            transform: "scale(0.85)"
                        }}>
                            <IconBrandDiscord size={32}/>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card gradient style={{
                            aspectRatio: "1/1",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            transform: "scale(0.65)"
                        }}>
                            <IconBrandTeams size={32}/>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card gradient style={{
                            aspectRatio: "1/1",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            transform: "scale(0.55)"
                        }}>
                            <IconBrandAws size={32}/>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <Card gradient style={{
                            aspectRatio: "1/1",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            transform: "scale(0.65)"
                        }}>
                            <IconBrandGoogle size={32}/>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card gradient color={"info"} style={{
                            aspectRatio: "1/1",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            transform: "scale(0.85)"
                        }}>
                            <IconBrandStripe size={32}/>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card gradient color={"info"} style={{
                            aspectRatio: "1/1",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            transform: "scale(0.95)"
                        }}>
                            <IconBrandPaypal size={32}/>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card gradient style={{
                            aspectRatio: "1/1",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            transform: "scale(0.65)"
                        }}>
                            <IconBrandWhatsapp size={32}/>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <Card gradient style={{
                            aspectRatio: "1/1",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            transform: "scale(0.55)"
                        }}>
                            <IconBrandX size={32}/>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card gradient style={{
                            aspectRatio: "1/1",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            transform: "scale(0.65)"
                        }}>
                            <IconBrandTwitch size={32}/>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card gradient style={{
                            aspectRatio: "1/1",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            transform: "scale(0.85)"
                        }}>
                            <IconBrandMeta size={32}/>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} lg={8} ta={"right"}>
                <h1 style={{color: "white", fontSize: "3rem"}}>Planned <br/>
                    <span style={{color: "#70ffb2"}}>integrations </span> by us</h1>
                <Text size={"md"} mt={1} display={"block"}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                    ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                    dolores et ea rebum.
                </Text>
            </Col>
        </Row>
    </Container>

}
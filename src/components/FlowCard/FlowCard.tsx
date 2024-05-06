import React, {ReactNode} from "react";
import {Badge, Card, Text} from "@code0-tech/pictor";
import {IconChevronDown} from "@tabler/icons-react";

export const FlowCard: React.FC<{
    color: "primary" | "secondary" | "info" | "success" | "warning" | "error",
    title: string,
    badge: string,
    description: ReactNode,
    parameters?: boolean
}> = (props) => {


    return <div>
        <Card style={{overflow: "unset", width: "100%", ...(props.color == "info" ? {borderColor: "#70ffb2"} : {})}}>
            <Card.Section border>
                <div style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <IconChevronDown size={16} style={{marginRight: ".5rem"}}/>
                    <Badge color={props.color} style={{marginRight: ".5rem"}}>{props.badge}</Badge>
                    {props.title}
                </div>
            </Card.Section>
            <Card.Section border>
                <Text size={"sm"}>
                    {props.description}
                </Text>
            </Card.Section>
            {!!props.parameters ? <Card.Section>
                <Text size={"xs"}>
                    Parameters
                </Text>
                <div>
                    ....
                </div>
            </Card.Section> : null}

        </Card>
    </div>
}
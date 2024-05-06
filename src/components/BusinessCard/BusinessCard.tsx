import {Card, Text} from "@code0-tech/pictor";
import {IconBrandLinkedin, IconMail, IconPhone} from "@tabler/icons-react";
import Image from "next/image";
import styles from "./BusinessCard.module.scss";
import React from "react";


interface BusinessCardType {
    name: string
    position: string
    mail: string
    phone: string
    linkedIn: string
}

export const BusinessCard: React.FC<BusinessCardType> = ({name, position, mail,phone, linkedIn}) => {
    return <Card color={"primary"} gradient variant={"filled"} className={styles["business-card"]}>
        <Card.Section border display={"flex"} align={"center"}>
            <Image src={"/code0_logo.png"} alt={"code0 logo"} width={50} height={50} style={{marginRight: ".5rem"}}/>
            <div>
                <Text display={"block"} size={"lg"} c={"#70ffb2"}>
                    {name}
                </Text>
                <Text size={"xs"}>
                    {position}
                </Text>
            </div>
        </Card.Section>
        <Card.Section border>
            <Text display={"block"} size={"md"}>
                Haberstraße 41
            </Text>
            <Text display={"block"} size={"md"}>
                51373, Leverkusen
            </Text>
            <Text display={"block"} size={"md"}>
                Germany
            </Text>
        </Card.Section>
        <Card.Section>
            <Text display={"flex"} align={"center"} mb={0.5} size={"md"}>
                <IconMail size={16} style={{marginRight: ".5rem"}}/>
                {mail}@code0.tech
            </Text>
            <Text display={"flex"} align={"center"} mb={0.5} size={"md"}>
                <IconPhone size={16} style={{marginRight: ".5rem"}}/>
                {phone}
            </Text>
            <Text display={"flex"} align={"center"} mb={0.5} size={"md"}>
                <IconBrandLinkedin size={16} style={{marginRight: ".5rem"}}/>
                {linkedIn}
            </Text>
        </Card.Section>
    </Card>
}
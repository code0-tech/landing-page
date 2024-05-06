"use client"

import {NextPage} from "next";
import {Navigation} from "@/components/Navigation/Navigation";
import {MainHeaderSection} from "@/static-components/MainHeaderSection";
import {FlowSection} from "@/static-components/FlowSection";
import {IntegrationsSection} from "@/static-components/IntegrationsSection";
import {AdaptersSection} from "@/static-components/AdaptersSection";
import {CommunitySection} from "@/static-components/CommunitySection";
import {RoadMapSection} from "@/static-components/RoadMapSection";

const LandingPage: NextPage = () => {


    return <>
        <Navigation/>
        <MainHeaderSection/>
        <FlowSection/>
        <IntegrationsSection/>
        <AdaptersSection/>
        <CommunitySection/>
    </>

}

export default LandingPage;
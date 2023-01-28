import { useEffect, useState } from "react";
import { Text, Anchor, Stack, Paper, List, Code } from '@mantine/core';
import { useInterval } from "@mantine/hooks";
import "../App.css" // have to import the css to get it to work

import { liner, printTextBlock } from "../utils/table_design_logic";

const Home = () => {

    const message = "Welcome to ggx2ac + archives: Nintendo earnings data and other video game companies ";
    const splitMessage = message.split("");

    const [textBlock, setTextBlock] = useState("");

    const [text, setText] = useState("");
    // const [textColour, setTextColour] = useState({});
    const [seconds, setSeconds] = useState(0);
    
    const interval = useInterval(() => setSeconds((s) => s + 1), 80);

    useEffect(() => {
        if (seconds === splitMessage.length) {
            interval.stop();
        } else {
            interval.start();

            setText(text + splitMessage[seconds])

            setTextBlock(liner(printTextBlock(text + " ".repeat(message.length-text.length),40),"−","both",true,40))
        }

    }, [seconds])

    return (

        <div>
            <Stack mb="md" align="center">
            <Code style={{backgroundColor: `rgba(0, 255, 255,0.2)`}} block>{textBlock}</Code>
            </Stack>
            <Paper shadow="sm" radius="xl" p="md" withBorder>
            <Stack align="center">
                <Text className="fade" mt="md" style={{textAlign: "center"}} size="lg">Also visit Install Base, it's a place to discuss and elaborate on the business side of the video game industry.</Text>
                    <Anchor className="fade" style={{textAlign: "center"}} mb="sm" href="https://www.installbaseforum.com/" target="_blank" >
                        https://www.installbaseforum.com/
                    </Anchor>
            </Stack>
            </Paper>        
            <Paper mt="sm" shadow="sm" radius="xl" p="md" withBorder>
            <Stack align="center">
                <Text className="fade" mt="md" style={{textAlign: "center"}} size="lg">Status</Text>
                <List listStyleType="disc">
                    {/* <List.Item>Nintendo -</List.Item> */}
                    <Text>Nintendo -</Text>
                    <List withPadding listStyleType="disc">
                        <List.Item>Latest update: Data added for Top Selling Titles from FY3/2012 to FY3/2023, special page also added. Added Consolidated Sales Information from FY3/2004 to FY3/2023. Moved Mobile Income data to Consolidated Sales Information and, added special page.</List.Item>
                        <List.Item>Future update planned: Notes section.</List.Item>
                    </List>
                    <Text>Capcom -</Text>
                    <List withPadding listStyleType="disc">
                        <List.Item>Latest update: Consolidated Financial Results from FY3/2004 to FY3/2023 added. Added Consolidated Financial Results, FY Game Series and Software Platform Shipments to special page.</List.Item>
                        <List.Item>Future update planned: Notes section.</List.Item>
                    </List>
                    <Text>Sega Sammy -</Text>
                    <List withPadding listStyleType="disc">
                        <List.Item>Latest update: Consolidated Operating Results from FY3/2005 to FY3/2023 added. Added Consolidated Operating Results, FY Series IP and Software Units to special page.</List.Item>
                        <List.Item>Future update planned: Notes section.</List.Item>
                    </List>
                    <Text>Bandai Namco -</Text>
                    <List withPadding listStyleType="disc">
                        <List.Item>Latest update: Consolidated Operating Results from FY3/2006 to FY3/2023 added. Added Consolidated Operating Results and FY Series IP to special page.</List.Item>
                    </List>
                    <Text>Koei Tecmo -</Text>
                    <List withPadding listStyleType="disc">
                        <List.Item>Latest update: Consolidated Operating Results from FY3/2010 to FY3/2023 added. Added Consolidated Operating Results to Special page.</List.Item>
                    </List>
                    <Text>Square Enix -</Text>
                    <List withPadding listStyleType="disc">
                        <List.Item>Latest update: Consolidated Financial Results from FY3/2004 to FY3/2023 added. Added Consolidated Financial Results and FY Series IP to special page.</List.Item>
                    </List>
                    <Text>Events -</Text>
                    <List withPadding listStyleType="disc">
                        <List.Item>Page update: Updated calendar for 19 of 22 companies from January to February 2023.</List.Item>
                    </List>
                    <Text>Games -</Text>
                    <List withPadding listStyleType="disc">
                        <List.Item>Latest update: Two games available to play.</List.Item>
                    </List>
                </List>
            </Stack>
            </Paper>        
        </div>
    );
};

export default Home;
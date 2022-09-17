import { useEffect, useState } from "react";
import { Text, Group, Space, SegmentedControl, Autocomplete, ColorPicker, Anchor, Stack, Paper} from "@mantine/core"
import "../App.css";
import { useInterval } from "@mantine/hooks";
import { useSelector, useDispatch } from "react-redux";
import { ADD_BACKGROUND_COLOUR } from "../features/backgroundReducer";
import CAPCOM_FY3_22 from "../components/capcom/CAPCOM_FY3_2022";

const yearsList = Array.from({length: 2}, (elem, index) => 
                    {
                            return "FY3/" + (2023 - index)
                    }) 

export default function Capcom() {

    const dispatch = useDispatch();

    const message = `Welcome, this is where you can find archived Capcom Platinum Titles data.`;

    const splitMessage = message.split("");

    const [text, setText] = useState("");
    const [textColour, setTextColour] = useState({})

    const [seconds, setSeconds] = useState(0);
    const interval = useInterval(() => setSeconds((s) => s + 1), 80);

    useEffect(() => {
        if (seconds === splitMessage.length) {
            setTextColour({ color: 'crimson', fontSize: 18, lineHeight: 1.4 });
            interval.stop();
        } else {
            interval.start();
            setText(text + splitMessage[seconds])
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seconds])

    const [value, setValue] = useState("Data by Fiscal Year");
    const [year, setYear] = useState("");

    const [colour, setColour] = useState("rgb(0, 255, 255)")

    const state: any = useSelector(state => state);

    useEffect(() => {
        const colourSplitReduce = colour.split("").reduce((acc, curr) => {
            return (curr === "b")
                ? acc + "ba"
                : (curr === ")")
                ? acc + ", .20)"
                : acc + curr
        }, "") // using reduce to create an rgba colour with 20% opacity so that the user only has to use an RGB slider.
               
        dispatch(ADD_BACKGROUND_COLOUR({
            colour: colourSplitReduce
        }))

    }, [colour, dispatch])

    return (

        <div>
            <Stack mb="md" align="center">
            <Paper shadow="sm" radius="lg" p="md" withBorder>
                <Text style={{textAlign: "center"}} sx={textColour} size="lg">{text}</Text>
            </Paper>
            </Stack>
            <Paper mb="md" shadow="sm" radius="xl" p="md" withBorder>
            <Stack align="center">
                <Text className="fade" mt="md" style={{textAlign: "center"}} size="lg">You should head to Install Base where my Capcom Platinum Titles data can be seen.</Text>
                    <Anchor className="fade" style={{textAlign: "center"}} mb="sm" href="https://www.installbaseforum.com/forums/threads/capcom-platinum-titles-for-fy3-23-as-of-june-30th-2022-34-109-titles-had-sales-this-quarter-two-new-titles-appear.965/" target="_blank" >
                    Capcom Platinum Titles for FY3/23 as of June 30th, 2022. 34/109 titles had sales this quarter, two new titles appear.
                    </Anchor>
            </Stack>
            </Paper>

            <Group position="center">

                <Autocomplete
                    dropdownPosition="bottom"
                    mb="sm"
                    mr="md"
                    placeholder="Select"
                    label="Select Fiscal Year from 2022 to 2023."
                    description={`Fiscal Year ending March ${(Number(year.slice(4,8))) ? year.slice(4,8) : "" }. (Type in the last two digits of the year to search quicker except 2020.)`}
                    radius="xl"
                    size="md"
                    limit={2}
                    data={yearsList}
                    value={year} 
                    onChange={setYear}
                />
                
                <Paper style={{backgroundColor: state.colour}} p="xs" radius="xl" withBorder>
                <Text size="sm" >
                Colour: {state.colour}
                </Text>    
                <ColorPicker 
                        withPicker={false}
                        size="lg"
                        mb="sm" 
                        swatchesPerRow={7} 
                        format="rgb" 
                        swatches={[
                            "rgb(0, 0, 0)", 
                            "rgb(0, 255, 255)", 
                            "rgb(0, 128, 128)",
                            "rgb(0, 0, 255)", 
                            "rgb(75, 0, 130)", 
                            "rgb(135, 30, 135)", 
                            "rgb(255, 0, 255)", 
                            "rgb(86, 29, 37)",
                            "rgb(173, 255, 47)",
                            "rgb(127, 184, 0)",
                            "rgb(0, 255, 0)", 
                            "rgb(128, 128, 128)",
                            "rgb(255, 0, 0)",
                            "rgb(227, 24, 9)",
                            "rgb(220, 20, 60)", 
                            "rgb(212, 81, 19)", 
                            "rgb(255, 165, 0)", 
                            "rgb(255, 215, 0)",
                            "rgb(200, 200, 200)",
                            "rgb(255, 196, 235)",
                            "rgb(255, 255, 255)", 
                        ]}
                        value={colour} 
                        onChange={setColour}
                        />
                        </Paper>

            </Group>

            {   (year === "FY3/2023" && value === "Data by Fiscal Year")
                ? <CAPCOM_FY3_22 />
                // : (year === "FY3/2022" && value === "Data by Fiscal Year")
                // ? <NINTENDO_FY3_22 />
                : null
            }
            
            { (year !== "" && value === "Data by Fiscal Year")
                ? (
                <Group position="center">
                    <Space h="xl" />
                    <Paper style={{backgroundColor: state.colour}} p="xs" radius="xl" withBorder>
                        <Text size="sm" >
                        Colour: {state.colour}
                        </Text>    
                    <ColorPicker 
                        withPicker={false}
                        size="lg"
                        mb="sm" 
                        swatchesPerRow={7} 
                        format="rgb" 
                        swatches={[
                            "rgb(0, 0, 0)", 
                            "rgb(0, 255, 255)", 
                            "rgb(0, 128, 128)",
                            "rgb(0, 0, 255)", 
                            "rgb(75, 0, 130)", 
                            "rgb(135, 30, 135)", 
                            "rgb(255, 0, 255)", 
                            "rgb(86, 29, 37)",
                            "rgb(173, 255, 47)",
                            "rgb(127, 184, 0)",
                            "rgb(0, 255, 0)", 
                            "rgb(128, 128, 128)",
                            "rgb(255, 0, 0)",
                            "rgb(227, 24, 9)",
                            "rgb(220, 20, 60)", 
                            "rgb(212, 81, 19)", 
                            "rgb(255, 165, 0)", 
                            "rgb(255, 215, 0)",
                            "rgb(200, 200, 200)",
                            "rgb(255, 196, 235)",
                            "rgb(255, 255, 255)", 
                        ]}
                        value={colour} 
                        onChange={setColour}
                        />
                        </Paper>
                </Group>
                ) : (
                    null
                )
            }
        </div>

    );
}
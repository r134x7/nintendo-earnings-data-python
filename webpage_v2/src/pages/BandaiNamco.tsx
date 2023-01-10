import { useEffect, useState } from "react";
import { Text, Group, Space, SegmentedControl, Autocomplete, ColorPicker, Anchor, Stack, Paper, Code} from "@mantine/core"
import "../App.css";
import { useInterval } from "@mantine/hooks";
import { useSelector, useDispatch } from "react-redux";
import { ADD_BACKGROUND_COLOUR } from "../features/backgroundReducer";
import BANDAI_NAMCO_COMPONENT from "../components/BANDAI_NAMCO_COMPONENT";
import BANDAI_NAMCO_CML from "../components/special/BANDAI_NAMCO_CML";

const currentYear = 2023;

const yearsList = Array.from({length: 5}, (elem, index) => 
                    {
                            return "FY3/" + (currentYear - index)
                    }) 

export default function BandaiNamco() {

    const dispatch = useDispatch();

    const message = `Bandai Namco (They publish Dark Souls), this is where you can find archived Series IP data.`;

    // const border = "+" + "−".repeat(86) + "+";

    const splitMessage = message.split("");

    const [text, setText] = useState("");
    // const [textColour, setTextColour] = useState({});
    // const [borderColour, setBorderColour] = useState({});

    const [seconds, setSeconds] = useState(0);
    const interval = useInterval(() => setSeconds((s) => s + 1), 80);

    useEffect(() => {
        if (seconds === splitMessage.length) {
            // setTextColour({ color: 'crimson', fontSize: 18, lineHeight: 1.4, textAlign: "center" });
            // setBorderColour({ color: 'crimson', fontSize: 21, lineHeight: 1.4 });
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
                ? acc +", .20)"
                : acc + curr
        }, "") // using reduce to create an rgba colour with 20% opacity so that the user only has to use an RGB slider.
               
        dispatch(ADD_BACKGROUND_COLOUR({
            colour: colourSplitReduce
        }))

    }, [colour, dispatch])

    const selectYearComponentNew = (yearsList: string[]) => 
    (yearUsed: string): JSX.Element | null => {

        // let [yearSelected] = yearsList.filter(elem => yearUsed === elem);

        let [yearIndexed] = yearsList.map((elem, index) => {  
                                return (yearUsed === elem)
                                        ? index
                                        : -1
                               }).filter(elem => elem !== -1);

        let yearsLength = yearsList.length;

        return (yearIndexed >= 0) ? <BANDAI_NAMCO_COMPONENT setIndex={yearIndexed} yearLength={yearsLength} /> : null
    };

    const selectYear = selectYearComponentNew(yearsList)    

    // const selectYear = (yearUsed: string, tuples: [string, JSX.Element][]): JSX.Element => {
    // const selectYearComponent = (objList: {year: string, component: JSX.Element}[]) => 
    // (yearUsed: string): JSX.Element | null => {
    //     // let [tupleYear, tupleComponent] = tuples.filter(elem => yearUsed === elem[0]).flat() // remember it returns a shallow copy...

    //     // return tupleComponent as JSX.Element

    //     let [yearSelected] = objList.filter(elem => yearUsed === elem.year)

    //     return (yearSelected) ? yearSelected.component : null
    // }

    // const tupleList: [string, JSX.Element][] = [
    //     ["FY3/2022", <BANDAI_NAMCO_FY3_2022 />],
    //     ["FY3/2021", <BANDAI_NAMCO_FY3_2021 />],
    //     ["FY3/2020", <BANDAI_NAMCO_FY3_2020 />],
    //     ["FY3/2019", <BANDAI_NAMCO_FY3_2019 />],
    // ];

    // const componentList = [
    //     {
    //         year: "FY3/2022", 
    //         component: <BANDAI_NAMCO_FY3_2022 />
    //     },
    //     {
    //         year: "FY3/2021", 
    //         component: <BANDAI_NAMCO_FY3_2021 />
    //     },
    //     {
    //         year: "FY3/2020", 
    //         component: <BANDAI_NAMCO_FY3_2020 />
    //     },
    //     {
    //         year: "FY3/2019", 
    //         component: <BANDAI_NAMCO_FY3_2019 />
    //     },
    // ];

    // const selectYear = selectYearComponent(componentList)    

    return (

        <div>
            <Stack mb="md" align="center">
            {/* <Paper shadow="sm" radius="lg" p="md" withBorder> */}
                {/* <Text style={{textAlign: "center"}} sx={borderColour} size="xl">{border}</Text> 
                <Text sx={textColour} size="lg">{text}</Text>
                <Text style={{textAlign: "center"}} sx={borderColour} size="xl">{border}</Text>  */}
            {/* </Paper> */}
            <Code style={{backgroundColor: `${state.colour}`}} >{text}</Code>
            </Stack>
            <Paper mb="md" shadow="sm" radius="xl" p="md" withBorder>
            <Stack align="center">
                <Text className="fade" mt="md" style={{textAlign: "center"}} size="lg">While you're here, read about the mysterious Sega Super Genesis 32.</Text>
                    <Anchor className="fade" style={{textAlign: "center"}} mb="sm" href="https://www.installbaseforum.com/forums/threads/ggx2ac-and-the-mysterious-case-of-the-sega-trademark-super-genesis-32.915/" target="_blank" >
                    ggx2ac and the mysterious case of the Sega trademark: Super Genesis 32
                    </Anchor>
            </Stack>
            </Paper>
            <SegmentedControl 
                mb="sm"
                mt="sm"
                fullWidth
                orientation="horizontal"
                value={value}
                onChange={setValue}
                data={[
                    "Data by Fiscal Year",
                    "Special Page",
                ]}
            />

            {
                (value === "Data by Fiscal Year")
                ? 
            <Group position="center">

                <Autocomplete
                    dropdownPosition="bottom"
                    mb="sm"
                    mr="md"
                    placeholder="Select"
                    label={`Select Fiscal Year from ${currentYear - (yearsList.length-1)} to ${currentYear}.`}
                    description={`Fiscal Year ending March ${(Number(year.slice(4,8))) ? year.slice(4,8) : "" }. (Type in the last two digits of the year to search quicker except 2020.)`}
                    radius="xl"
                    size="md"
                    limit={5}
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
                : <BANDAI_NAMCO_CML />
            }

            {   (value === "Data by Fiscal Year")
                ? selectYear(year)
                : null
            }
            
            { (selectYear(year) !== null && value === "Data by Fiscal Year")
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
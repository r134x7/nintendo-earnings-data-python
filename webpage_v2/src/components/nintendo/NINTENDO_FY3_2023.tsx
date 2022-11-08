import { useState } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Space, Card } from "@mantine/core";
import { useSelector } from "react-redux";
import { printEarnings } from "../../data/nintendo/Nintendo_FY3_2023/earnings_fy3_2023";
import { printKPI } from "../../data/nintendo/Nintendo_FY3_2023/kpi_fy3_2023";
import { printTopSellingSwitchTitles } from "../../data/nintendo/Nintendo_FY3_2023/top_NSW_sw_fy3_2023";
import { printFYMillionSellerTitles } from "../../data/nintendo/Nintendo_FY3_2023/mst_fy3_2023";
import { printHardwareSoftware } from "../../data/nintendo/Nintendo_FY3_2023/nsw_hardware_software_fy3_2023";
import { printRegions } from "../../data/nintendo/Nintendo_FY3_2023/regional_hw_sw_fy3_2023";
import GRAPH_NINTENDO_TOP_SELLING_TITLES_SWITCH_FY3_2023 from "../../graphs/nintendo/Nintendo_FY3_2023/GRAPH_NINTENDO_TOP_SELLING_TITLES_SWITCH_FY3_2023";
import GRAPH_NINTENDO_EARNINGS_FY3_2023 from "../../graphs/nintendo/Nintendo_FY3_2023/GRAPH_NINTENDO_EARNINGS_FY3_2023";
import GRAPH_NINTENDO_KPI_FY3_2023 from "../../graphs/nintendo/Nintendo_FY3_2023/GRAPH_NINTENDO_KPI_FY3_2023";
import GRAPH_NINTENDO_MST_FY3_2023 from "../../graphs/nintendo/Nintendo_FY3_2023/GRAPH_NINTENDO_MST_FY3_2023";
import GRAPH_NINTENDO_NSW_HW_SW_FY3_2023 from "../../graphs/nintendo/Nintendo_FY3_2023/GRAPH_NINTENDO_NSW_HW_SW_FY3_2023";

export default function NINTENDO_FY3_2023() {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    const dataSources = (
        <Card shadow="sm" p="sm" radius="md" withBorder  style={{margin: "1em"}}>
            <Text size={"md"} style={{overflowWrap: "anywhere"}}>
                <Stack align="center">
                        1st Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2022/220803e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2022/220803e.pdf
                    </Anchor>
                        1st Quarter Financial Results Explanatory Material:
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2022/220803_2e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2022/220803_2e.pdf
                    </Anchor>
                
                        2nd Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2022/221108e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2022/221108e.pdf 
                    </Anchor>
                        2nd Quarter Financial Results Explanatory Material:
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2022/221108_8e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2022/221108_8e.pdf 
                    </Anchor>
                
                        {/* 3rd Quarter Earnings Release: 
                    <Anchor mb="sm" href="" target="_blank" >
                        
                    </Anchor>
                        3rd Quarter Financial Results Explanatory Material:
                    <Anchor mb="sm" href="" target="_blank" >
                        
                    </Anchor> */}
                
                        {/* 4th Quarter Earnings Release: 
                    <Anchor mb="sm" href="" target="_blank" >
                        
                    </Anchor>
                        4th Quarter Financial Results Explanatory Material:
                    <Anchor mb="sm" href="" target="_blank" >
                        
                    </Anchor> */}
                </Stack>  
            </Text> 
        </Card>
        );

    const componentList = [
        {
            name: "Data Sources",
            value: dataSources,
        },
        {
            name: "Consolidated Operating Results", 
            value: printEarnings,
        },
        {
            name: "Global Hardware/Software units, Mobile/IP related income", 
            value: printHardwareSoftware,
        },
        {
            name: "Key/Digital Sales Indicators", 
            value: printKPI,
        },
        {
            name: "FY Million-Seller Titles", 
            value: printFYMillionSellerTitles,
        },
        {
            name: "Regional Hardware/Software units", 
            value: printRegions,
        },
        {
            name: "Top Selling Titles",
            value: printTopSellingSwitchTitles,
        },
    ];

    const graphList = [
        {
            name: "Consolidated Operating Results", 
            value: <GRAPH_NINTENDO_EARNINGS_FY3_2023 />,
        },
        {
            name: "Global Hardware/Software units, Mobile/IP related income", 
            value: <GRAPH_NINTENDO_NSW_HW_SW_FY3_2023 />,
        },
        {
            name: "Key/Digital Sales Indicators", 
            value: <GRAPH_NINTENDO_KPI_FY3_2023 />,
        },
        {
            name: "FY Million-Seller Titles", 
            value: <GRAPH_NINTENDO_MST_FY3_2023 /> ,
        },
        {
            name: "Top Selling Titles",
            value: <GRAPH_NINTENDO_TOP_SELLING_TITLES_SWITCH_FY3_2023 />,
        },
    ]

    const dataList = componentList.map(elem => elem.name);

    const selectDataComponent = (objList: {name: string, value: string | JSX.Element}[]) =>
    (dataUsed: string): string | JSX.Element => {

        let [dataSelected] = objList.filter(elem => dataUsed === elem.name)

        return (dataSelected) ? dataSelected.value : ""
    };

    const selectData = selectDataComponent(componentList);
    const selectGraph = selectDataComponent(graphList);


    return (

        <div>  
            <SegmentedControl
                    fullWidth 
                    orientation="vertical"
                    value={value}
                    onChange={setValue}
                    data={dataList}
            />
            
            <Code style={{backgroundColor: `${state.colour}`}} block>{selectData(value)}</Code>
            {selectGraph(value)}
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
        
    );
}

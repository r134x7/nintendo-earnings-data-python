import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { printSalesPerSoftwareUnit } from "../../data/koeiTecmo/Koei_Tecmo_FY3_2022/software_sales_fy3_2022";

export default function KOEI_TECMO_FY3_2022() {

    const softwareSales = printSalesPerSoftwareUnit; 

    const [value, setValue] = useState("");
    const [sources, setSources] = useState(<></>)

    const state: any = useSelector(state => state);

    const componentList = [
        {
            name: "Software Sales",
            value: softwareSales,
        },
    ]

    const dataList = ["Data Sources"].concat(componentList.map(elem => elem.name));

    const selectDataComponent = (objList: {name: string, value: string}[]) =>
    (dataUsed: string): string => {

        let [dataSelected] = objList.filter(elem => dataUsed === elem.name)

        return (dataSelected) ? dataSelected.value : ""
    };

    const selectData = selectDataComponent(componentList);

    useEffect(() => {

        (value === "Data Sources")
            ? setSources(DATA_SOURCES)
            : setSources(<></>)

    }, [value])

    function DATA_SOURCES() {

        return (
            <Text>
                <Stack align="center">
                        1st Quarter Financial Results Presentation: 
                    <Anchor mb="sm" href="https://www.koeitecmo.co.jp/e/ir/docs/ir2_20210726_e.pdf" target="_blank" >
                        https://www.koeitecmo.co.jp/e/ir/docs/ir2_20210726_e.pdf
                    </Anchor>
                        2nd Quarter Financial Results Presentation: 
                    <Anchor mb="sm" href="https://www.koeitecmo.co.jp/e/ir/docs/ir2_20211025_e.pdf" target="_blank" >
                        https://www.koeitecmo.co.jp/e/ir/docs/ir2_20211025_e.pdf
                    </Anchor>
                        3rd Quarter Financial Results Presentation: 
                    <Anchor mb="sm" href="https://www.koeitecmo.co.jp/e/ir/docs/ir2_20220131_e.pdf" target="_blank" >
                        https://www.koeitecmo.co.jp/e/ir/docs/ir2_20220131_e.pdf
                    </Anchor>
                        4th Quarter Financial Results Presentation: 
                    <Anchor mb="sm" href="https://www.koeitecmo.co.jp/e/ir/docs/ir2_20220425_e.pdf.pdf" target="_blank" >
                        https://www.koeitecmo.co.jp/e/ir/docs/ir2_20220425_e.pdf.pdf
                    </Anchor>
                </Stack>  
            </Text> 
        )
    };


    return (

        <div>  
            <SegmentedControl
                    fullWidth 
                    orientation="vertical"
                    value={value}
                    onChange={setValue}
                    data={dataList}
            />
            
            {sources}
            <Code style={{backgroundColor: `${state.colour}`}} block>
                {selectData(value)}
                </Code>
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
        
    );
}

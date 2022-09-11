import {
    Header,
    Section,
    printHead,
    printSection,
    quarterlyCalculation,
    yearOnYearCalculation,
} from "../../../utils/regional-hw-sw-logic";

const currentQuarter = 4;

const nintendoSwitchHardwareTotalRegions: Section[] = [
    {
        name: " Nintendo Switch Hardware Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        regionA: "Global", 
        valueA: 188,
        regionB: "Japan", 
        valueB: 50,
        regionC: "The Americas", 
        valueC: 67,
        regionD: "Europe", 
        valueD: 31,
        regionE: "Other",
        valueE: 40,
        dataShift: true,
    },
    {
        name: " Nintendo Switch Hardware Total ",
        period: " 2nd Quarter ", 
        cmlPeriod: " First Half  ",
        units: "units",
        regionA: "Global", 
        valueA: 507,
        regionB: "Japan", 
        valueB: 114,
        regionC: "The Americas", 
        valueC: 200,
        regionD: "Europe", 
        valueD: 119,
        regionE: "Other",
        valueE: 74,
        dataShift: true,
    },
    {
        name: " Nintendo Switch Hardware Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " First Three Quarters ",
        units: "units",
        regionA: "Global", 
        valueA: 1449,
        regionB: "Japan", 
        valueB: 336,
        regionC: "The Americas", 
        valueC: 580,
        regionD: "Europe", 
        valueD: 396,
        regionE: "Other",
        valueE: 137,
        dataShift: true,
    },
    {
        name: " Nintendo Switch Hardware Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        regionA: "Global", 
        valueA: 1695,
        regionB: "Japan", 
        valueB: 385,
        regionC: "The Americas", 
        valueC: 688,
        regionD: "Europe", 
        valueD: 455,
        regionE: "Other",
        valueE: 169,
        dataShift: true,
    },
    {
        name: " Nintendo Switch Hardware Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        regionA: "Global", 
        valueA: 1779,
        regionB: "Japan", 
        valueB: 438,
        regionC: "The Americas", 
        valueC: 714,
        regionD: "Europe", 
        valueD: 454,
        regionE: "Other",
        valueE: 172,
        dataShift: true,
    },
]

const nintendoSwitchHardwareTotalRegionsLastFY: Section[] = [
    {
        name: " Nintendo Switch Hardware Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        regionA: "Global", 
        valueA: 197,
        regionB: "Japan", 
        valueB: 52,
        regionC: "The Americas", 
        valueC: 75,
        regionD: "Other",
        valueD: 69,
        regionE: "Other",
        valueE: 0,
        dataShift: true,
    },
    {
        name: " Nintendo Switch Hardware Total ",
        period: " 2nd Quarter ", 
        cmlPeriod: " First Half  ",
        units: "units",
        regionA: "Global", 
        valueA: 489,
        regionB: "Japan", 
        valueB: 135,
        regionC: "The Americas", 
        valueC: 192,
        regionD: "Other",
        valueD: 162,
        regionE: "Other",
        valueE: 0,
        dataShift: true,
    },
    {
        name: " Nintendo Switch Hardware Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " First Three Quarters ",
        units: "units",
        regionA: "Global", 
        valueA: 1213,
        regionB: "Japan", 
        valueB: 312,
        regionC: "The Americas", 
        valueC: 474,
        regionD: "Other",
        valueD: 426,
        regionE: "Other",
        valueE: 0,
        dataShift: true,
    },
    {
        name: " Nintendo Switch Hardware Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        regionA: "Global", 
        valueA: 1505,
        regionB: "Japan", 
        valueB: 378,
        regionC: "The Americas", 
        valueC: 594,
        regionD: "Europe", 
        valueD: 533,
        regionE: "Other",
        valueE: 0,
        dataShift: true,
    },
]

const nintendoSwitchSoftwareTotalRegions: Section[] = [
    {
        name: " Nintendo Switch Software Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        regionA: "Global", 
        valueA: 1796,
        regionB: "Japan", 
        valueB: 295,
        regionC: "The Americas", 
        valueC: 837,
        regionD: "Europe", 
        valueD: 524,
        regionE: "Other",
        valueE: 141,
        dataShift: true,
    },
    {
        name: " Nintendo Switch Software Total ",
        period: " 2nd Quarter ", 
        cmlPeriod: " First Half  ",
        units: "units",
        regionA: "Global", 
        valueA: 4213,
        regionB: "Japan", 
        valueB: 715,
        regionC: "The Americas", 
        valueC: 1960,
        regionD: "Europe", 
        valueD: 1284,
        regionE: "Other",
        valueE: 253,
        dataShift: true,
    },
    {
        name: " Nintendo Switch Software Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " First Three Quarters ",
        units: "units",
        regionA: "Global", 
        valueA: 9464,
        regionB: "Japan", 
        valueB: 1718,
        regionC: "The Americas", 
        valueC: 4348,
        regionD: "Europe", 
        valueD: 2786,
        regionE: "Other",
        valueE: 612,
        dataShift: true,
    },
    {
        name: " Nintendo Switch Software Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        regionA: "Global", 
        valueA: 11855,
        regionB: "Japan", 
        valueB: 2148,
        regionC: "The Americas", 
        valueC: 5394,
        regionD: "Europe", 
        valueD: 3516,
        regionE: "Other",
        valueE: 797,
        dataShift: true,
    },
    {
        name: " Nintendo Switch Software Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        regionA: "Global", 
        valueA: 6897,
        regionB: "Japan", 
        valueB: 1315,
        regionC: "The Americas", 
        valueC: 3038,
        regionD: "Europe", 
        valueD: 2059,
        regionE: "Other",
        valueE: 486,
        dataShift: true,
    },
]

const nintendoSwitchSoftwareTotalRegionsLastFY: Section[] = [
    {
        name: " Nintendo Switch Software Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        regionA: "Global", 
        valueA: 814,
        regionB: "Japan", 
        valueB: 156,
        regionC: "The Americas", 
        valueC: 363,
        regionD: "Other",
        valueD: 295,
        regionE: "Other",
        valueE: 0,
        dataShift: true,
    },
    {
        name: " Nintendo Switch Software Total ",
        period: " 2nd Quarter ", 
        cmlPeriod: " First Half  ",
        units: "units",
        regionA: "Global", 
        valueA: 2202,
        regionB: "Japan", 
        valueB: 437,
        regionC: "The Americas", 
        valueC: 940,
        regionD: "Other",
        valueD: 825,
        regionE: "Other",
        valueE: 0,
        dataShift: true,
    },
    {
        name: " Nintendo Switch Software Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " First Three Quarters ",
        units: "units",
        regionA: "Global", 
        valueA: 4710,
        regionB: "Japan", 
        valueB: 892,
        regionC: "The Americas", 
        valueC: 2079,
        regionD: "Other", 
        valueD: 1739,
        regionE: "Other",
        valueE: 0,
        dataShift: true,
    },
    {
        name: " Nintendo Switch Software Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        regionA: "Global", 
        valueA: 6351,
        regionB: "Japan", 
        valueB: 1226,
        regionC: "The Americas", 
        valueC: 2752,
        regionD: "Other",
        valueD: 2373,
        regionE: "Other",
        valueE: 0,
        dataShift: true,
    },
]

const header: Header = {
    switchHeader: "| Nintendo Switch Regional Data   |",
    fiscalYear: " FY3/2019 ",
    fiscalYearCml: " FY3/19 Cumulative ",
    globalPercentage: "| Global%|",
    units: "| Units  |",
    yearOnYear: "| YoY%   |",
    ltd: " Life-To-Date ",
}

const quarterlyCollection = [
    nintendoSwitchHardwareTotalRegions,
    nintendoSwitchHardwareTotalRegionsLastFY,
    nintendoSwitchSoftwareTotalRegions,
    nintendoSwitchSoftwareTotalRegionsLastFY,
] as const;

const filteredCollection = [
    nintendoSwitchHardwareTotalRegions,
    nintendoSwitchSoftwareTotalRegions,
] as const;

const [
    quarterSwitchHardwareTotalRegions,
    quarterSwitchHardwareTotalRegionsLastFY,
    quarterSwitchSoftwareTotalRegions,
    quarterSwitchSoftwareTotalRegionsLastFY,
] = quarterlyCollection.map((elem, index) => {

        return (index % 2 === 0)
                ? quarterlyCalculation(elem).filter((elem, index, array) => index !== array.length-1) // filter out last fy cumulative
                : quarterlyCalculation(elem) // last FY numbers...
})

const [
    nintendoSwitchHardwareTotalRegionsFiltered,
    nintendoSwitchSoftwareTotalRegionsFiltered,
] = filteredCollection.map((elem) => {
        return elem.filter((secondElem, index, array) => {
            return index !== array.length-1
        })
    })


const yearOnYearCollection = [
        quarterSwitchHardwareTotalRegions,
        quarterSwitchHardwareTotalRegionsLastFY,
        quarterSwitchSoftwareTotalRegions,
        quarterSwitchSoftwareTotalRegionsLastFY,
        nintendoSwitchHardwareTotalRegionsFiltered,
        nintendoSwitchHardwareTotalRegionsLastFY,
        nintendoSwitchSoftwareTotalRegionsFiltered,
        nintendoSwitchSoftwareTotalRegionsLastFY,
] as const;

const [
        quarterSwitchHardwareTotalRegionsYoy,
        quarterSwitchSoftwareTotalRegionsYoy,
        cumulativeSwitchHardwareTotalRegionsYoy,
        cumulativeSwitchSoftwareTotalRegionsYoy,
] = yearOnYearCollection.map((elem, index, array) => {
    return (index % 2 === 0)
            ? yearOnYearCalculation(array[index], array[index+1])
            : [];
    }).filter((elem) => elem.length !== 0) // filter out zero length arrays... 
    
const [
        nintendoSwitchHardwareTotalRegionsCml,
        nintendoSwitchSoftwareTotalRegionsCml,
] = [
        nintendoSwitchHardwareTotalRegions,
        nintendoSwitchSoftwareTotalRegions,
    ].map((elem) => {
        return elem.filter((secondElem, index, array) => {
            return index !== 0 // filter out first quarters
        })
    })

const printOne = printHead(header)

const printHardware = printSection(header, quarterSwitchHardwareTotalRegions, quarterSwitchHardwareTotalRegionsYoy, nintendoSwitchHardwareTotalRegionsCml, cumulativeSwitchHardwareTotalRegionsYoy, currentQuarter)

const printSoftware = printSection(header, quarterSwitchSoftwareTotalRegions, quarterSwitchSoftwareTotalRegionsYoy, nintendoSwitchSoftwareTotalRegionsCml, cumulativeSwitchSoftwareTotalRegionsYoy, currentQuarter)

export const printRegions = 
`${printOne}
${printHardware}
${printSoftware}`;
import { Header, Section } from "../utils/hardware-software-units-logic";

const header: Header = {
    switchHeader: "| Nintendo Switch   |",
    secondHeader:  "| Sales Units and Forecast     |",
    fiscalYear: " FY3/2022 ",
}

// you need... cumulative quarters 1-4, ltd at end of last fy...
// and last fy numbers: quarters 1-4 check earnings logic for reference

const switchOriginal: Section[] = [
    {
        name: " Switch ",
        period: " 1st Quarter ",
        units: "units",
        value: 331,
    },
    {
        name: " Switch ",
        period: " 2nd Quarter ",
        units: "units",
        value: 645,
    },
    {
        name: " Switch ",
        period: " 3rd Quarter ",
        units: "units",
        value: 1179,
    },
    {
        name: " Switch ",
        period: " 4th Quarter ",
        units: "units",
        value: 1356,
    },
    {
        name: " Switch ",
        period: " Last FY Cumulative ",
        units: "units",
        value: 6989,
    },
]

const switchOriginalLastFY: Section[] = [
    {
        name: " Switch ",
        period: " 1st Quarter ",
        units: "units",
        value: 305,
    },
    {
        name: " Switch ",
        period: " 2nd Quarter ",
        units: "units",
        value: 836,
    },
    {
        name: " Switch ",
        period: " 3rd Quarter ",
        units: "units",
        value: 1677,
    },
    {
        name: " Switch ",
        period: " 4th Quarter ",
        units: "units",
        value: 2032,
    },
] 

const headerToMatch = 
`+------------------------------+
| Nintendo Switch   | FY3/2022 |   
+------------------------------+   
| Sales Units and Forecast     |   
+------------------------------+ `;

const switchToMatch = 
`+---------------------------------+
| Switch      |   Units |    YoY% |
+---------------------------------+
| 1st Quarter |   3.31M |  +8.52% |
+---------------------------------+
| 2nd Quarter |   3.14M | -40.87% |
+---------------------------------+
| 3rd Quarter |   5.34M | -36.50% |
+---------------------------------+
| 4th Quarter |   1.77M | -50.14% |
+=================================+
| First Half  |   6.45M | -22.85% |
+---------------------------------+
| 1st 3 Qtrs  |  11.79M | -29.70% |
+---------------------------------+
| FY3/22 Cml. |  13.56M | -33.27% |
+---------------------------------+
| Life-To-Date|  83.45M |
+-----------------------+`;
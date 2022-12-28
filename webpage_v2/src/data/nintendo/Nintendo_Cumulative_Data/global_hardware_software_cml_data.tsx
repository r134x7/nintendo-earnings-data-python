import { platformUnitSalesMake, collectionJSON, platformUnitSalesType } from "../global_hardware_software_mobile_nintendo";
import { printTextBlock } from "../../../utils/bandai_namco_annual_report_logic";

import globalHardwareSoftware2023 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2023.json";
import globalHardwareSoftware2022 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2022.json";
import globalHardwareSoftware2021 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2021.json";
import globalHardwareSoftware2020 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2020.json";
import globalHardwareSoftware2019 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2019.json";
import globalHardwareSoftware2018 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2018.json";
import globalHardwareSoftware2017 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2017.json";
import globalHardwareSoftware2016 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2016.json";
import globalHardwareSoftware2015 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2015.json";
import globalHardwareSoftware2014 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2014.json";
import globalHardwareSoftware2013 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2013.json";
import globalHardwareSoftware2012 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2012.json";
import globalHardwareSoftware2011 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2011.json";
import globalHardwareSoftware2010 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2010.json";
import globalHardwareSoftware2009 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2009.json";
import globalHardwareSoftware2008 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2008.json";
import globalHardwareSoftware2007 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2007.json";
import globalHardwareSoftware2006 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2006.json";
import globalHardwareSoftware2005 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2005.json";
import globalHardwareSoftware2004 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2004.json";
import globalHardwareSoftware2003 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2003.json";
import globalHardwareSoftware2002 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2002.json";
import globalHardwareSoftware2001 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2001.json";
import globalHardwareSoftware2000 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2000.json";
import globalHardwareSoftware1999 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_1999.json";
import globalHardwareSoftware1998 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_1998.json";
import globalHardwareSoftware1997 from "./../Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_1997.json";

// avoid having empty lists [] in your collections from preparing for the next earnings
import {
    Section,
    Header,
    printHead,
    printSections,
    printSalesHardware,
    quarterlyCalculation,
    yearOnYearCalculation
} from "../../../utils/hardware_software_units_logic";

    const totalCollection = [
        globalHardwareSoftware1997,
        globalHardwareSoftware1998,
        globalHardwareSoftware1999,
        globalHardwareSoftware2000,
        globalHardwareSoftware2001,
        globalHardwareSoftware2002,
        globalHardwareSoftware2003,
        globalHardwareSoftware2004,
        globalHardwareSoftware2005,
        globalHardwareSoftware2006,
        globalHardwareSoftware2007,
        globalHardwareSoftware2008,
        globalHardwareSoftware2009,
        globalHardwareSoftware2010,
        globalHardwareSoftware2011,
        globalHardwareSoftware2012,
        globalHardwareSoftware2013,
        globalHardwareSoftware2014,
        globalHardwareSoftware2015,
        globalHardwareSoftware2016,
        globalHardwareSoftware2017,
        globalHardwareSoftware2018,
        globalHardwareSoftware2019,
        globalHardwareSoftware2020,
        globalHardwareSoftware2021,
        globalHardwareSoftware2022,
        globalHardwareSoftware2023,
    ]
    
    let totalCollectionSet: Section[][][] = totalCollection.map(elem => {

        let flatList = elem.platformUnitSales.flat();
        
        // to be used temporarily
        let filteredList = flatList.filter(value => value.units !== "currency");
        // temporary
        return filteredList.map(value => platformUnitSalesMake(value)).map(value => value.map(secondValue => { return { ...secondValue, fiscalYear: elem.fiscalYear}}))

        // return flatList.map(value => platformUnitSalesMake(value)).map(value => value.map(secondValue => { return { ...secondValue, fiscalYear: elem.fiscalYear}}))

    });

    const flatCollection = totalCollectionSet.map((value) => value.map((secondValue) => secondValue.filter((thirdValue, thirdIndex) => thirdIndex === 3))).flat(2);

    const flatCollectionLTD = totalCollectionSet.map((value) => value.map((secondValue) => secondValue.filter((thirdValue, thirdIndex) => thirdIndex === 4))).flat(2);

    const flatTitles = totalCollectionSet.map((value) => value.map((secondValue) => secondValue.filter((thirdValue, thirdIndex) => thirdIndex === 3))).flat(2).map(value => { return  value.name })

    const filteredCollection = [...new Set(flatTitles)];


    function sortingTitles(titles: string[]) {

        const setTitles: Section[][] = titles.map((elem, index, array) => {

            let searchTitle: Section[] = flatCollection.filter((value) => value.name === elem)

            let searchLTD: Section[] = flatCollectionLTD.filter((value) => value.name === elem)

            let latestLTD = searchLTD[searchLTD.length-1];
            
            return searchTitle.concat([latestLTD]) 
        })

        return setTitles
    };

    const latestFYcollection = sortingTitles(filteredCollection);

    // console.log(latestFYcollection);
    

    const dateLabel = "| Latest data as of September 30th, 2022   |\n+" + "-".repeat(42) + "+"

    const header: Header = {
        firstHeader: "| Global Hardware and Software  |",
        fiscalYear: "placeholder",
        nextFiscalYearShort: "place",
        secondHeader: "| Sales Units and Forecasts     |",
        switchHeader: "| Nintendo Co., Ltd. |",
    };

    function accumulate(title: Section[]): Section[] {

        // const japanTitle1 = title.map((elem, index, array) => {
        //     return elem.valueA
        // }).reduce((prev, next) => prev + next)
    
        
        // const overseasTitle1 = title.map((elem, index, array) => {
        //     // return elem[0].valueB
        //     return elem.valueB
        // }).reduce((prev, next) => prev + next)

        // const title1Flat = title.flatMap((flat) => flat).reduce((prev, next) => {
        //     return {...prev, ...next}
        // })

        const title1Flat = {
            ...title[title.length-1],
            value: title[title.length-1].value + title[title.length-2].value
        }

        const removeLast = title.filter((elem, index, array) => index !== array.length-1)

        let newTitle = removeLast.concat(title1Flat);
        
        return newTitle
    };


    const printTitlesGlobal = (titles: Section[][]) => {

        const regionRank = titles.map((elem, index, array) => {
            
            // let printRank: string = ` Rank ${elem[0].rank} `
            // let printRankFixed: string = (printRank.length >= 11)
            //         ? printRank
            //         : printRank + " ".repeat(11 - printRank.length);

            let printTitleName = printTextBlock(elem[0].name)(42)

            // let printPlatformFixed: string = (elem[0].platform.length >= 30)
            //     ? elem[0].platform
            //     : " " + elem[0].platform + " ".repeat(29 - elem[0].platform.length)


            // let printTitleNameFixed: string = "+"+"-".repeat(42)+"+\n" + printTitleName + "\n+" + "-".repeat(42) + "+\n|" + printPlatformFixed  + "|" + printRankFixed + "|\n+"+"-".repeat(42)+"+"
            let printTitleNameFixed: string = "+"+"-".repeat(42)+"+\n" + printTitleName + "\n+" + "-".repeat(42) + "+"// + "+"+"-".repeat(42)+"+"

            let yearValues: string[] = elem.filter((value, index) => value.value !== 0).map((value, valueIndex, valueArray) => {

               let printValue: string = `${value.value}M ` 
               let printValueFixed: string = (printValue.length >= 11)
                   ? printValue
                   : " ".repeat(11 - printValue.length) + printValue;

               let printPeriodFixed: string = (value.fiscalYear === undefined) 
                       ? "|" + value.period + " ".repeat(6) + "|"
                       : "| " + value.fiscalYear + " Cumulative          |"

               return  printPeriodFixed + printValueFixed + "|"
            }).filter((secondValue, index) => index !== elem.length-1) // will not work using secondValue;

        let printValue: string = `${elem[elem.length-1].value}M ` 
        
        let printValueFixed: string = (printValue.length >= 11)
            ? printValue
            : " ".repeat(11 - printValue.length) + printValue;

        let printLine: string = "+" + "-".repeat(42) + "+";

        let printLTD = printLine + "\n| Global - Life-To-Date (Units)|" + printValueFixed + "|\n" + printLine;

            return [
                printTitleNameFixed,
                ...yearValues,
                printLTD,
            ].reduce((prev, next) => {
                return prev + "\n" + next
            });

        }).filter(value => value !== "N/A").reduce((prev, next) => {
                return prev + "\n" + next
        });

        return regionRank
    }

    const reducedArrays: Section[][] = latestFYcollection.map((elem) => {

        return accumulate(elem)
    })
    
    // const sortedWWLTDCollection: Section[][] = reducedArrays.map((elem, index, array) => {
    //         return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
    // }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
    //     return (a[a.length-1].value > b[b.length-1].value)
    //         ? 1
    //         : (a[a.length-1].value < b[b.length-1].value)
    //         ? -1
    //         : 0 
    // })

const printOneWW = 
`+--------------------+
| Nintendo Co., Ltd. |
+------------------------------------+
| Global Hardware and Software Units |
+------------------------------------------+`;

const divideSortedGlobalCollection = reducedArrays.map(elem => elem.map(section => {
    return {
        ...section,
        value: Number((section.value / 100).toFixed(2)),
    }}))

const printFour = printTitlesGlobal(divideSortedGlobalCollection)

export const printGlobalHardwareSoftware = 
`${printOneWW}
${dateLabel}
${printFour}
###`;
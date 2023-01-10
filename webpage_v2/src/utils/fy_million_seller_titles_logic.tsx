import { printTextBlock, border, liner, spacer, headerPrint } from "./table_design_logic";

export type Titles = {
    title: string,
    platform: string,
    period: " 1st Quarter  " | " 2nd Quarter  " | " 3rd Quarter  " | " 4th Quarter  " | " Last FY Total ",
    regionA: "Japan", 
    valueA: number,
    regionB: "Overseas",
    valueB: number,
    regionC: "WW FY",
    valueC: number,
    regionD: "WW LTD",
    valueD: number,
    rank?: number,
    label?: "New!" | " Recurring ",
    miscellaneous?: string,
    yearsCount?: number,
    fiscalYear?: string,
}

export type Header = {
    mainHeader: "Nintendo Fiscal Year Million-Seller Titles",
    platformHeader: string, // change this to a string
    secondHeader: "Title",
    thirdHeader: "Platform and Rank"
    fourthHeader: "Units",
    fiscalYear: string,
    areaHeader: "| Area         |   Japan | Overseas|",
    globalHeader: "| Global       |   WW FY |  WW LTD |",
    mainSummaryHeader: string,
    secondSummaryHeader: "FY Million-Seller",
    thirdSummaryHeader: "Titles Summary"
    japanSummaryHeader: "Japan",
    overseasSummaryHeader: "Overseas",
    globalFYSummaryHeader: "Global FY",
    globalLTDSummaryHeader: "Global LTD",
}

export function decimateCalculation(numbers: Titles[]) {

   const calc: Titles[] = numbers.map((elem) => {
       return {
        ...elem, 
        valueA: Number((elem.valueA / 100).toFixed(2)),
        valueB: Number((elem.valueB / 100).toFixed(2)),
        valueC: Number((elem.valueC / 100).toFixed(2)),
        valueD: Number((elem.valueD / 100).toFixed(2)),
        }
   })

   return calc
}

export function quarterlyCalculation(quarters: Titles[]) {
       
   const calc: Titles[] = quarters.map((elem, index, array) => {
       return (elem.period !== " 1st Quarter  " && elem.period !== " Last FY Total ")
               ? {
                ...elem, 
                valueA: Number((elem.valueA - array[index-1].valueA).toFixed(2)),
                valueB: Number((elem.valueB - array[index-1].valueB).toFixed(2)),
                valueC: Number((elem.valueC - array[index-1].valueC).toFixed(2)),
                }
               : elem
   })
   
   return calc
}

export const printHead = (header: Header) => 
`+${"−".repeat(44)}+
${header.mainHeader}
+${"−".repeat(44)}+
${header.platformHeader}
+${"−".repeat(44)}+
+${"−".repeat(42)}+
${header.secondHeader}
+${"−".repeat(42)}+
${header.thirdHeader}
+${"−".repeat(42)}+
${header.fourthHeader}
+${"−".repeat(42)}+`;

export const printTitles = (header: Header, titleDifference: Titles[], titleCumulative: Titles[], currentQuarter: number) => {
        
    const regionAB = titleDifference.filter((elem, index) => {
        return index !== 4
    }).map((elem, index, array) => {
        
        let printRank: string = ` Rank ${elem.rank} `
        let printRankFixed: string = (printRank.length >= 9)
                ? printRank
                : printRank + " ".repeat(9 - printRank.length);
        
        let printPlatformFixed: string = (elem.platform.length >= 32)
                ? elem.platform
                : " " + elem.platform + " ".repeat(31 - elem.platform.length)

        // let printTitleName: string = (elem.title.length > 32)
        // ? elem.title.split(" ").reduce((prev, next, index, array) => {

        //     let nextCheck = prev + next + " ";
            
        //     if (nextCheck.length > 31 && prev.length <= 31) {
        //         return prev + " ".repeat(32 - prev.length) + `|         |\n| ` + next
        //     } else if (index === array.length-1) {
        //         return prev + next + " ".repeat(77 - prev.length)
        //     } else {
        //         return prev + " " + next
        //     }
        // })
        // : (elem.title.length < 32)
        // ? elem.title + " ".repeat(32 - elem.title.length) 
        // : elem.title
        let printTitleName = printTextBlock(elem.title, 42)

        let printTitleNameFixed: string = "+"+"−".repeat(42)+"+\n" + printTitleName + "\n+" + "−".repeat(42) + "+\n|" + printPlatformFixed  + "|" + printRankFixed + "|\n+"+"−".repeat(42)+"+"

        let printValueA: string = `${elem.valueA}M` 
        let printValueAFixed: string = (printValueA.length >= 9)
            ? printValueA
            : " ".repeat(9 - printValueA.length) + printValueA;
        
        let printValueB: string = `${elem.valueB}M` 
        let printValueBFixed: string = (printValueB.length >= 9)
            ? printValueB
            : " ".repeat(9 - printValueB.length) + printValueB;

        let printAreaHeader: string = header.areaHeader + "\n+"+"−".repeat(34)+"+"

        let printCmlValueA: string =  `${titleCumulative[currentQuarter-1].valueA}M`
        let printCmlValueAFixed: string = (printCmlValueA.length >= 9)
            ? printCmlValueA
            : " ".repeat(9 - printCmlValueA.length) + printCmlValueA;

        let printCmlValueB: string =  `${titleCumulative[currentQuarter-1].valueB}M`
        let printCmlValueBFixed: string = (printCmlValueB.length >= 9)
            ? printCmlValueB
            : " ".repeat(9 - printCmlValueB.length) + printCmlValueB;
        
        let printFYCml: string = "+" + "=".repeat(34) + "+\n| " + header.fiscalYear + " Cml.|" + printCmlValueAFixed + "|" + printCmlValueBFixed + "|"

        let printRegionAWWPercentage: string = `${((titleCumulative[currentQuarter-1].valueA / titleCumulative[currentQuarter-1].valueC) * 100).toFixed(2)}%`
        let printRegionAWWPercentageFixed: string = (printRegionAWWPercentage.length >= 9)
            ? printRegionAWWPercentage
            :  " ".repeat(9 - printRegionAWWPercentage.length) + printRegionAWWPercentage;

        let printRegionBWWPercentage: string = `${((titleCumulative[currentQuarter-1].valueB / titleCumulative[currentQuarter-1].valueC) * 100).toFixed(2)}%`
        let printRegionBWWPercentageFixed: string = (printRegionBWWPercentage.length >= 9)
            ? printRegionBWWPercentage
            : " ".repeat(9 - printRegionBWWPercentage.length) + printRegionBWWPercentage;

        let printRegionAYoY: string = (titleCumulative[4].valueA === 0)
            ? ` New! `
            : `${((((titleCumulative[3].valueA / titleCumulative[4].valueA) - 1) * 100) > 0) ? "+" : ""}${(((titleCumulative[3].valueA / titleCumulative[4].valueA) - 1) * 100).toFixed(2)}%` 
        let printRegionAYoYFixed: string = (printRegionAYoY.length >= 9)
            ? printRegionAYoY
            :  " ".repeat(9 - printRegionAYoY.length) + printRegionAYoY;

        let printRegionBYoY: string = (titleCumulative[4].valueB === 0)
            ? ` New! `
            : `${((((titleCumulative[3].valueB / titleCumulative[4].valueB) - 1) * 100) > 0) ? "+" : ""}${(((titleCumulative[3].valueB / titleCumulative[4].valueB) - 1) * 100).toFixed(2)}%` 
        let printRegionBYoYFixed: string = (printRegionBYoY.length >= 9)
            ? printRegionBYoY
            :  " ".repeat(9 - printRegionBYoY.length) + printRegionBYoY;

        let printFYCmlYoY: string = "\n| " + header.fiscalYear + " YoY%|" + printRegionAYoYFixed + "|" + printRegionBYoYFixed + "|"

        if (index === 0 && elem.valueC === 0) {
            return printTitleNameFixed + "\n" + printAreaHeader 
        } else if (index !== 0 && elem.valueC === 0) {
            return [] // array.length 0 filtering
        } else {
            return (currentQuarter === 1)
                    ? printTitleNameFixed + "\n" + printAreaHeader + "\n|" + elem.period + "|" + printValueAFixed + "|" + printValueBFixed + "|\n" + printFYCml + "\n| Area/WW FY % |" + printRegionAWWPercentageFixed + "|" + printRegionBWWPercentageFixed + "|"
                    : (index === 0 && currentQuarter !== 1)
                    ? printTitleNameFixed + "\n" + printAreaHeader + "\n|" + elem.period + "|" + printValueAFixed + "|" + printValueBFixed + "|"
                    : (index === 3)
                    ? "|" + elem.period + "|" + printValueAFixed + "|" + printValueBFixed + "|\n" + printFYCml + printFYCmlYoY + "\n| Area/WW FY % |" + printRegionAWWPercentageFixed + "|" + printRegionBWWPercentageFixed + "|"
                    : (index === currentQuarter-1)
                    ? "|" + elem.period + "|" + printValueAFixed + "|" + printValueBFixed + "|\n" + printFYCml + "\n| Area/WW FY % |" + printRegionAWWPercentageFixed + "|" + printRegionBWWPercentageFixed + "|"
                    : "|" + elem.period + "|" + printValueAFixed + "|" + printValueBFixed + "|"
        }
    }).filter((elem) => elem.length !== 0).reduce((prev, next, index, array) => {
        return prev + "\n" + next
    })

    const regionCD = titleDifference.filter((elem, index) => {
        return index !== 4
    }).map((elem, index, array) => {
        
        let printValueC: string = `${elem.valueC}M` 
        let printValueCFixed: string = (printValueC.length >= 9)
            ? printValueC
            : " ".repeat(9 - printValueC.length) + printValueC;
        
        let printValueD: string = `${elem.valueD}M` 
        let printValueDFixed: string = (printValueD.length >= 9)
            ? printValueD
            : " ".repeat(9 - printValueD.length) + printValueD;

        let printGlobalHeader: string = "+"+"−".repeat(34)+"+\n" + header.globalHeader + "\n+"+"−".repeat(34)+"+"

        let printCmlValueC: string =  `${titleCumulative[currentQuarter-1].valueC}M`
        let printCmlValueCFixed: string = (printCmlValueC.length >= 9)
            ? printCmlValueC
            : " ".repeat(9 - printCmlValueC.length) + printCmlValueC;

        let printCmlValueD: string =  `${titleCumulative[currentQuarter-1].valueD}M`
        let printCmlValueDFixed: string = (printCmlValueD.length >= 9)
            ? printCmlValueD
            : " ".repeat(9 - printCmlValueD.length) + printCmlValueD;

        let printFYCml: string = "+" + "=".repeat(34) + "+\n| " + header.fiscalYear + " Cml.|" + printCmlValueCFixed + "|" + printCmlValueDFixed + "|"
        
        let printRegionCWWPercentage: string = `${((titleCumulative[currentQuarter-1].valueC / titleCumulative[currentQuarter-1].valueD) * 100).toFixed(2)}%`
        let printRegionCWWPercentageFixed: string = (printRegionCWWPercentage.length >= 9)
            ? printRegionCWWPercentage
            :  " ".repeat(9 - printRegionCWWPercentage.length) + printRegionCWWPercentage;

        let printRegionDWWPercentage: string = `${( 100 - ((titleCumulative[currentQuarter-1].valueC / titleCumulative[currentQuarter-1].valueD) * 100)).toFixed(2)}%`
        let printRegionDWWPercentageFixed: string = (printRegionDWWPercentage.length >= 9)
            ? printRegionDWWPercentage
            :  " ".repeat(9 - printRegionDWWPercentage.length) + printRegionDWWPercentage;
        
        let printRegionCYoY: string = (titleCumulative[4].valueC === 0)
            ? ` New! `
            : `${((((titleCumulative[3].valueC / titleCumulative[4].valueC) - 1) * 100) > 0) ? "+" : ""}${(((titleCumulative[3].valueC / titleCumulative[4].valueC) - 1) * 100).toFixed(2)}%` 
        let printRegionCYoYFixed: string = (printRegionCYoY.length >= 9)
            ? printRegionCYoY
            :  " ".repeat(9 - printRegionCYoY.length) + printRegionCYoY;

        let printRegionDYoY: string = (titleCumulative[4].valueD === 0)
            ? ` New! `
            : `${((((titleCumulative[3].valueD / titleCumulative[4].valueD) - 1) * 100) > 0) ? "+" : ""}${(((titleCumulative[3].valueD / titleCumulative[4].valueD) - 1) * 100).toFixed(2)}%` 
        let printRegionDYoYFixed: string = (printRegionDYoY.length >= 9)
            ? printRegionDYoY
            :  " ".repeat(9 - printRegionDYoY.length) + printRegionDYoY;

        let printFYCmlYoY: string = "\n| " + header.fiscalYear + " YoY%|" + printRegionCYoYFixed + "|" + printRegionDYoYFixed + "|"
        
        if (index === 0 && elem.valueC === 0) {
            return printGlobalHeader 
        } else if (index !== 0 && elem.valueC === 0) {
            return [] // array.length 0 filtering
        } else {
            return (currentQuarter === 1)
                    ? printGlobalHeader + "\n|" + elem.period + "|" + printValueCFixed + "|" + printValueDFixed + "|\n" + printFYCml + "\n| WW FY/LTD %  |" + printRegionCWWPercentageFixed + "|" + printRegionDWWPercentageFixed + "|"
                    : (index === 0 && currentQuarter !== 1)
                    ? printGlobalHeader + "\n|" + elem.period + "|" + printValueCFixed + "|" + printValueDFixed + "|"
                    : (index === 3)
                    ? "|" + elem.period + "|" + printValueCFixed + "|" + printValueDFixed + "|\n" + printFYCml + printFYCmlYoY + "\n| WW FY/LTD %  |" + printRegionCWWPercentageFixed + "|" + printRegionDWWPercentageFixed + "|"
                    : (index === currentQuarter-1 )
                    ? "|" + elem.period + "|" + printValueCFixed + "|" + printValueDFixed + "|\n" + printFYCml + "\n| WW FY/LTD %  |" + printRegionCWWPercentageFixed + "|" + printRegionDWWPercentageFixed + "|"
                    : "|" + elem.period + "|" + printValueCFixed + "|" + printValueDFixed + "|"
        }
    }).filter((elem) => elem.length !== 0).reduce((prev, next, index, array) => {
        return prev + "\n" + next
    })
    
    // return [regionAB, regionCD].reduce((prev, next) => prev + "\n" + next + "\n+"+"−".repeat(34)+"+")

    const penultimateCheck = [regionAB, regionCD].reduce((prev, next) => prev + "\n" + next + "\n+"+"−".repeat(34)+"+")
    
    return (titleDifference[0].miscellaneous)
            ? penultimateCheck + "\n|" + titleDifference[0].miscellaneous + "\n+" + "−".repeat(titleDifference[0].miscellaneous.length-1) + "+"
            : penultimateCheck 

}

export function labelTitles(titlesSorted: Titles[]) {

    const calc: Titles[] = titlesSorted.map((elem, index, array) => {
        
        return (array[4].valueC === 0)
                ? {...elem, label: "New!"}
                : {...elem, label: " Recurring "}
    })
    
    return calc
}

export const printSummaryHead = (header: Header, newCollection: Titles[], recurringCollection: Titles[]) => {

    let printNew: string = border([
        spacer("New!",12,"left"),
        spacer(`${newCollection.length}`,9,"right")
    ],true)

    let printRecurring: string = border([
        spacer("Recurring",12,"left"),
        spacer(`${recurringCollection.length}`,9,"right")
    ],true)

    let printTotal: string = liner(border([
        spacer("Total",12,"left"),
        spacer(`${newCollection.length + recurringCollection.length}`,9,"right")
    ]),"=","both")

    let printHeader: string = headerPrint([
        header.mainSummaryHeader,
        header.secondSummaryHeader,
        header.thirdSummaryHeader,
    ],23)

    let printTitles: string = liner(border([
        spacer("Titles",12,"left"),
        spacer("Count",9,"right"),
    ]),"−","both",true)

    return printHeader + "\n" + printTitles + printNew + printRecurring + printTotal
}
    
export const printSummary = (header: Header, regionNew: number[], regionRecurring: number[], ) => {

    const regionHeaders: string[] = [header.japanSummaryHeader, header.overseasSummaryHeader, header.globalFYSummaryHeader, header.globalLTDSummaryHeader]

    return regionNew.map((elem, index, array) => {

        let printRegionHeader: string = liner(border([
            spacer(regionHeaders[index],32,"left"),
        ]),"−","both",true) + liner(border([
            spacer(header.fiscalYear + " Cml.|   Units |    %    ",32,"left")
        ]),"−","bottom",true)

        let TotalUnits: number = Number((elem + regionRecurring[index]).toFixed(2)) 

        let printTotalUnits: string = liner(border([
            spacer("Total",12,"left"),
            spacer(`${(elem + regionRecurring[index]).toFixed(2)}M`,8,"right")
        ]),"−","bottom",true);
        
        let printNewUnits: string = border([
            spacer("New!",12,"left"),
            spacer(`${elem.toFixed(2)}M`,8,"right"),
            spacer(`${((elem / TotalUnits) * 100).toFixed(2)}%`,8,"right")
        ],true);
        
        let printRecurringUnits: string = liner(border([
            spacer("Recurring",12,"left"),
            spacer(`${regionRecurring[index].toFixed(2)}M`,8,"right"),
            spacer(`${((regionRecurring[index] / TotalUnits) * 100).toFixed(2)}%`,8,"right")
        ]),"=","bottom",true);

        let printRows: string = printNewUnits + printRecurringUnits + printTotalUnits

        return printRegionHeader + printRows
    }).reduce((prev, next) => prev + next)

}

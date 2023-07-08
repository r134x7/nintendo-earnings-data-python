import { thisFYCalculation, type AnnualReportTitle, type AnnualReportValue, printReleaseDate, printAnnualReportValue, printRank, printSeriesName } from "../../utils/annual_report_logic";
import { dateLabel, liner, border, spacer, printTextBlock, headerPrint } from "../../utils/table_design_logic";
import { HeaderV2 } from "../../utils/segment_data_logic";
import { titleSet } from "../capcom/game_series_sales_capcom_cml_data";
import { searchTitles } from "../capcom/platinum_titles_Capcom";
import { type SeriesJSON, type SeriesMake, getAnnualReportData, getIPType, type TitleData, type TitlePlatformData } from "./annual_report_general";

import bandaiNamcoAnnualReport2022 from "../bandaiNamco/Annual_Report/annual_report_fy3_2022.json";
import bandaiNamcoAnnualReport2021 from "../bandaiNamco/Annual_Report/annual_report_fy3_2021.json";
import bandaiNamcoAnnualReport2020 from "../bandaiNamco/Annual_Report/annual_report_fy3_2020.json";
import bandaiNamcoAnnualReport2019 from "../bandaiNamco/Annual_Report/annual_report_fy3_2019.json";

import squareEnixAnnualReport2022 from "../squareEnix/Annual_Report/annual_report_fy3_2022.json";
import squareEnixAnnualReport2021 from "../squareEnix/Annual_Report/annual_report_fy3_2021.json";
import squareEnixAnnualReport2020 from "../squareEnix/Annual_Report/annual_report_fy3_2020.json";
import squareEnixAnnualReport2019 from "../squareEnix/Annual_Report/annual_report_fy3_2019.json";
import squareEnixAnnualReport2018 from "../squareEnix/Annual_Report/annual_report_fy3_2018.json";
import squareEnixAnnualReport2017 from "../squareEnix/Annual_Report/annual_report_fy3_2017.json";
import squareEnixAnnualReport2016 from "../squareEnix/Annual_Report/annual_report_fy3_2016.json";
import squareEnixAnnualReport2015 from "../squareEnix/Annual_Report/annual_report_fy3_2015.json";
import squareEnixAnnualReport2014 from "../squareEnix/Annual_Report/annual_report_fy3_2014.json";
import squareEnixAnnualReport2013 from "../squareEnix/Annual_Report/annual_report_fy3_2013.json";
import squareEnixAnnualReport2012 from "../squareEnix/Annual_Report/annual_report_fy3_2012.json";
import squareEnixAnnualReport2011 from "../squareEnix/Annual_Report/annual_report_fy3_2011.json";
import squareEnixAnnualReport2010 from "../squareEnix/Annual_Report/annual_report_fy3_2010.json";

import segaAnnualReport2022 from "../sega/Annual_Report/annual_report_fy3_2022.json";
import segaAnnualReport2021 from "../sega/Annual_Report/annual_report_fy3_2021.json";
import segaAnnualReport2020 from "../sega/Annual_Report/annual_report_fy3_2020.json";
import segaAnnualReport2019 from "../sega/Annual_Report/annual_report_fy3_2019.json";
import segaAnnualReport2018 from "../sega/Annual_Report/annual_report_fy3_2018.json";
import segaAnnualReport2017 from "../sega/Annual_Report/annual_report_fy3_2017.json";
import segaAnnualReport2016 from "../sega/Annual_Report/annual_report_fy3_2016.json";
import segaAnnualReport2015 from "../sega/Annual_Report/annual_report_fy3_2015.json";
import segaAnnualReport2014 from "../sega/Annual_Report/annual_report_fy3_2014.json";
import segaAnnualReport2013 from "../sega/Annual_Report/annual_report_fy3_2013.json";

import capcomGameSeries2023 from "../capcom/Game_Series/game_series_fy3_2023.json";
import capcomGameSeries2022 from "../capcom/Game_Series/game_series_fy3_2022.json";
import capcomGameSeries2021 from "../capcom/Game_Series/game_series_fy3_2021.json";
import capcomGameSeries2020 from "../capcom/Game_Series/game_series_fy3_2020.json";
import capcomGameSeries2019 from "../capcom/Game_Series/game_series_fy3_2019.json";
import capcomGameSeries2018 from "../capcom/Game_Series/game_series_fy3_2018.json";
import capcomGameSeries2017 from "../capcom/Game_Series/game_series_fy3_2017.json";
import capcomGameSeries2016 from "../capcom/Game_Series/game_series_fy3_2016.json";
import capcomGameSeries2015 from "../capcom/Game_Series/game_series_fy3_2015.json";
import capcomGameSeries2014 from "../capcom/Game_Series/game_series_fy3_2014.json";
import capcomGameSeries2013 from "../capcom/Game_Series/game_series_fy3_2013.json";
import capcomGameSeries2012 from "../capcom/Game_Series/game_series_fy3_2012.json";
import capcomGameSeries2011 from "../capcom/Game_Series/game_series_fy3_2011.json";
import capcomGameSeries2010 from "../capcom/Game_Series/game_series_fy3_2010.json";

import capcomSoftwareShipmentsPlatform2022 from "../capcom/Fact_Book/software_shipments_platform_fy3_2022.json";
import capcomSoftwareShipmentsPlatform2021 from "../capcom/Fact_Book/software_shipments_platform_fy3_2021.json";
import capcomSoftwareShipmentsPlatform2020 from "../capcom/Fact_Book/software_shipments_platform_fy3_2020.json";
import capcomSoftwareShipmentsPlatform2019 from "../capcom/Fact_Book/software_shipments_platform_fy3_2019.json";


const collectionBandaiNamco = new Map<number, SeriesJSON>();
    collectionBandaiNamco.set(collectionBandaiNamco.size, bandaiNamcoAnnualReport2019)
    collectionBandaiNamco.set(collectionBandaiNamco.size, bandaiNamcoAnnualReport2020)
    collectionBandaiNamco.set(collectionBandaiNamco.size, bandaiNamcoAnnualReport2021)
    collectionBandaiNamco.set(collectionBandaiNamco.size, bandaiNamcoAnnualReport2022)

const collectionSquareEnix = new Map<number, SeriesJSON>();
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2010)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2011)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2012)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2013)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2014)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2015)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2016)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2017)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2018)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2019)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2020)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2021)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2022)

const collectionSega = new Map<number, SeriesJSON>();
    collectionSega.set(collectionSega.size, segaAnnualReport2013)
    collectionSega.set(collectionSega.size, segaAnnualReport2014)
    collectionSega.set(collectionSega.size, segaAnnualReport2015)
    collectionSega.set(collectionSega.size, segaAnnualReport2016)
    collectionSega.set(collectionSega.size, segaAnnualReport2017)
    collectionSega.set(collectionSega.size, segaAnnualReport2018)
    collectionSega.set(collectionSega.size, segaAnnualReport2019)
    collectionSega.set(collectionSega.size, segaAnnualReport2020)
    collectionSega.set(collectionSega.size, segaAnnualReport2021)
    collectionSega.set(collectionSega.size, segaAnnualReport2022)

const collectionCapcomGameSeries = new Map<number, SeriesJSON>();
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2010)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2011)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2012)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2013)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2014)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2015)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2016)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2017)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2018)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2019)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2020)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2021)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2022)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2023)

const collectionCapcomFactBook = new Map<number, SeriesJSON>();
    collectionCapcomFactBook.set(collectionCapcomFactBook.size, capcomSoftwareShipmentsPlatform2019)
    collectionCapcomFactBook.set(collectionCapcomFactBook.size, capcomSoftwareShipmentsPlatform2020)
    collectionCapcomFactBook.set(collectionCapcomFactBook.size, capcomSoftwareShipmentsPlatform2021)
    collectionCapcomFactBook.set(collectionCapcomFactBook.size, capcomSoftwareShipmentsPlatform2022)

const bandaiNamcoTitleChange = new Map<string, string>([
    // [new, old]
    ["Naruto-related", "Ultimate Ninja Storm"]
]);
export const bandaiNamcoAnnualReportCml = annualReportCumulative(collectionBandaiNamco, 28, "General", bandaiNamcoTitleChange); 

const segaTitleChange = new Map<string, string>([
    ["Shin Megami Tensei", "Megami Tensei"]
]);
export const segaAnnualReportCml = annualReportCumulative(collectionSega, 28, "Sega", segaTitleChange) as TitlePlatformData;

collectionBandaiNamco.clear();
bandaiNamcoTitleChange.clear();
collectionSquareEnix.clear();
collectionSega.clear();
collectionCapcomGameSeries.clear();
collectionCapcomFactBook.clear();

function annualReportCumulative(completeCollection: Map<number, SeriesJSON>, headerLength: number, 
    kind: "General" | "Sega" | "Capcom Game Series" | "Capcom Fact Book",
    changeTitle?: Map<string, string>
    ) {

        const makeDateLabel = dateLabel(completeCollection.get(completeCollection.size-1)?.fiscalYear ?? "N/A", 4);

        const none: AnnualReportValue = { kind:"Nothing" };

        const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true);

        const header: HeaderV2 = {
            companyName: completeCollection.get(completeCollection.size-1)?.companyName ?? "ERROR",
            fiscalYear: completeCollection.get(completeCollection.size-1)?.fiscalYear ?? "ERROR",
            title: (kind === "General" || kind == "Sega")
                ? "IP Series Data - Cumulative"
                : (kind === "Capcom Game Series")
                    ? "Game Series Data - Cumulative"
                    : " Fact Book: Units shipped by platform"
        };

        const makeData = new Map<number, AnnualReportTitle[]>();

        completeCollection.forEach((value, key, map) => {
            makeData.set(key, [...getAnnualReportData(value, kind).values()])
        })
        
        const setTitles = new Set<string>();
            [...makeData.values()].flat().map(elem => setTitles.add(elem.title));

        if (changeTitle !== undefined) {
            changeTitle.forEach((value, key, map) => {
                if (setTitles.has(value)) {
                    setTitles.delete(value)
                }
            })
        }

        const orderedData = new Map<number, AnnualReportTitle[]>();

        setTitles.forEach((value) => {

            let getIndex = orderedData.size;

            makeData.forEach((innerValue, key, map) => {

                orderedData.set(getIndex, (orderedData.get(getIndex) ?? []).concat(
                    // innerValue.filter(elem => elem.title === value)
                    innerValue.filter(elem => {

                        if (changeTitle !== undefined && changeTitle.has(value)) {

                            return elem.title === value || elem.title === changeTitle.get(value)
                        } else {
                            return elem.title === value
                        }
                    })
                ))

            })
        })

        const sortedLists = [...orderedData.values()].sort((next, prev) => {
            
            const getPrev = prev[prev.length-1]
            const getNext = next[next.length-1]

            if (getPrev.valueLTD.kind === "Annual Report" && getNext.valueLTD.kind === "Annual Report") {
                
                return (getPrev.valueLTD.value < getNext.valueLTD.value)
                    ? -1 
                    : (getPrev.valueLTD > getNext.valueLTD) 
                        ? 1 
                        : 0
            } else {
                return 0
            }

        })

        const sortedMap = new Map<number, AnnualReportTitle[]>();

        for (let index = 0; index < sortedLists.length; index++) {

           const toList = sortedLists[index]; 

           const toPop = toList.pop();

           const mutateLast = { ...toPop, rank: index + 1 } as AnnualReportTitle;

           sortedMap.set(index, 
                toList.concat(mutateLast)
           ) 
        }

        const printedSeries = new Map<number, titleSet[]>();

        sortedMap.forEach((value, key, map) => {

            const printValue = valuePrint(value, kind);

            const getLastValue = value.at(-1) as AnnualReportTitle;

            const makeObject = (value[value.length-1].kind === "Sega")
            ? {
                title: getLastValue.title,
                platforms: getLastValue.kind === "Sega" ? getLastValue.ipType : "ERROR",
                table: printValue,
            }
            : {
                title: getLastValue.title,
                table: printValue,
            } 

        printedSeries.set(0, (printedSeries.get(0) ?? []).concat(makeObject))
        })


        const printOne = headerPrint([
            header.companyName,
            header.title,
        ], headerLength) + "\n" + printDateLabel;

    return {
        header: printOne,
        titleList: (kind === "Sega")
            ? [...printedSeries.values()].flat() as searchTitles[]
            : [...printedSeries.values()].flat() satisfies titleSet[],
        // footnotes: collection?.footnotes === undefined ? undefined : liner(printTextBlock(collection?.footnotes,40),"=","both",true,40)
        footnotes: undefined,
    }
}

function valuePrint(value: AnnualReportTitle[], kind: "General" | "Sega" | "Capcom Game Series" | "Capcom Fact Book"): string {

    switch (kind) {
        case "General":

            return [
                printSeriesName(value.at(-1) as AnnualReportTitle, 42),
                liner(
                    printReleaseDate(value.at(-1) as AnnualReportTitle, 30) + printRank(value.at(-1) as AnnualReportTitle, 9)
                ,"=","bottom","newLine"),
                liner(
                    value.map((elem, index, array) => printAnnualReportValue(elem, 27, 12, "Cumulative", (elem === array.at(-1)) ? "noNewLine" : "newLine")).reduce((acc, next) => acc + next)
                , "−", "bottom", "newLine", 42),
                liner(
                printAnnualReportValue(value.at(-1) as AnnualReportTitle, 27, 12, "LTD","noNewLine")
                , "−", "bottom", "newLine")
            ].reduce((acc, next) => acc + next, "");

        case "Sega":

            // TypeScript doesn't handle lists well when trying to get a value from a list after using discriminated unions........
            const getLastValue = value.at(-1) as AnnualReportTitle;

            return [
                printSeriesName(value.at(-1) as AnnualReportTitle, 42),
                liner(printTextBlock(`IP type: ${getLastValue.kind === "Sega" ? getLastValue.ipType : "ERROR"}`,42),"−","bottom","newLine",42),
                liner(printTextBlock(getLastValue.kind === "Sega" ? "Platforms: " + getLastValue.platforms : undefined,42),"−","bottom","newLine",42),
                liner(printTextBlock(getLastValue.kind === "Sega" && getLastValue.totalEditions !== 0 ? "Total Editions: " + getLastValue.totalEditions.toString() : undefined,42),"−","bottom","newLine",42),
                liner(printReleaseDate(getLastValue, 30) + printRank(getLastValue, 9)
                ,"=","bottom","newLine"),
                liner(printTextBlock(getLastValue.kind === "Sega" ? "Measure: " + getLastValue.units : undefined,42),"−","bottom","newLine",42),
                liner(printTextBlock((getLastValue.kind === "Sega" && getLastValue.footnotes !== undefined) 
                    ? "Consists of: " + getLastValue.footnotes
                    : undefined, 42),"=","bottom","newLine",42),
                liner(
                    value.map((elem, index, array) => printAnnualReportValue(elem, 27, 12, "Cumulative", (elem === array.at(-1)) ? "noNewLine" : "newLine")).reduce((acc, next) => acc + next)
                , "−", "bottom", "newLine", 42),
                liner(
                printAnnualReportValue(getLastValue, 27, 12, "LTD","noNewLine")
                , "−", "bottom", "newLine")
                // will need fullgameratio here
            ].reduce((acc, next) => acc + next, "");
    
        default:
            return ""
    }
}


import { type AnnualReportTitle, type AnnualReportValue } from "../../utils/annual_report_logic";

import bandaiNamcoAnnualReport2022 from "../bandaiNamco/Annual_Report/annual_report_fy3_2022.json";
import bandaiNamcoAnnualReport2021 from "../bandaiNamco/Annual_Report/annual_report_fy3_2021.json";
import bandaiNamcoAnnualReport2020 from "../bandaiNamco/Annual_Report/annual_report_fy3_2020.json";
import bandaiNamcoAnnualReport2019 from "../bandaiNamco/Annual_Report/annual_report_fy3_2019.json";

export type SeriesJSON = {
    companyName: string,
    fiscalYear: string,
    series: SeriesMake[],
}

export type SeriesMake = {
   title: string,
   releaseDate: string,
   fyEndMonth: string,
   value: number,
   valueLastFY: number | string | null,
   valueLastTwoFYs: number | string | null,
   footnotes?: string,
}

const collectionBandaiNamco = new Map<number, SeriesJSON>();
    collectionBandaiNamco.set(collectionBandaiNamco.size, bandaiNamcoAnnualReport2022)
    collectionBandaiNamco.set(collectionBandaiNamco.size, bandaiNamcoAnnualReport2021)
    collectionBandaiNamco.set(collectionBandaiNamco.size, bandaiNamcoAnnualReport2020)
    collectionBandaiNamco.set(collectionBandaiNamco.size, bandaiNamcoAnnualReport2019)

export function annualReportNothingCheck(
    value: number| string | null | undefined,
    units: "units" | "currency" | "percentage",
    fiscalYear: string,
): AnnualReportValue {

    switch (typeof value) {
        case "number":
           
            return {
                kind: "Annual Report",
                fiscalYear: fiscalYear,
                units: units,
                value: value,
            }
    
        default:
            return { kind: "Nothing" };
    }

}

export function annualReportValuesMake(obj: undefined | SeriesMake, fiscalYear: string, kind: "General" | "Sega"): AnnualReportTitle {

    if (kind === "General") {

        const values: AnnualReportTitle = {
            kind: "General",
            title: obj?.title ?? "ERROR",
            releaseDate: obj?.releaseDate ?? "ERROR",
            fyEndMonth: obj?.fyEndMonth ?? "ERROR",
            footnotes: obj?.footnotes,
            valueLTD
        }
    }
}
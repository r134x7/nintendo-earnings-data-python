import { liner, border, spacer, printTextBlock } from "./table_design_logic";

export type Earnings = {
    category: "quarter" | "cumulative" | "forecast",
    period: "1st Quarter" | "2nd Quarter" | "3rd Quarter" | "4th Quarter"
    units: "currency" | "percentage" | "NaN",
    name: string,
    value: number,
    forecastPeriod?: string,
    footnotes?: string,
};

export type EarningsV2 = {
    name: string,
    Q1QtrValue: EarningsValue,
    Q2QtrValue: EarningsValue,
    Q3QtrValue: EarningsValue,
    Q4QtrValue: EarningsValue,
    Q1CmlValue: EarningsValue,
    Q2CmlValue: EarningsValue,
    Q3CmlValue: EarningsValue,
    Q4CmlValue: EarningsValue,
    forecastThisFY: EarningsValue,
    forecastRevision1: EarningsValue,
    forecastRevision2: EarningsValue,
    forecastRevision3: EarningsValue,
    forecastNextFY: EarningsValue,
    footnotes?: string,
}

type Nothing = { kind:"Nothing" }
type Just<T> = { kind:"Just", value: T }

type Maybe<T> =
    | Just<T>
    | Nothing

export type EarningsValue = 
    | { kind:"Forecast", 
        period:"Current FY FCST" | "FCST Revision 1" | "FCST Revision 2" | "FCST Revision 3" | "Next FY FCST", 
        units: "units" | "currency" | "percentage",
        thisFY: string,
        nextFY: string,
        value: number}
    | { kind:"Quarter", 
        period:"1st Quarter" | "2nd Quarter" | "3rd Quarter" | "4th Quarter", 
        units: "units" | "currency" | "percentage",
        value: number}
    | { kind:"Cumulative", 
        period:"1st Quarter" | "First Half" | "First Three Quarters" | "FY Cumulative", 
        units: "units" | "currency" | "percentage",
        thisFY: string,
        value: number}
    | Nothing

export type Header = {
    companyName: string,
    fiscalYear: string,
    title: string,
};

export function quarterlyCalculationV2(thisQuarterValue: EarningsValue, lastQuarterValue: EarningsValue, lastHalfValue?: EarningsValue): EarningsValue {
    
    return (thisQuarterValue.kind === "Quarter" && lastQuarterValue.kind === "Quarter")
        ? {
            kind:"Quarter",
            units: thisQuarterValue.units,
            period: thisQuarterValue.period,
            value: thisQuarterValue.value - lastQuarterValue.value
        }  // explicit condition for half yearly calculation, lastHalfValue is only needed for Fourth Quarter
        : (thisQuarterValue.kind === "Quarter" && lastQuarterValue.kind === "Nothing" && (lastHalfValue !== undefined && lastHalfValue.kind === "Quarter"))
            ? {
                kind:"Quarter",
                units: thisQuarterValue.units,
                period: thisQuarterValue.period,
                value: thisQuarterValue.value - lastHalfValue.value 
            }
            : thisQuarterValue
}

export function yearOnYearCalculationV2(valueThisFY: EarningsValue, valueLastFY: EarningsValue, kind: "Quarter" | "Cumulative" | "Forecast"): EarningsValue {

    if ((valueThisFY.kind === kind && valueLastFY.kind === kind) && (valueThisFY.period === valueLastFY.period)) {

        return (valueLastFY.value < 0)
            ? {
                ...valueThisFY,
                units: "percentage", 
                value: Number((((
                    (valueThisFY.value / valueLastFY.value) -1)* -1) * 100).toFixed(2))
            }
            : {
                ...valueThisFY,
                units: "percentage",
                value: Number(((
                    (valueThisFY.value / valueLastFY.value) -1) * 100).toFixed(2))
            } // .toFixed(2) to round the number by two decimal places. Number will output a string, string has to be wrapped in Number() typing.
    } else {
        return { kind: "Nothing" }
    }
}

export function operatingMarginCalculationV2(
    netSalesThisFY: EarningsValue,
    operatingIncomeThisFY: EarningsValue,
    kind: "Quarter" | "Cumulative" | "Forecast"
): EarningsValue {

    if ((netSalesThisFY.kind === kind && operatingIncomeThisFY.kind === kind) && (netSalesThisFY.period === operatingIncomeThisFY.period)) {

        return {
            ...operatingIncomeThisFY,
            units: "percentage",
            value: Number(((
                (operatingIncomeThisFY.value / netSalesThisFY.value)) * 100).toFixed(2))
        }
    } else {
        return { kind: "Nothing" }
    }
}

export function printValueQtrOrCml(value: EarningsValue): string {

    if ((value.kind === "Quarter" || value.kind === "Cumulative" || value.kind === "Forecast")) {
        return (value.units === "currency")
            ? `¥${value.value.toLocaleString("en")}M`
            : `${value.value}${value.units === "percentage" ? "%" : "M"}`
    } else {
        return "Error";
    }
}

export function printQuarterValuesV2(quarterValue: EarningsValue, currentQuarter: number, textLength: number): string {

    if (quarterValue.kind === "Quarter") {

        let valueString = printValueQtrOrCml(quarterValue);
        
        return border([
            spacer(quarterValue.period,12, "left"),
            spacer(valueString, textLength, "right")
            ])
    } else {
        return "";
    }
}

export function printCumulativeValuesV2(cmlValue: EarningsValue, currentQuarter: number, textLength: number): string {

    if (cmlValue.kind === "Cumulative" && cmlValue.period !== "1st Quarter") {

        let cmlPeriod = (cmlValue.kind === "Cumulative" && cmlValue.period === "First Half") 
            ? "1st Half"
            : (cmlValue.kind === "Cumulative" && cmlValue.period === "First Three Quarters")
                ? "1st 3/4" 
                : `${cmlValue.kind === "Cumulative" ? cmlValue.thisFY : "Error"}`

        let valueString = printValueQtrOrCml(cmlValue);

        return border([
                spacer(cmlPeriod, 12,"left"),
                spacer(valueString, textLength,"right")
            ])
    } else {
        return "";
    }
}

export function printYoYV2(percentageValues: EarningsValue, currentQuarter: number, textLength: number): string {

    if ((percentageValues.kind === "Quarter" || percentageValues.kind === "Cumulative") && percentageValues.units === "percentage") {

        let yoyValue = `${percentageValues.value > 0 ? "+" : ""}${percentageValues.value}%` 

        return spacer(yoyValue + " |", textLength,"right")

    } else {
        return ""
    }
}

export function printForecastValuesV2(forecastValue: EarningsValue, textLength: number): string {

    if (forecastValue.kind === "Forecast") {

        let forecastString = printValueQtrOrCml(forecastValue);

        let forecastPeriod = (forecastValue.period === "Current FY FCST")
            ? forecastValue.thisFY
            : (forecastValue.period === "Next FY FCST")
                ? forecastValue.nextFY
                : forecastValue.period


        return border([
            spacer(forecastPeriod, 16,"left"),
            spacer(forecastString, textLength,"right")
        ])
    } else {
        return "";
    } 
} 

export function printSectionHeaderV2 (value: EarningsV2, useYoY: boolean): string {

    let yoyHeader = spacer("YoY% |",12,"right");

    return (!useYoY)
        ? liner(printTextBlock(value.name,28),"−","both",true)
        : liner(printTextBlock(value.name,28) + yoyHeader,"−","both",true,40) 
}

export function qtrOrCmlOutput(values: string[], yoyValues: string[], opMargin: boolean): string[] {

    return values.flatMap((elem, index, array) => {

        let lineCheck = index === array.length-1; 

        if (elem.length === 0) {
            return [];
        } else if (opMargin === true) {
            return liner(elem,(index === array.length-1) ? "=" : "−", "bottom",true,elem.length-2)
        } else {
            return liner(elem + yoyValues[index],(lineCheck) ? "=" : "−","bottom",true,((elem.length - 2) + ((yoyValues[index].length !== 0) ? yoyValues[index].length - 1 : 0)))
        }
    }) 
}

export function forecastOutput(values: string[]): string[] {

    return values.flatMap((elem, index, array) => {

        if (elem.length === 0) {
            return [];
        } else {
            return liner(elem,"−",(index === array.length-1) ? "both" : "top" ,true);
        }
    })
}

export function printReduceSection(
    sectionHeader: string, 
    quarters: string[],
    cumulatives: string[],
    forecasts: string[],
    ): string {

        return [
            sectionHeader,
            ...quarters,
            ...cumulatives,
            ...forecasts,
            "###"
        ].reduce((acc, next) => {
            return acc + next
        })
}

import { useState } from "react";
import { Grid, Stack, Indicator, Anchor, Code } from "@mantine/core";
import { Calendar, isSameDate } from "@mantine/dates";
import { liner, printTextBlock } from "../utils/table_design_logic";
import { useSelector } from "react-redux";

export default function EVENTS_CALENDAR() {

    const state: any = useSelector(state => state);

    const [value, setValue] = useState<Date | null>(null); 
    
    interface EventDate {
        id: number;
        companyName?: string;
        eventName: string;
        eventDate: string;
        timeZone: string;
        irPage: string;
    }

    const dateArray: EventDate[] = [
        {
            id: 1,
            companyName: "Capcom",
            eventName: "4th Quarter Earnings Results, FY3/2023 (Fiscal Year ending March 2023)",
            eventDate: "May 10, 2023",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.capcom.co.jp/ir/english/",
        },
        {
            id: 2,
            companyName: "Nintendo",
            eventName: "4th Quarter Earnings Results, FY3/2023 (Fiscal Year ending March 2023)",
            eventDate: "May 9, 2023",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.nintendo.co.jp/ir/en/",
        },
        {
            id: 3,
            companyName: "Sony",
            eventName: "4th Quarter Earnings Results, FY3/2023 (Fiscal Year ending March 2023)",
            eventDate: "April 28, 2023",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.sony.com/en/SonyInfo/IR/",
        },
        {
            id: 4,
            companyName: "Microsoft",
            eventName: "3rd Quarter Earnings Results, FY6/2023 (Fiscal Year ending June 2023)",
            eventDate: "April 25, 2023",
            timeZone: "US, PDT, UTC -7 Hours",
            irPage: "https://www.microsoft.com/en-us/Investor",
        },
        {
            id: 5,
            companyName: "Ubisoft",
            eventName: "4th Quarter Earnings Results, FY3/2023 (Fiscal Year ending March 2023)",
            eventDate: "May 16, 2023",
            timeZone: "France, CEST, UTC +2 Hours",
            irPage: "https://www.ubisoft.com/en-us/company/about-us/investors",
        },
        {
            id: 6,
            companyName: "DeNA",
            eventName: "4th Quarter Earnings Results, FY3/2023 (Fiscal Year ending March 2023)",
            eventDate: "May 10, 2023",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://dena.com/intl/ir/",
        },
        {
            id: 7,
            companyName: "Koei Tecmo",
            eventName: "4th Quarter Earnings Results, FY3/2023 (Fiscal Year ending March 2023)",
            eventDate: "April 24, 2023",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.koeitecmo.co.jp/e/ir/",
        },
        {
            id: 8,
            companyName: "EA",
            eventName: "4th Quarter Earnings Results, FY3/2023 (Fiscal Year ending March 2023)",
            eventDate: "May 9, 2023",
            timeZone: "US, PDT, UTC -7 Hours",
            irPage: "https://ir.ea.com/home/default.aspx",
        },
        {
            id: 9,
            companyName: "CyberAgent",
            eventName: "2nd Quarter Earnings Results, FY9/2023 (Fiscal Year ending September 2023)",
            eventDate: "April 26, 2023",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.cyberagent.co.jp/en/ir/",
        },
        {
            id: 10,
            companyName: "GungHo",
            eventName: "1st Quarter Earnings Results, FY12/2023 (Fiscal Year ending December 2023)",
            eventDate: "May 11, 2023",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.gungho.co.jp/en/ir/",
        },
        {
            id: 11,
            companyName: "Square Enix",
            eventName: "4th Quarter Earnings Results, FY3/2023 (Fiscal Year ending March 2023)",
            eventDate: "May 12, 2023",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.hd.square-enix.com/eng/ir/",
        },
        {
            id: 12,
            companyName: "Sega Sammy",
            eventName: "4th Quarter Earnings Results, FY3/2023 (Fiscal Year ending March 2023)",
            eventDate: "April 28, 2023",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.segasammy.co.jp/english/ir/",
        },
        {
            id: 13,
            companyName: "Konami",
            eventName: "4th Quarter Earnings Results, FY3/2023 (Fiscal Year ending March 2023)",
            eventDate: "May 11, 2023",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.konami.com/ir/en/",
        },
        {
            id: 14,
            companyName: "Marvelous",
            eventName: "4th Quarter Earnings Results, FY3/2023 (Fiscal Year ending March 2023)",
            eventDate: "May 11, 2023",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://corp.marv.jp/english/",
        },
        {
            id: 15,
            companyName: "Activision Blizzard",
            eventName: "1st Quarter Earnings Results, FY12/2023 (Fiscal Year ending December 2023)",
            eventDate: "April 27, 2023",
            timeZone: "US, PDT, UTC -7 Hours",
            irPage: "https://investor.activision.com/",
        },
        {
            id: 16,
            companyName: "Take-Two",
            eventName: "4th Quarter Earnings Results, FY3/2023 (Fiscal Year ending March 2023)",
            eventDate: "May 18, 2022",
            timeZone: "US, EDT, UTC -4 Hours",
            irPage: "https://www.take2games.com/ir",
        },
        {
            id: 17,
            companyName: "GREE",
            eventName: "3rd Quarter Earnings Results, FY6/2023 (Fiscal Year ending June 2023)",
            eventDate: "May 11, 2023",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "http://www.gree.co.jp/jp/en/ir/",
        },
        {
            id: 18,
            companyName: "Bandai Namco",
            eventName: "4th Quarter Earnings Results, FY3/2023 (Fiscal Year ending March 2023)",
            eventDate: "May 10, 2023",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.bandainamco.co.jp/en/ir/index.html",
        },
        {
            id: 19,
            companyName: "Kadokawa",
            eventName: "4th Quarter Earnings Results, FY3/2023 (Fiscal Year ending March 2023)",
            eventDate: "May 11, 2023",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://group.kadokawa.co.jp/global/ir/",
        },
        {
            id: 20,
            companyName: "Falcom",
            eventName: "1st Quarter Earnings Results, FY9/2023 (Fiscal Year ending September 2023)",
            eventDate: "February 10, 2023",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.falcom.co.jp/ir",
        },
        {
            id: 21,
            companyName: "NIS",
            eventName: "3rd Quarter Earnings Results, FY3/2023 (Fiscal Year ending March 2023)",
            eventDate: "February 10, 2023",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.nippon1.co.jp/ir/ir.html",
        },
        {
            id: 22,
            companyName: "Embracer Group",
            eventName: "4th Quarter Earnings Results, FY3/2023 (Fiscal Year ending March 2023)",
            eventDate: "May 24, 2023",
            timeZone: "Sweden, CEST, UTC +2 Hour",
            irPage: "https://embracer.com/investors/",
        },
    ]

    // until I get to use toSorted... so the array doesn't mutate...
    // const sortedDateArray = dateArray.map(elem => elem).sort((b,a) => {
    //     return a.eventDate > b.eventDate
    //         ? 1
    //         : a.eventDate < b .eventDate
    //             ? -1
    //             : 0
    // })

    function selectEvent() { // for displaying data when clicking on the calendar

        return  dateArray.map((data: EventDate) => {
              if (isSameDate(value || new Date(), new Date(data.eventDate))) {
                    let selectId = data.id;
                    let selectEventCompany = (data.companyName) ? `Company: ${data.companyName}` : " ";
                    let selectEventName = `Event: ${data.eventName}`;
                    let selectEventDate = `Date: ${data.eventDate}`;
                    let selectTimeZone = `Time Zone: ${data.timeZone}`;
                    let selectIRPage = `IR page: ${(data.irPage.length > 30) ? data.irPage.slice(0,29) + " " + data.irPage.slice(29)  : data.irPage}`;
                    let anchorLink = data.irPage;

                    let eventsCount = dateArray.filter(value => value.eventDate === data.eventDate).length;

                    // an issue occurred on production while selecting dates... not sorting the array then...
                    // will look at updating to version 6 and go through breaking changes. 
                    // let eventsMessage = (array?.at(index-1)?.eventDate === data.eventDate)
                    //     ? ""
                    //     : liner(printTextBlock(`Number of events on this date: ${eventsCount}`,40),"=","both",true,40)
                        
                return (
                    <Stack key={selectId} align={"center"} mb={"sm"} >
                        <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
                            {liner(printTextBlock(`Events total on this date: ${eventsCount}`,40),"=","both",true,40)}
                            {liner(printTextBlock(selectEventName,40),"=","top",true,40)}
                            {liner(printTextBlock(selectEventCompany,40),"=","top",true,40)}
                            {liner(printTextBlock(selectEventDate,40),"=","top",true,40)}
                            {liner(printTextBlock(selectTimeZone,40),"=","top",true,40)}
                           <Anchor href={anchorLink} target="_blank">
                                <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000", padding:0, margin:0}} block>
                                    {liner(printTextBlock(selectIRPage,40),"=","both",true,40)}
                                </Code>
                           </Anchor>
                        </Code>
                    </Stack>
                )
                //   return <Card key={data.id} shadow="sm" p="sm" radius="md" withBorder style={{margin: "1em"}} >
                //       <Stack >
                //           <Text >
                //               {selectEventName}
                //           </Text>
                //           <Text >
                //               {selectEventCompany}
                //           </Text>
                //           <Text >
                //               {selectEventDate}
                //           </Text>
                //           <Text >
                //               {selectTimeZone}
                //           </Text>
                        //   <Anchor href={anchorLink} target="_blank">
                        //       {selectIRPage}
                        //    </Anchor>
                //       </Stack>
                //   </Card>
              } else {
                  return null
              }
          })
          
      };

    return (
        <>
        <Grid mt={"sm"} grow>
            <Grid.Col
                span={6} 
            >
                <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000", padding:0, margin:0}} block>
                        <Stack align={"center"}>
                            {liner(printTextBlock("Select a marked date to view upcoming events. Calendar is usually updated every three months.",40),"=","both",true,40)}
                        </Stack>
                    <Calendar 
                        styles={(theme) => ({
                            weekday: {color:(state.fontColor === "dark") ? "#fff" : "#000000", border: `1px solid`},
                            cell: {
                                border: `1px solid`,
                            }
                        })}
                        fullWidth
                        value={value} 
                        onChange={setValue}
                        excludeDate={(date) => 
                            date.toString() !== new Date(dateArray[0].eventDate).toString() 
                            && date.toString() !== new Date(dateArray[1].eventDate).toString()
                            && date.toString() !== new Date(dateArray[2].eventDate).toString()
                            && date.toString() !== new Date(dateArray[3].eventDate).toString()
                            && date.toString() !== new Date(dateArray[4].eventDate).toString()
                            && date.toString() !== new Date(dateArray[5].eventDate).toString()
                            && date.toString() !== new Date(dateArray[6].eventDate).toString()
                            && date.toString() !== new Date(dateArray[7].eventDate).toString()
                            && date.toString() !== new Date(dateArray[8].eventDate).toString()
                            && date.toString() !== new Date(dateArray[9].eventDate).toString()
                            && date.toString() !== new Date(dateArray[10].eventDate).toString()
                            && date.toString() !== new Date(dateArray[11].eventDate).toString()
                            && date.toString() !== new Date(dateArray[12].eventDate).toString()
                            && date.toString() !== new Date(dateArray[13].eventDate).toString()
                            && date.toString() !== new Date(dateArray[14].eventDate).toString()
                            && date.toString() !== new Date(dateArray[15].eventDate).toString()
                            && date.toString() !== new Date(dateArray[16].eventDate).toString()
                            && date.toString() !== new Date(dateArray[17].eventDate).toString()
                            && date.toString() !== new Date(dateArray[18].eventDate).toString()
                            && date.toString() !== new Date(dateArray[19].eventDate).toString()
                            && date.toString() !== new Date(dateArray[20].eventDate).toString()
                            && date.toString() !== new Date(dateArray[21].eventDate).toString()
                        }
                        renderDay={(date) => {
                            const day = date.getDate();
                            const fullDate = date.toString();
                            return (
                              <Indicator size={8} color={(state.fontColor === "dark") ? "#fff" : "#000000"} offset={8} 
                                disabled={
                                fullDate !== new Date(dateArray[0].eventDate).toString()
                                && fullDate !== new Date(dateArray[1].eventDate).toString() 
                                && fullDate !== new Date(dateArray[2].eventDate).toString()
                                && fullDate !== new Date(dateArray[3].eventDate).toString()
                                && fullDate !== new Date(dateArray[4].eventDate).toString()
                                && fullDate !== new Date(dateArray[5].eventDate).toString() 
                                && fullDate !== new Date(dateArray[6].eventDate).toString() 
                                && fullDate !== new Date(dateArray[7].eventDate).toString() 
                                && fullDate !== new Date(dateArray[8].eventDate).toString() 
                                && fullDate !== new Date(dateArray[9].eventDate).toString() 
                                && fullDate !== new Date(dateArray[10].eventDate).toString() 
                                && fullDate !== new Date(dateArray[11].eventDate).toString() 
                                && fullDate !== new Date(dateArray[12].eventDate).toString() 
                                && fullDate !== new Date(dateArray[13].eventDate).toString() 
                                && fullDate !== new Date(dateArray[14].eventDate).toString() 
                                && fullDate !== new Date(dateArray[15].eventDate).toString() 
                                && fullDate !== new Date(dateArray[16].eventDate).toString() 
                                && fullDate !== new Date(dateArray[17].eventDate).toString() 
                                && fullDate !== new Date(dateArray[18].eventDate).toString() 
                                && fullDate !== new Date(dateArray[19].eventDate).toString() 
                                && fullDate !== new Date(dateArray[20].eventDate).toString() 
                                && fullDate !== new Date(dateArray[21].eventDate).toString() 
                                }
                              >
                                <div>{day}</div>
                              </Indicator>
                            );
                          }}
                    />
                </Code>
                </Grid.Col>
                <Grid.Col
                    span={6} 
                >
                    {selectEvent()}
                </Grid.Col>
            </Grid>
        </>
    );
}
import { collection as fy3_17_collection } from "../data/nintendo/Nintendo-FY3-2017/mst-fy3-17";
import { collection as fy3_18_collection } from "../data/nintendo/Nintendo-FY3-2018/mst-fy3-18";
import { collection as fy3_19_collection } from "../data/nintendo/Nintendo-FY3-2019/mst-fy3-19";
import { collection as fy3_20_collection } from "../data/nintendo/Nintendo-FY3-2020/mst-fy3-20";
import { collection as fy3_21_collection } from "../data/nintendo/Nintendo-FY3-2021/mst-fy3-21";
import { collection as fy3_22_collection } from "../data/nintendo/Nintendo-FY3-2022/mst-fy3-22";

test("mapping and filtering one title...", () => {

    const totalCollection = [
        fy3_17_collection,
        fy3_18_collection,
        fy3_19_collection,
        fy3_20_collection,
        fy3_21_collection,
        fy3_22_collection,
    ] as const;

    // const filteredCollection = totalCollection.map((elem, index, array) => {
    //     return elem.map((secondElem, secondIndex, secondArray) => {
            
    //         return secondElem.filter((thirdElem, thirdIndex, thirdArray) => {
    //         return thirdElem.title === " Super Mario Party "
    //         })
    //     })
    // }).filter((elem, index) => elem.length !== 0)

    const flatCollection = totalCollection.flatMap((elem) => elem).map((elem) => {
        return elem.filter((secondElem, index, array) => {
            return secondElem.valueC !== 0 && secondElem.period === " 4th Quarter  "
        })
    }).filter((elem) => elem.length !== 0)

    console.log(flatCollection);
    
})
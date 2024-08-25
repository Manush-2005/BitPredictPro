import GetJsonData from "./Jsondata";


export default async function GetPastWeekData() {

    const data = await GetJsonData();
    const pastWeekData = data.slice(-7);
    return pastWeekData;
   
}
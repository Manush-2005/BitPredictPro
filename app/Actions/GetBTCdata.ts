

import GetJsonData from "./Jsondata";

export const GetLatestBTCdata = async () => {


  const data = await GetJsonData();
      
      const LatestData = data[data.length -1];

    // const df = new dfd.DataFrame(jsonData);
   
 return LatestData;



};
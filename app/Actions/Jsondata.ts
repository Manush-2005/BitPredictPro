import { promises as fs } from "fs";
import path from "path";


const GetJsonData = async () => {

    const jsonData = JSON.parse(await fs.readFile("data.json", "utf-8"));
    const predictionData = Object.entries(jsonData["Predection(for tommorrow)"]).map(([key, value]) => ({
        timestamp: parseInt(key),
        prediction: value
      }));
  
      const actualData = Object.entries(jsonData["Actual"]).map(([key, value]) => ({
        timestamp: parseInt(key),
        actual: value
      }));
  
      const trendData = Object.entries(jsonData["trend"]).map(([key, value]) => ({
        timestamp: parseInt(key),
        trend: value
      }));
  
      const combinedData = predictionData.map((item, index) => ({
        ...item,
        actual: actualData[index].actual,
        trend: trendData[index].trend
      }));

      return combinedData;

};

export default GetJsonData;


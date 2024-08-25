
import GetJsonData from "./Jsondata";

const GetLast30data = async () => {

    const data = await GetJsonData();

    const Last30data = data.slice(-30);

    return Last30data;

};

export default GetLast30data;


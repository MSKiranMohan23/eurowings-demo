import axios from "axios";
/**
 * 
 * @param method apiHandler
 * @param apiEndpoint 
 * @param params 
 * @returns Promise from the api call
 * Puropose : Common component to make api call
 */
const apiHandler = async (method:string = 'get',apiEndpoint: string = "", params: any) => {
  let responseData = null;
  if (apiEndpoint !== "") {
    const options = {
        method: method,
        url: apiEndpoint,
        data: params,
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      }
    responseData = await axios(options);
  }
  return responseData;
};
export { apiHandler };

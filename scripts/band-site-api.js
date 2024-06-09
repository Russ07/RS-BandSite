
const apiKeyGet = "f2961ff0-1c6f-42c9-9dd4-5578899764ab";

class BandApi {
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
};

getComments = async () => {
    try {
        const getResponse = await axios.get(`${this.baseUrl}/comments/?api_key="${this.apiKey}"`);
        const getResponseData = getResponse.data; 
        return getResponseData;
    } catch (error) {
        console.log(error);
    }
};

getShows = async () => {
    try {
        const getResponse = await axios.get(`${this.baseUrl}/showdates/?api_key="${this.apiKey}"`);
        const getResponseData = getResponse.data; 
        return getResponseData;
    } catch (error) {
        console.log(error);
    }
};

postComment = async (getNewComment) => {
    // const jsonObjectComment = JSON.stringify(getNewComment);
    console.log(getNewComment);
    try {
        // const popped = await axios.post(`${this.baseUrl}/comments/?api_key="${this.apiKey}"`).pop();
        const postNewComment = await axios.post(`${this.baseUrl}/comments/?api_key="${this.apiKey}"`,getNewComment);
        return postNewComment;
    } catch (error) {
        console.log(error)
    }
}

// putLike = async (updateLike) => {
//     // const jsonObjectComment = JSON.stringify(getNewComment);
//     console.log(updateLike);
//     try {
//         // const popped = await axios.post(`${this.baseUrl}/comments/?api_key="${this.apiKey}"`).pop();
//         const postNewLike = await axios.post(`${this.baseUrl}/comments/${updateLike}/like?api_key="${this.apiKey}"`,getNewComment);
//         return postNewLike;
//     } catch (error) {
//         console.log(error)
//     }
// }

}
export const apiCall = new BandApi(apiKeyGet);
// bandSiteApiClient.getComments();

// const data = axios.get(`https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key="f2961ff0-1c6f-42c9-9dd4-5578899764ab"`);
// const dataTry = axios.get(apiKeyUrl);

import { s3URL } from "../components/constant/userToken"

const wrondS3Url = "https://duexpress-projectx.s3.amazonaws.com/";
export const getImageUrl = (url) => {
    console.log(url)
    while(url.includes(s3URL)){
        url = url.slice(s3URL.length)
    }
    while(url.includes(wrondS3Url)){
        url = url.slice(wrondS3Url.length)
    }
    console.log(url)
    return s3URL + url;
}
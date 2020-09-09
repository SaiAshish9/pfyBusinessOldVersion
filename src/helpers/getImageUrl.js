import { s3URL } from "../components/constant/userToken"

const wrongS3Url = "https://pracify.s3.ap-south-1.amazonaws.com/";
// const wrongS3Url = "https://duexpress-projectx.s3.amazonaws.com/";



export const getImageUrl = (url) => {

    while(url.includes(s3URL)){
        url = url.slice(s3URL.length)
    }
    while(url.includes(wrongS3Url)){
        url = url.slice(wrongS3Url.length)
    }

    return s3URL + url;
}
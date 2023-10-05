import { downloadFile } from "../helper/download_file_handling.js";
import { uploadFile } from "../helper/upload_file_handler.js";

export const fileHandlingGetControllerDownload = async (req, res) => {
    try{
        const fileToDownloadId = req.params?.fileId
        downloadFile(fileToDownloadId)
   .then((fileStatus) => {
    console.log('File status:', fileStatus);
  })

        res.status(200)
        .send({
            message : 'Api Calling Successful!',
            status : true
        })
    }catch(err){
        res.status(500)
        .send({
            message : 'Internal Server Error!',
            status : false,
            error : err
        })
    }
}


export const fileHandlingGetControllerUpload = async (req, res) => {
    try{
        const fileToDownloadId = req.params?.fileId
        uploadFile(fileToDownloadId)
   .then((fileStatus) => {
    console.log('File status:', fileStatus);
  })

        res.status(200)
        .send({
            message : 'Api Calling Successful!',
            status : true
        })
    }catch(err){
        res.status(500)
        .send({
            message : 'Internal Server Error!',
            status : false,
            error : err
        })
    }
}
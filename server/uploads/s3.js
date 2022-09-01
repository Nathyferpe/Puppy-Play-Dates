//check documentation for fs and aws set up

require("dotenv").config();
const fs = require("fs");
const S3 = require('aws-sdk/clients/s3');

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECREAT_KEY

const s3 = new S3({
region,
accessKeyId,
secretAccessKey
})

// fuction to upload file//

function uploadFile(file){
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        BucketName: bucketName,
        Body: fileStream,
        Key: file.name,
    }

    return s3.upload(uploadParams).promise()
}

exports.uploadFile = uploadFile

// download file

function getFileStream(fileKey) {
    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName
    }

    return s3.getObject(downloadParams).createReadStream()
}

exports .getFileStream = getFileStream
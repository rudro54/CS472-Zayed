const http = require('node:http')
const path = require('path')
const fs = require('fs')


const sendPlainText = (res, body) => {res.end(body)}
const sendFile = (res, body) => {
    fs.createReadStream(path.join(__dirname,body)).pipe(res)
}

mineTypeMethodMap = {
    'image/jpeg': sendFile,
    'application/pdf': sendFile,
    'text/plain; charset=us-ascii': sendPlainText,
    'file;text/plain; charset=us-ascii': sendFile,
}

const mimeTypeMap = {
                        "/image": 'image/jpeg',
                        "/pdf":'application/pdf',
                        "/about": 'text/plain; charset=us-ascii',
                        "/home": 'text/plain; charset=us-ascii',
                        "/": 'text/plain; charset=us-ascii',
                        "default": 'text/plain; charset=us-ascii'
                    }
const insertHeader = (res, statusCode, statusMessage, mimeType) => {
                                                    res.statusCode = statusCode
                                                    res.statusMessage = statusMessage
                                                    res.setHeader('Content-Type', mimeType)
                                                }
const generateResponse = (res, statusCode, statusMessage, mimeType, resBody, isFile="") => {
    insertHeader(res, statusCode, statusMessage, mimeType)
    mineTypeMethodMap[isFile+mimeType](res, resBody)
}


const homeResponse = (res) => {generateResponse(res, 200, "ok", mimeTypeMap["/"], "Welcome to my website\n")}
const aboutResponse = (res) => {generateResponse(res, 200, "ok", mimeTypeMap["/about"], "about.txt", "file;")}
const pdfResponse = (res) => {generateResponse(res, 200, "ok", mimeTypeMap["/pdf"], "some.pdf")}
const imageResponse = (res) => {generateResponse(res, 200, "ok", mimeTypeMap["/image"], "some.jpg")}
const notFoundResponse = (res) => {generateResponse(res, 404, "not found", mimeTypeMap["default"], "not found")}
const methodNotAllowed = (res) => {generateResponse(res, 405, "method not allowed", mimeTypeMap["default"], "method not allowed")}


let urlMap = {}
urlMap[["GET", "/"]] = homeResponse
urlMap[["GET", "/home"]] = homeResponse
urlMap[["GET", "/about"]] = aboutResponse
urlMap[["GET", "/pdf"]] = pdfResponse
urlMap[["GET", "/image"]] = imageResponse

function handleRequest(req) {
    let urlMapKeys = Object.getOwnPropertyNames(urlMap)
    if (urlMapKeys.some(k => k.includes(req.method)) === false) return methodNotAllowed
    if (urlMapKeys.some(k => k.includes(req.url)) === false) return notFoundResponse
    return urlMap[[req.method, req.url]]
}

const server = http.createServer()

server.on('request', (req, res) => {
        handleRequest(req)(res)        
})

server.listen(3000)
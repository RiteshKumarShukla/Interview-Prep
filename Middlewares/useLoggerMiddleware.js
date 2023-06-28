function useLogger(req, res, next) {
    const { url, method, headers } = req;
    const timeStamp = new Date();
    console.log(`[${timeStamp}], ${url}, ${method}`);
    console.log("headers", headers);
    next();
}

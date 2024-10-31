module.exports = (request, response, next) => {
    response.setHeader(
        "Access-Control-Allow-Origin",
        "https://dmm-landing-shad.vercel.app"
    );
    // "http://localhost:5173"
    response.setHeader("Access-Control-Allow-Methods", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Max-Age", "10");
    next();
};

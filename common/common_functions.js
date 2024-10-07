/**
 * @param {Express.Response} res [the response object]
 * @param {object} [result=""] [the result you want to send]
 * @param {string} message [a small descriptive message]
 * @param {boolean} status [is it success or an error]  
 */
function generate_body(res,statusCode,message,result = ""){
    const response = {
        status: statusCode,
        success: statusCode >= 200 && statusCode < 300, // Success for 2xx status codes
        message: message,
        data: result
    };
    return res.status(200).send(response);
}

module.exports = {generate_body}
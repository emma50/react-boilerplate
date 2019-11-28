// require the original version of moment instead of the mocked version
const moment = require.requireActual("moment")  
export default (timeStamp = 0) => {
    return moment(timeStamp)
}
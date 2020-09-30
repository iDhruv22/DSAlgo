import util from "util";

function log(object) {
    console.log(util.inspect(object, {
        showHidden: false,
        depth: null
    }))
}

export default log;
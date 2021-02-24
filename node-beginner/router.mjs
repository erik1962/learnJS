import { Console } from "console";

function router(pathname) {
    console.log(`About to route a request for ${pathname}`);
}

export { router };
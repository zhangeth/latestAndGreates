const GOOG_CLIENT_ID = "";
const ENDPOINT = "";
const JSCHEMA = "";
const UISCHEMA = "";
const FILEPATHS = "";

const lambdaServer = {
    serverInfo: {
        dev: ENDPOINT,
        prod: ENDPOINT,
        id: GOOG_CLIENT_ID,
        jschema: JSCHEMA,
        uischema: UISCHEMA,
        filepaths: FILEPATHS
    },
    get server() 
    {
        if (window.location.hostname.indexOf("dev") > 0)
            return this.serverInfo["dev"]
        else if (window.location.hostname.indexOf("prod") > 0)
            return this.serverInfo["prod"]
        else
            return this.serverInfo["prod"]          //default to production environment
    },
    get clientID()
    {
        return this.serverInfo["id"] ;
    },
    get jschema()
    {
        return this.serverInfo["jschema"];
    },
    get uischema()
    {
        return this.serverInfo["uischema"];
    },
    get filepaths()
    {
        return this.serverInfo["filepaths"];
    }
};

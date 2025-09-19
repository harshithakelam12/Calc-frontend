export const BASEURL = "http://16.171.199.19:8080/calc-frontend";
export function callApi(reqmethod, url, data, responseHandler)
{
    let options = "";
    if(reqmethod === "GET" || reqmethod === "DELETE")
        options = {method: reqmethod, headers:{'Content-Type':'application/json'}};
    else
        options = {method: reqmethod, headers:{'Content-Type':'application/json'}, body: data};
    fetch(url, options)
        .then(response => {
            if(!response.ok)
                throw new Error(response.status + ": " + response.statusText);
            return response.text();
        })
        .then(data => responseHandler(data))
        .catch(error => alert(error));
}

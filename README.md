# wk-nodejs
Uses express to expose endpoints.

Usage:
* node index.js

Supported endpoints:
* GET /ping
* GET /notifications
  * Not implemented. Returns status code 204.
* GET /raleigh/crime
  * Current implementation does not follow specification. Does not use URL parameter query.
  * Returns data from https://data.raleighnc.gov/resource/3bhm-we7a.json.
  * Implementation directly passes URL parameters to above endpoint. For example: district=DOWNTOWN.
    * http://localhost:8081/raleigh/crime?district=DOWNTOWN
```
[{
    "district": "DOWNTOWN",
    "inc_datetime": "2018-02-03T01:31:00.000",
    "inc_no": "P18006078",
    "lcr": "35H",
    "lcr_desc": "Larceny/All Other",
    "location": {
        "type": "Point",
        "coordinates": [-78.639273241941, 35.776925872812]
    }
}, {
    "district": "DOWNTOWN",
    "inc_datetime": "2018-02-03T03:53:00.000",
    "inc_no": "P18006095",
    "lcr": "71A",
    "lcr_desc": "Traffic/DWI (Driving While Impaired)",
    "location": {
        "type": "Point",
        "coordinates": [-78.635443052242, 35.753847988575]
    }
}]
```
* GET /notifier
  * Not implemented. Returns status code 204.
* DELETE /notifier/:id
  * Not implemented. Returns status code 204.
* PUT /notifier/:id
  * Not implemented. Returns status code 204.
* GET /file
  * Returns content of README.md in the following format:
```
{
    "filename": "README.md",
    "content": "# wk-nodejs"
}
```

# Random REST Api Mantra demo app

This simple app defines a Rest API method to generate a json object with a random value.

Only one component is defined (named as "randomapi").

To install the application run the following command inside the application folder:

```bash
$ mantrad install
```

Then, to start the appliction, run:

```bash
$ mantrad startapp
```

This application defines the route http://localhost:8080/randomapi/getrandom a GET Api to retrive the json with a random value with a timestamp. To check, use a tool like Postman or just open a web browser pointing to that route.

The result has this format: 

```json
{
    "success": true,
    "payload": {
        "randomvalue":"< 32 characters hex string with the random value >",
        "timestamp": <time stamp> 
    }
}
```

To see the routes created by the app, run:

```bash
$ mantrad show-gets
```

# More about Mantra Framework
Read official documentation at [Mantra site](https://www.mantrajs.com).

Download demos at [Mantra site demos](https://www.mantrajs.com/mantrademos/showall) and learn by example.

Download common Mantra components at [Mantra site components](https://www.mantrajs.com/marketplacecomponent/components).
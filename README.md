# HTML to PDF with nodejs app on docker

You can convert html to pdf with this nodejs app at server or on docker engine.

### Usage of API
POST to: http://localhost:3000/html-to-pdf

with sample BODY:
```json
{
    "fileName" : "example.pdf",
    "html" : "<b>html</b> test document"
}
```

### Developing script
```shell
npm start
```

### Docker build
```shell
docker build -t html-to-pdf-api . 
```
### Docker run
```shell
docker run -p 3000:3000 html-to-pdf-api
```

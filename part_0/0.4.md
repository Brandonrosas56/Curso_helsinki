# Diagrama de Secuencia

```mermaid
sequenceDiagram
    participant browser
    participant server
    
    Note right of browser: input sends a new note to the server 
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of server: server adds the new note to the array
    server-->>browser: redirect to /exampleapp/notes
    deactivate server
    
    Note right of browser: browser redirects to notes
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: main.css
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: main.js
    deactivate server    

    Note right of browser: browser sends the request to get JSON data 
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: "+100 another arrays"  {content: 'qq', date: '2024-07-10T04:50:39.453Z'}
    deactivate server   
    Note right of browser: browser renders the notes 
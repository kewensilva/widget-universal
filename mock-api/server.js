import http from "http";


const server =
    http.createServer(
        (req, res) => {

            res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
            res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
            res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
            if (req.method === 'OPTIONS') {
                res.writeHead(200);
                res.end();
                return; // Interrompe a execução aqui
            }
            if (req.url === "/v1/leads" && req.method === "POST") {
                let body = "";
                req.on("data", chunk => {
                    body += chunk;
                });
                req.on("end", () => {
                    console.log("LEAD RECEBIDO");
                    console.log(JSON.parse(body));
                    res.writeHead(200, {
                        "Content-Type":
                            "application/json"
                    });

                    res.end(JSON.stringify({
                        success: true
                    })
                    );
                });
                return;
            }
            res.writeHead(404);
            res.end();
        });

server.listen(3333, () => {
    console.log("Mock API running");

});
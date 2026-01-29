import { useState } from "react";
import axios from "axios"

export default function RequestForm() {
    const [url, setUrl] = useState("");
    const [method, setMethod] = useState("GET");
    const [body, setBody] = useState("");
    const [response, setResponse] = useState("");
    const [error, setError] = useState("");

    const sendRequest = async () => {
        setError("");
        setResponse("");

        try {
            const res = await axios.post("http://localhost:5000/send-request", {
                method,
                url,
                body: (method === "POST" || method === "PUT") && body ? JSON.parse(body) : {}
            });
            setResponse(JSON.stringify(res.data, null, 2));
        } catch (err) {
            setError(err.response?.data?.error || err.message);
        }
    };

    return (
        <div className="request-box">
            <div className="url-bar">
                <select value={method} onChange={e => setMethod(e.target.value)}>
                    <option>GET</option>
                    <option>POST</option>
                    <option>PUT</option>
                    <option>DELETE</option>
                </select>
                <input placeholder="Enter request URL" value={url} onChange={e => setUrl(e.target.value)} />
                <button onClick={sendRequest}>Send</button>
            </div>
            {(method === "POST" || method === "PUT") && (
                <textarea placeholder="Request Body (JSON)" value={body} onChange={e => setBody(e.target.value)}></textarea>
            )}

            {error && <div className="error-box">{error}</div>}
            {response && <pre className="response-box">{response}</pre>}
        </div>
    )

}
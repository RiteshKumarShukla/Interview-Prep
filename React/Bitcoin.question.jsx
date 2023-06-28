/*You have been tasked with building a dashboard that displays a real time bitcoin prices from the coinbase API. The dashboard should fetch the current bitcoin price every  second and display it in a visually appealing WebAssembly. Additionaly, the dashboard should display a line chart of the bitcoin price over time, with the cart updating  in real-time as new data is received. Please create a react component called bitcoin dashboard that accomplishes these requirements. The component should :

1. Fetch current bitcoin price every second from the coinbase API.
2. Display the current bitcoin price in a visually appealing way.
3. Display a line chart of the bitcoin price over time , with the chart updating in real-time as new data is received. 
4. Use the recharts library to display the line charts.
5. Use web WebSocket to receive real time updated from coinbase api.
*/

import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const BitcoinDashboard = () => {
    const [bitcoinPrice, setBitcoinPrice] = useState(0);
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const interval = setInterval(fetchBitcoinPrice, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        const socket = new WebSocket("wss://coinbase-websocket-url"); // replace with your own coinbase websocket url

        socket.onopen = () => {
            console.log("WebSocket connection opened");
        };

        socket.onmessage = (event) => {
            const newPrice = JSON.parse(event.data).price;
            setBitcoinPrice(newPrice);

            setChartData((prevData) => [
                ...prevData,
                { time: new Date().toLocaleTimeString(), price: parseFloat(newPrice) },
            ]);
        };

        socket.onclose = () => {
            console.log("WebSocket connection closed");
        };

        return () => {
            socket.close();
        };
    }, []);

    const fetchBitcoinPrice = () => {
        fetch("https://api.coinbase.com/v2/prices/BTC-USD/spot")
            .then((response) => response.json())
            .then((data) => {
                const newPrice = data.data.amount;
                setBitcoinPrice(newPrice);

                setChartData((prevData) => [
                    ...prevData,
                    { time: new Date().toLocaleTimeString(), price: parseFloat(newPrice) },
                ]);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <h1>Bitcoin Price: {bitcoinPrice}</h1>

            <LineChart width={600} height={300} data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
};

export default BitcoinDashboard;

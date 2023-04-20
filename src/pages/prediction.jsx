import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Prediction() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/pd').then(response => {
      setData(JSON.parse(response.data.data));
    });
  }, []);

  const getRainStatusColor = (rainStatus) => {
    if (rainStatus === 'Raining') {
      return 'text-danger';
    } else if (rainStatus === 'Not Raining') {
      return 'text-success';
    } else {
      return '';
    }
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Prediction</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="text-center">Date</th>
            <th className="text-center">Rainfall</th>
            <th className="text-center">Rain Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.Date}>
              <td className="text-center">{item.Date}</td>
              <td className="text-center">{item['Rainfall Amount']}mm</td>
              <td className={`text-center ${getRainStatusColor(item['Rain Status'])}`}>{item['Rain Status']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Prediction;

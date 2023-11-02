import React from 'react';
import AnalyticsGraph from './AnalyticsGraph';
import TagStatistics from './TagStatistics'; 
import { useEffect, useState } from 'react';
import axios from 'axios';

function AnalyticsPage() {

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios.get('http://neosaas.net/api/get-statistics/')
      .then((response) => {
        setChartData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <AnalyticsGraph data={chartData}/>
      <TagStatistics /> 
    </div>
  );
}

export default AnalyticsPage;

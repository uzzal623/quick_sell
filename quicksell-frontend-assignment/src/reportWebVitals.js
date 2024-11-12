const reportWebMetrics = performanceEntry => {
  if (performanceEntry && typeof performanceEntry === 'function') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(performanceEntry);
      getFID(performanceEntry);
      getFCP(performanceEntry);
      getLCP(performanceEntry);
      getTTFB(performanceEntry);
    });
  }
};

export default reportWebMetrics;

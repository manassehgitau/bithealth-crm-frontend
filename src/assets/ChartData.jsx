export const dataLine = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 60],
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
        },
    ],
};

export const dataBar = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
        {
            label: 'Quantity',
            data: [12, 19, 3, 5],
            backgroundColor: [
                'rgba(54, 162, 235, 0.7)',       
                'rgba(255, 206, 86, 0.7)', 
                'rgba(54, 162, 235, 0.7)',       
                'rgba(255, 206, 86, 0.7)' 
            ],
            borderColor: [
                'rgba(54, 162, 235, 0.7)',       
                'rgba(255, 206, 86, 0.7)', 
                'rgba(54, 162, 235, 0.7)',       
                'rgba(255, 206, 86, 0.7)'   
            ],
            borderWidth: 1,
        },
    ],
};

export const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
  ];
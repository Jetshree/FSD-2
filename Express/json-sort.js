const express = require("express");

const app = express();

// Sample data
const s = {
    d: [
        {
            'name': 'A',
            'age': 20
        },
        {
            'name': 'B',
            'age': 18
        },
        {
            'name': 'C',
            'age': 19
        }
    ]
};

// Route to handle the request
app.get("/", (req, res) => {
    // Sort the data by age in ascending order
    s.d.sort((a, b) => a.age - b.age);

    // Generate HTML table
    let tableHTML = `
        <html>
            <head>
                <title>Data Table</title>
                <style>
                    table {
                        width: 50%;
                        border-collapse: collapse;
                    }
                    th, td {
                        padding: 8px;
                        text-align: left;
                        border: 1px solid #ddd;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h1>Data Table Sorted by Age</h1>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
    `;

    // Add rows dynamically from the sorted data
    s.d.forEach(person => {
        tableHTML += `
            <tr>
                <td>${person.name}</td>
                <td>${person.age}</td>
            </tr>
        `;
    });

    tableHTML += `
                </table>
            </body>
        </html>
    `;

    // Send the HTML response
    res.send(tableHTML);
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

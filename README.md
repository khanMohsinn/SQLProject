# SQLProject
Repository for SQL project

This app utilizes **express** for fetching data from **Postgresql** database.

The following endpoints are available for getting output of different queries : 
1. http://localhost:8000/employees/query1
2. http://localhost:8000/employees/query2
3. http://localhost:8000/employees/query3

The above mentioned endpoints will return json data containing the required parameters. 

Example JSON response:

{
"queryStatement": {1 item},
"queryResponse": [1 item]
}

Here, queryStatement contains the problem statement and the queryResponse is the solution for that particular problem.

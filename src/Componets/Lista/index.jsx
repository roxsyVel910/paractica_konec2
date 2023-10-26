import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/applicants/10/document/73945540", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result); // Verifica que la respuesta sea un objeto válido
        setData(result.data); // Asigna el objeto data a `data`
      })
      .catch(error => console.log('error', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>; 
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {Object.keys(data).map((key) => (
              <TableCell align="right" style={{ fontWeight: 'bold', background: '#e0e0e0' }} key={key}>
                {key === 'createdDate' ? 'identificador' : key}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {Object.values(data).map((value) => (
              <TableCell align="right" key={value}>{value}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
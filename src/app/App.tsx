import React from "react";
import "../css/app.css";
import { Button, Container, Stack, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm">
      <Stack flexDirection={"column"}>
        <Typography variant="h4" component="h4">
          Create React App on Typescript with REDUX
        </Typography>
        <Button variant="contained">Contained</Button>
      </Stack>
    </Container>
  );
}

export default App;

import { Box, Container, Stack } from "@mui/material";

function Statistics() {
    return <div className={"static-frame"}>
        <Container>
            <Stack className="info">
                <Stack className="static-box">
                    <Box className="static-num">12</Box>
                    <Box className="static-text">Restaurant</Box>
                </Stack>
                <Stack className="static-box">
                    <Box className="static-num">8</Box>
                    <Box className="static-text">Exprience</Box>
                </Stack>
                <Stack className="static-box">
                    <Box className="static-num">50+</Box>
                    <Box className="static-text">Menu</Box>
                </Stack>
                <Stack className="static-box">
                    <Box className="static-num">200+</Box>
                    <Box className="static-text">Clients</Box>
                </Stack>
            </Stack>
        </Container>
    </div>
}

export default Statistics;
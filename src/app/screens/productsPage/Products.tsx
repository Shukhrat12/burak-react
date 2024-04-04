import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Badge from "@mui/icons-material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import RemoveRedIcon from "@mui/icons-material/RemoveRedEye";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchBar from "../../components/search/index";
import { AspectRatio, CardOverflow, CssVarsProvider } from "@mui/joy";

const products = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
];

function Products() {
  return (
    <div className="products">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar-big-box"}>
            <Box className={"category-title"}>Burak Restaurant</Box>
            <Box>
              <SearchBar />
            </Box>
          </Stack>

          <Stack className={"dishes-filter-section"}>
            <Stack className={"dishes-filter-box"}>
              <Button
                variant={"contained"}
                color={"primary"}
                className={"order"}
              >
                New
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Price
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Views
              </Button>
            </Stack>
          </Stack>

          <Stack className={"list-category-section"}>
            
              <div className="vert-buttons">
                <Button variant={"contained"}
                color={"secondary"}
                className={"side-button"}>One</Button>
                <Button variant={"contained"}
                color={"secondary"}
                className={"side-button"}>Two</Button>
                <Button variant={"contained"}
                color={"secondary"}
                className={"side-button"}>Three</Button>
                <Button variant={"contained"}
                color={"secondary"}
                className={"side-button"}>Four</Button>
                <Button variant={"contained"}
                color={"primary"}
                className={"side-button"}>Five</Button>
              </div>
            

            <Stack className={"cards-frame"}>
              <CssVarsProvider>
                {products.length !== 0 ? (
                  products.map((ele, index) => {
                    console.log("product: ", ele);
                    return (
                      <Card key={index} variant="outlined" className={"card"}>
                        <CardOverflow>
                          <div className="product-sale">Normal size</div>
                          <AspectRatio ratio="1">
                            <img src={ele.imagePath} alt="image" />
                          </AspectRatio>
                        </CardOverflow>
                        <CardOverflow variant="soft" className="product-detail">
                          <Stack className="info">
                            <Stack className="product-top">
                              <Typography className={"title"}>
                                {ele.productName}
                              </Typography>
                              <Typography className={"price"}>$12</Typography>
                            </Stack>
                            <Stack className="product-bottom">
                              <Typography className={"views"}></Typography>
                            </Stack>
                          </Stack>
                        </CardOverflow>
                      </Card>
                    );
                  })
                ) : (
                  <Box className="no-data">New Products are not available!</Box>
                )}
              </CssVarsProvider>
            </Stack>
          </Stack>

          <Stack className={"pagination-section"}>
            <Pagination
              count={3}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>
      <div>
        <Container>
          <Stack>
            <Box>Our Family Brands</Box>
            <Stack className={"card-boxes"}>
            <Box>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            <Box>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            <Box>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            <Box>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            </Stack>
            
          </Stack>
        </Container>
      </div>

      <div className={"address"}>
        <Container>
          <Stack>
            <Box>Our Address</Box>
            <iframe
              style={{ marginTop: "60px" }}
              src="https://maps.google.com/maps?q=Burak%20restaurand%20istanbul&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              width={"1320"}
              height={"500"}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}

export default Products;

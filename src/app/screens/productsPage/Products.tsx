import {
  Badge,
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Stack,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import RemoveRedIcon from "@mui/icons-material/RemoveRedEye";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchBar from "../../components/search/index";
import { useSelector } from "react-redux";
import { retrieveProducts } from "./productsPageSelector";
import { Dispatch, createSelector } from "@reduxjs/toolkit";
import { serverApi } from "../../../lib/config";
import { Product } from "../../../lib/types/product";
import { setProducts } from "./productsPageSlice";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

function Products() {
  const { products } = useSelector(productsRetriever);
  return (
    <div className="products">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar-big-box"}>
            <Box></Box>
            <Box className={"category-title"}>Burak Restaurant</Box>
            <Box className={"single-search-big-box"}>
              <SearchBar />
            </Box>
          </Stack>
          <Stack className={"dishes-filter-box"}>
            <Button variant={"contained"} color={"primary"} className={"order"}>
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
          <Stack className={"list-category-section"}>
            <Stack className={"product-category"}>
              <div className="category-main">
                <Button variant={"contained"} color={"secondary"}>
                  OTHER
                </Button>
                <Button variant={"contained"} color={"secondary"}>
                  SALADS
                </Button>
                <Button variant={"contained"} color={"secondary"}>
                  DRINK
                </Button>
                <Button variant={"contained"} color={"secondary"}>
                  DESSERT
                </Button>
                <Button variant={"contained"} color={"primary"}>
                  DISH
                </Button>
              </div>
            </Stack>

            <Stack className={"product-wrapper"}>
              {products.length !== 0 ? (
                products.map((product: Product) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  return (
                    <Stack key={product._id} className={"product-card"}>
                      <Stack
                        className={"product-img"}
                        sx={{
                          backgroundImage: `url(${imagePath})`,
                          backgroundSize: "cover",
                        }}
                      >
                        <Box className="product-sale">Normal size </Box>
                        <Stack>
                          <Box>
                            <Button className={"shop-btn"}>
                              <img
                                src={"/icons/shopping-cart.svg"}
                                alt="btn-image"
                              />
                            </Button>
                          </Box>
                          <Box>
                            <Button className={"view-btn"}>
                              <Badge badgeContent={20} color="secondary">
                                <RemoveRedIcon
                                  sx={{ color: 20 ? "grey" : "white" }}
                                />
                              </Badge>
                            </Button>
                          </Box>
                        </Stack>
                      </Stack>
                      <Box className={"product-desc-box"}>
                        <span className={"product-title"}>
                          {product.productName}
                        </span>
                        <div className={"product-desc"}>
                          <MonetizationOnIcon />
                          {product.productPrice}
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className="no-data">New Products are not available!</Box>
              )}
            </Stack>
          </Stack>

          <Stack className={"pagination-section"}>
            <Pagination
              count={3}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>
      <div className={"brands-logo"}>
        <Container className={"family-brands"}>
          <Box className={"category-title"}>Our Family Brands</Box>
          <Stack className={"brand-list"}>
            <Box>
              <Card className="card-media">
                <CardMedia
                  component="img"
                  image="../../../img/gurme.webp"
                  alt="green iguana"
                />
              </Card>
            </Box>
            <Box>
              <Card className="card-media">
                <CardMedia
                  component="img"
                  image="../../../img/seafood.webp"
                  alt="green iguana"
                />
              </Card>
            </Box>
            <Box>
              <Card className="card-media">
                <CardMedia
                  component="img"
                  image="../../../img/sweets.webp"
                  alt="green iguana"
                />
              </Card>
            </Box>
            <Box>
              <Card className="card-media">
                <CardMedia
                  component="img"
                  image="../../../img/doner.webp"
                  alt="green iguana"
                />
              </Card>
            </Box>
          </Stack>
        </Container>
      </div>

      <div className={"address"}>
        <Container>
          <Stack>
            <Box className={"category-title"}>Our Address</Box>
            <iframe
              style={{ marginTop: "60px" }}
              src="https://maps.google.com/maps?q=Burak%20restaurand%20istanbul&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              width={"1260"}
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

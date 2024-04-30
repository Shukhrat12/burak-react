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
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchBar from "../../components/search/index";
import { useDispatch, useSelector } from "react-redux";
import { retrieveProducts } from "./productsPageSelector";
import { Dispatch, createSelector } from "@reduxjs/toolkit";
import { serverApi } from "../../../lib/config";
import { Product, ProductInquiry } from "../../../lib/types/product";
import { setProducts } from "./productsPageSlice";
import { ChangeEvent, useEffect, useState } from "react";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import SearchIcon from "@mui/icons-material/Search";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

function Products() {
  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriever);
  const [productSearch, setProductSearch] = useState<ProductInquiry>({
    page: 1,
    limit: 8,
    order: "createdAt",
    productCollection: ProductCollection.DISH,
    search: "",
  });

  const [searchText, setsearchText] = useState<string>("");

  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts(productSearch)
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, [productSearch]);

  useEffect(() => {
    if (searchText === "") {
      productSearch.search = "";
      setProductSearch({ ...productSearch });
    }
  });

  /** HANDLERS **/

  const searchCollectionHandler = (collection: ProductCollection) => {
    productSearch.page = 1;
    productSearch.productCollection = collection;
    setProductSearch({ ...productSearch });
  };

  const searchOrderHandler = (order: string) => {
    productSearch.page = 1;
    productSearch.order = order;
    setProductSearch({ ...productSearch });
  };

  const searchProductHandler = () => {
    productSearch.search = searchText;
    setProductSearch({ ...productSearch });
  };

  const paginationHandler = (e: ChangeEvent<any>, value: number) => {
    productSearch.page = value;
    setProductSearch({ ...productSearch });
  };

  return (
    <div className="products">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar-big-box"}>
            <Box></Box>
            <Box className={"category-title"}>Burak Restaurant</Box>
            <Stack className={"single-search-big-box"}>
              <input
                type={"search"}
                name={"singleSearch"}
                placeholder={"Type here"}
                value={searchText}
                onChange={(e) => setsearchText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") searchProductHandler();
                }}
              />
              <Button
                className="single-button-search"
                variant="contained"
                endIcon={<SearchIcon />}
                onClick={searchProductHandler}
              >
                Search
              </Button>
            </Stack>
          </Stack>
          <Stack className={"dishes-filter-box"}>
            <Button
              variant={"contained"}
              color={
                productSearch.order === "createdAt" ? "primary" : "secondary"
              }
              className={"order"}
              onClick={() => searchOrderHandler("createdAt")}
            >
              New
            </Button>
            <Button
              variant={"contained"}
              color={
                productSearch.order === "productPrice" ? "primary" : "secondary"
              }
              className={"order"}
              onClick={() => searchOrderHandler("productPrice")}
            >
              Price
            </Button>
            <Button
              variant={"contained"}
              color={
                productSearch.order === "productViews" ? "primary" : "secondary"
              }
              className={"order"}
              onClick={() => searchOrderHandler("productViews")}
            >
              Views
            </Button>
          </Stack>
          <Stack className={"list-category-section"}>
            <Stack className={"product-category"}>
              <div className="category-main">
                <Button
                  variant={"contained"}
                  color={
                    productSearch.productCollection === ProductCollection.OTHER
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.OTHER)
                  }
                >
                  OTHERS
                </Button>
                <Button
                  variant={"contained"}
                  color={
                    productSearch.productCollection === ProductCollection.SALAD
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.SALAD)
                  }
                >
                  SALADS
                </Button>
                <Button
                  variant={"contained"}
                  color={
                    productSearch.productCollection === ProductCollection.DRINK
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.DRINK)
                  }
                >
                  DRINK
                </Button>
                <Button
                  variant={"contained"}
                  color={
                    productSearch.productCollection ===
                    ProductCollection.DESSERT
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.DESSERT)
                  }
                >
                  DESSERT
                </Button>
                <Button
                  variant={"contained"}
                  color={
                    productSearch.productCollection === ProductCollection.DISH
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.DISH)
                  }
                >
                  DISH
                </Button>
              </div>
            </Stack>

            <Stack className={"product-wrapper"}>
              {products.length !== 0 ? (
                products.map((product: Product) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  const sizeVolume =
                    product.productCollection === ProductCollection.DRINK
                      ? product.productVolume + " litre"
                      : product.productSize + " size";
                  return (
                    <Stack key={product._id} className={"product-card"}>
                      <Stack
                        className={"product-img"}
                        sx={{
                          backgroundImage: `url(${imagePath})`,
                          backgroundSize: "cover",
                        }}
                      >
                        <Box className="product-sale">{sizeVolume}</Box>
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
                              <Badge
                                badgeContent={product.productViews}
                                color="secondary"
                              >
                                <RemoveRedIcon
                                  sx={{
                                    color:
                                      product.productViews === 0
                                        ? "grey"
                                        : "white",
                                  }}
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
              count={
                3
                //products.length !== 0 ? productSearch.page + 1 : productSearch.page;
              }
              page={productSearch.page}
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
              onChange={paginationHandler}
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

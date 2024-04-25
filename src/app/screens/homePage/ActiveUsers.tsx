import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePopularDishes, retrieveTopUsers } from "./HomePageSelector";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";
import { Member } from "../../../lib/types/member";

const topUsersRetriever = createSelector(retrieveTopUsers, (topUsers) => ({
  topUsers,
}));

function ActiveUsers() {
  const { topUsers } = useSelector(topUsersRetriever);

  return (
    <div className={"active-users-frame"}>
      <Container>
        <Stack className={"main"}>
          <Box className={"category-title"}>Active Users</Box>
          <Stack className={"cards-frame"}>
            <CssVarsProvider>
              {topUsers.length !== 0 ? (
                topUsers.map((member: Member) => {
                  const imagePath = `${serverApi}/${member.memberImage}`;
                  return (
                    <Card
                      key={member._id}
                      variant="outlined"
                      className={"card"}
                    >
                      <CardOverflow>
                        <AspectRatio ratio="1">
                          <img src={imagePath} alt="image" />
                        </AspectRatio>
                      </CardOverflow>
                      <CardOverflow variant="soft" className="product-detail">
                        <Stack className="info">
                          <Typography className={"name"}>
                            {member.memberNick}
                          </Typography>
                        </Stack>
                      </CardOverflow>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">
                  New Active Users are not available!
                </Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

export default ActiveUsers;

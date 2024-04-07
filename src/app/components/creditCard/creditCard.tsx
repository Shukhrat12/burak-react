import * as React from "react";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import Checkbox from "@mui/joy/Checkbox";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AspectRatio from "@mui/joy/AspectRatio";
import { CardOverflow } from "@mui/joy";

export default function CreditCardForm() {
  return (
    <Card className={"credit-card"} variant="plain">
      <CardContent
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
          gap: 1.5,
        }}
      >
        <FormControl sx={{ gridColumn: "1/-1" }}>
          <Input placeholder="Card number" endDecorator={<CreditCardIcon />} />
        </FormControl>
        <FormControl>
          <Input placeholder="Expiry date" endDecorator={<CreditCardIcon />} />
        </FormControl>
        <FormControl>
          <Input placeholder="CVC/CVV" endDecorator={<InfoOutlined />} />
        </FormControl>
        <FormControl sx={{ gridColumn: "1/-1" }}>
          <Input placeholder="Enter cardholder's full name" />
        </FormControl>
      </CardContent>
      <div className={"cards-frame"}>
        <div>
          <img src="../../../icons/western-card.svg" alt="" />
        </div>
        <div>
          <img src="../../../icons/master-card.svg" alt="" />
        </div>
        <div>
          <img src="../../../icons/paypal-card.svg" alt="" />
        </div>
        <div>
          <img src="../../../icons/visa-card.svg" alt="" />
        </div>
      </div>
    </Card>
  );
}

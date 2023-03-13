import React, { useState } from "react";
import { useQuery } from "react-query";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const Facts = () => {
  const [key, setKey] = useState(0);
  const { isLoading, error, data } = useQuery(["fact", key], () =>
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random").then((res) =>
      res.json()
    )
  );

  if (isLoading) return <p>Loading.... </p>;
  if (error) return <p>Error: {error.message} </p>;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 345, alignContent: "center" }}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              color={blueGrey}
            >
              True Facts
            </Typography>
            <Typography>
              <p>{data.text} &#128522;</p>
              <Button
                variant="contained"
                onClick={() => setKey((prevkey) => prevkey + 1)}
              >
                Generate
              </Button>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Facts;

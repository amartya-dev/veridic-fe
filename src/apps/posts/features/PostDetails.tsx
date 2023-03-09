import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Skeleton,
  Typography,
  useTheme,
  Container,
  useMediaQuery,
} from "@mui/material";
import { useParams, Link as RouterLink, useNavigate } from "react-router-dom";
//
import { Icon } from "@iconify/react";
import arrowFill from "@iconify/icons-eva/arrow-back-fill";
//
import Page from "apps/common/components/Page";

export function PostDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const itemId = parseInt(params.id as string);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getItem() {
      // await setItemId(itemId);
      // await fetchItem();
      setLoading(false);
    }
    getItem();
  }, [itemId]);

  return (
    <Page title="Item Details">
      <Container maxWidth="xl">
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={10} md={10}>
            <Box sx={{ pt: 2 }}>
              <Button variant="text" component={RouterLink} to="/items/all">
                <Icon icon={arrowFill} color="#46C084" height={30} />
                Back to items
              </Button>
            </Box>
            <Box sx={{ pt: 2, pl: 1 }}>
              <Typography variant="h4">
                {loading ? <Skeleton height={60} /> : "Item Details"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={10} md={10}>
            {loading ? <Skeleton variant="rectangular" height={200} /> : <></>}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

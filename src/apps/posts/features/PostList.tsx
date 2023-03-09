import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//
import {
  Box,
  Container,
  Grid,
  Pagination,
  Skeleton,
  Typography,
} from "@mui/material";
//
import Page from "apps/common/components/Page";
import PostListItem from "apps/posts/components/PostListItem";
import { Post } from "../models/post";
import PostsAPIs from "../utils/postAPIs";

export function PostsList() {
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const navigate = useNavigate();

  const postAPIs = PostsAPIs();

  useEffect(() => {
    setLoading(true);
    async function getAllItems() {
      const posts = await postAPIs.getAllPosts(18, pageNumber);
      setPosts(posts.data);
      setLoading(false);
    }
    getAllItems();
  }, [pageNumber]);

  return (
    <Page title="All Items">
      <Container maxWidth="xl">
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h4">
              {loading ? (
                <Skeleton sx={{ marginLeft: "8%" }} height={60} width="60vw" />
              ) : (
                "All Posts"
              )}
            </Typography>
            {/* <IconButton
                onClick={() => {
                  navigate("/posts/add");
                }}
              >
                <Icon icon={addIcon} color="#46C084" height={30} />
              </IconButton> */}
          </Grid>
          {loading ? (
            <Grid item xs={12} sm={10} md={10}>
              <Skeleton variant="rectangular" height="60vh" width="60vw" />
            </Grid>
          ) : (
            <>
              {posts.length === 0 && (
                <Grid item xs={12} sm={6} md={6} lg={4} spacing={2}>
                  <Typography variant="h2">All empty here</Typography>
                </Grid>
              )}
              {posts.map((post) => (
                <Grid key={post.id} item xs={12} sm={6} md={4} spacing={2}>
                  <PostListItem post={post} />
                </Grid>
              ))}
            </>
          )}
        </Grid>
        <Grid
          container
          alignContent="center"
          xs={12}
          sx={{ marginTop: "3%", marginBottom: "2%" }}
        >
          <Grid container item xs={12} justifyContent={"center"}>
            <Pagination
              count={10}
              onChange={(_, value) => {
                setPageNumber(value);
              }}
              page={pageNumber}
              color="primary"
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

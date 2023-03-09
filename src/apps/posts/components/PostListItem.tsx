import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
// material
import {
  Card,
  CardHeader,
  Box,
  Stack,
  CardActionArea,
  Avatar,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { Post } from "apps/posts/models/post";
import { HoverableCard } from "apps/common/components/HoverableCard";
// ----------------------------------------------------------------------

interface PostListItemProps {
  post: Post;
}

export default function PostListItem({ post }: PostListItemProps) {
  const navigate = useNavigate();
  return (
    <HoverableCard
      onClick={() => {
        // navigate(`/posts/{$}`);
        window.location.replace(post.link);
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "black" }} src={""}>
            ?
          </Avatar>
        }
        title={
          <Typography
            dangerouslySetInnerHTML={{
              __html: post.title.rendered,
            }}
          />
        }
        subheader={<>{moment(post.date).format("MMMM Do YYYY")}</>}
      />
      <CardMedia
        component="img"
        height="300"
        image={post.jetpackFeaturedMediaUrl}
        alt={post.title.rendered}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          dangerouslySetInnerHTML={{
            __html: post.excerpt.rendered,
          }}
        />
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton
          aria-label="bookmark"
          onClick={(event) => {
            console.log("clicked");
            event.stopPropagation();
          }}
        >
          <Icon icon="bxs:bookmark-alt" />
        </IconButton>
        <IconButton
          aria-label="share"
          onClick={(event) => {
            console.log("clicked");
            event.stopPropagation();
          }}
        >
          <Icon icon="ant-design:share-alt-outlined" />
        </IconButton>
        <Stack direction="row" sx={{ marginLeft: "auto" }}>
          <IconButton
            aria-label="bookmark"
            onClick={(event) => {
              console.log("clicked");
              event.stopPropagation();
            }}
          >
            <Icon icon="ph:hands-clapping-thin" />
          </IconButton>
        </Stack>
      </CardActions> */}
    </HoverableCard>
  );
}

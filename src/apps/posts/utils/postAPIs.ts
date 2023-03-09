import axios from "apps/common/utils/axios/defaults";
import { snakeAndCamelCase } from "apps/common/utils/axios/configs";
import { ItemCreate, ItemEdit } from "apps/posts/models/api";
import { Post } from "apps/posts/models/post";

// ToDo add mocks for tests here later

const POSTS_API_BASE = "/posts";

const PostsAPIs = (itemId?: number) => {
  return {
    getAllPosts: (pageSize?: number, pageNumber?: number) =>
      axios.get<Post[]>(`${POSTS_API_BASE}/`, {
        ...snakeAndCamelCase,
        params: {
          perPage: pageSize || 18,
          page: pageNumber || 1,
        },
      }),
    getPost: () =>
      axios.get<Post>(`${POSTS_API_BASE}/${itemId}`, snakeAndCamelCase),
  };
};

export default PostsAPIs;

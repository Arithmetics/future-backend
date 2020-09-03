import { rule, shield } from "graphql-shield";

import { getUserId } from "../utils";

const rules = {
  isAuthenticatedUser: rule({ cache: "contextual" })((parent, _, context) => {
    const userId = getUserId(context);
    return !!userId;
  }),
  isPostOwner: rule()(async (parent, { id }, context) => {
    const userId = getUserId(context);
    const author = await context.prisma.post
      .findOne({
        where: {
          id: Number(id),
        },
      })
      .author();
    return userId === author.id;
  }),
};

export const permissions = shield({
  Query: {
    me: rules.isAuthenticatedUser,
    filterPosts: rules.isAuthenticatedUser,
    post: rules.isAuthenticatedUser,
  },
  Mutation: {
    createDraft: rules.isAuthenticatedUser,
    deletePost: rules.isPostOwner,
    publish: rules.isPostOwner,
  },
});

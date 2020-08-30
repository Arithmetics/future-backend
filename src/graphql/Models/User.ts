import { schema } from 'nexus';

schema.objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.name();
    t.model.userName();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.deletedAt();
    t.model.posts({ pagination: false });
  },
});

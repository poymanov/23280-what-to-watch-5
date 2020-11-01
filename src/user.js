export const buildUser = (userData) => {
  return {
    id: userData.id,
    name: userData.name,
    email: userData.email,
    avatarUrl: userData.avatar_url,
  };
};

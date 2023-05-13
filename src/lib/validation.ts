export const isValidEmail = (email: string) => {
  // Overly simple email address regex
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

export const isValidOrgName = (organizationName: string) => {
  return organizationName.length > 3;
};

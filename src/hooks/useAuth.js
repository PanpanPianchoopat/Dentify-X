import UserAPI from "@/services/userAPI";

export const useGetUser = () => {
  const response = UserAPI.getUser()
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return response;
};

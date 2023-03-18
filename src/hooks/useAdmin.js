import UsersAPI from "@/services/usersAPI";

export const useRegister = (data) => {
  const registerData = {
    FirstName: data.fname,
    LastName: data.lname,
    RoleID: data.userRole ? Number(data.userRole) : 1,
    Email: data.email,
    Password: data.password,
    JobPosition: data.jobPosition ? data.jobPosition : null,
    ProficiencyID: data.profLevel,
  };

  const response = UsersAPI.createUser(registerData)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });

  return response;
};

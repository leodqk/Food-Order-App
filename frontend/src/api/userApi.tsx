import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

type createUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCeateUser = () => {
  const createUserRequest = async (user: createUserRequest) => {
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
  };

  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createUserRequest);

  return { createUser, isLoading, isError, isSuccess };
};

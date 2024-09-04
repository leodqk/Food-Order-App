import { useGetUser, useUpdateUser } from "@/api/userApi";
import UserProfileForm from "@/forms/user_profile_forms/UserProfileForm";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateUser();

  if (isGetLoading) {
    return <span>Đang tải...</span>;
  }

  if (!currentUser) {
    return <span>Không thể tải thông tin</span>;
  }

  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
};

export default UserProfilePage;

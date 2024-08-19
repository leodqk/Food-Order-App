import {
  useCreateMyRestaurant,
  useGetRestaurant,
  useUpdateRestaurant,
} from "@/api/restaurantApi";
import ManageRestaurantForm from "@/forms/manage_restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { restaurant } = useGetRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateRestaurant();
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();

  const isEditing = !!restaurant;
  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={isEditing ? updateRestaurant : createRestaurant}
      isLoading={isCreateLoading || isUpdateLoading}
    />
  );
};

export default ManageRestaurantPage;

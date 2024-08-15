import { useCreateMyRestaurant } from "@/api/restaurantApi";
import ManageRestaurantForm from "@/forms/manage_restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();
  return (
    <ManageRestaurantForm onSave={createRestaurant} isLoading={isLoading} />
  );
};

export default ManageRestaurantPage;

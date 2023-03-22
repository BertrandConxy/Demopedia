import { UPDATE_COUNTRY } from "../graphQL/mutations/updateCountry";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

const useUpdateCountry = () => {
  const [mutate, { loading, error, data }] = useMutation(UPDATE_COUNTRY);

  const updateCountry = async (updateData) => {
    return await toast.promise(mutate({ variables: { country: updateData } }), {
      pending: "updating country...",
      success: "Country successfully updated",
      error: "failed to update a country",
    });
  };

  return { updateCountry, loading, error, data };
};

export default useUpdateCountry;

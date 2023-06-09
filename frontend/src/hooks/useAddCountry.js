import { ADD_COUNTRY } from "../graphQL/mutations/addCountry";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

const useAddCountry = () => {
  const [mutate, { loading, error, data }] = useMutation(ADD_COUNTRY);

  const addCountry = async (country) => {
    return await toast.promise(mutate({ variables: { country } }), {
      pending: "Adding country...",
      success: "Country successfully added",
      error: "failed to add a country",
    });
  };

  return { addCountry, loading, error, data };
};

export default useAddCountry;

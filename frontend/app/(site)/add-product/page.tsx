import AddProductBreadCrumb from "@/components/add-product-bread-crumb";
import AddProduct from "@/components/add-products-forms/add-product";
import type { ReactElement } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Products",
};

const AddProductPage = (): ReactElement => {
  return (
    <div>
      <AddProductBreadCrumb />
      <AddProduct />
    </div>
  );
};

export default AddProductPage;

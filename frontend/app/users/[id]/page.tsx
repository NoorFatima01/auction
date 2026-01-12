import React from "react";

const IndividualUserPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return <div>Individual Users Page</div>;
};

export default IndividualUserPage;

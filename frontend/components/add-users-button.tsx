"use client";

import { useMutation } from "@tanstack/react-query";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, type FormSchemaType } from "@/lib/schema";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { useState } from "react";

const addUser = async (data: FormSchemaType) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to add user");
  }

  return res.json();
};

const AddUsersButton = () => {
  const [open, setOpen] = useState(false);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "buyer",
    },
  });

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: (data) => {
      console.log("User added:", data);
      form.reset();
      setOpen(false);
    },
    onError: (error) => {
      console.error("Error", error);
    },
  });

  const onSubmit = async (data: FormSchemaType) => {
    console.log("Submitting data:", data);
    mutation.mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-white border border-[#E0E2E7] font-poppins text-[#667085] font-medium cursor-pointer hover:bg-gray-50">
          Add User
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Add User</DialogTitle>
        <Card>
          <CardContent>
            <div>
              <FieldGroup>
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="user-name">Name</FieldLabel>
                      <Input
                        {...field}
                        id="user-name"
                        aria-invalid={fieldState.invalid}
                        placeholder="Name of user"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="user-email">Email</FieldLabel>
                      <Input
                        {...field}
                        id="user-email"
                        aria-invalid={fieldState.invalid}
                        placeholder="user@example.com"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="role"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="user-role">Role</FieldLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buyer">Buyer</SelectItem>
                          <SelectItem value="seller">Seller</SelectItem>
                        </SelectContent>
                      </Select>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
              <Button
                onClick={form.handleSubmit(onSubmit)}
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default AddUsersButton;

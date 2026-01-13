"use client";

import useSWR from "swr";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { registerUser } from "@/api-client";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, type FormSchemaType } from "@/lib/schema";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { useEffect } from "react";

const fetcher = (url: string, { arg }: { arg: FormSchemaType }) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  }).then((res) => res.json());

const AddUsersButton = () => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "buyer",
    },
  });

  const { data, mutate } = useSWR(
    "http://localhost:5000/api/user/add",
    fetcher
  );

  useEffect(() => {
    if (data) {
      console.log("Users data:", data);
    }
  }, [data]);

  //   if (error) return <div>Error loading users ${error.message}</div>;

  const onSubmit = async (data: FormSchemaType) => {
    console.log("Submitting data:", data);
    const { name, email, role } = data;
    //   await registerUser({ name, email, role });
    mutate({ arg: { name, email, role } });
    form.reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white border cursor-pointer hover:bg-gray-50 border-[#E0E2E7] text-[#667085] font-poppins text-[14px] leading-5">
          Add User
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Add User Dialog</DialogTitle>
        <Card>
          <CardContent>
            <div>
              <form id="my-form" onSubmit={form.handleSubmit(onSubmit)}>
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
                          id="form-rhf-demo-title"
                          aria-invalid={fieldState.invalid}
                          placeholder="Login button not working on mobile"
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
                        <FieldLabel htmlFor="user-email">Role</FieldLabel>
                        <Select>
                          <SelectTrigger className="w-full" {...field}>
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
              </form>
              <Button type="submit" form="my-form">
                Submit
              </Button>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default AddUsersButton;

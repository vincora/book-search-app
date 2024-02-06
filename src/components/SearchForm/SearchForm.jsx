import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import imgUrl from "./img/literature-composition.jpg?url";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";

const SearchForm = ({ onSearch }) => {
  const formSchema = z.object({
    input: z.string(),
    category: z.string(),
    sort: z.string(),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
      category: "all",
      sort: "relevance",
    },
  });

  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSearch)}
          className="space-y-5 p-7 bg-cover bg-center"
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          <h1 className="text-2xl text-white">Search for books</h1>
          <div className="flex flex-col gap-3 sm:flex-row w-1/2 mx-auto items-center space-x-2">
            <FormField
              control={form.control}
              name="input"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="What are you looking for?"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </div>
          <div className="flex flex-col gap-5 sm:flex-row justify-center">
            <div className="text-sm flex items-center gap-3">
              <div className=" text-white">Categories</div>
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Select
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="sm:w-[180px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">all</SelectItem>
                          <SelectItem value="art">art</SelectItem>
                          <SelectItem value="biography">biography</SelectItem>
                          <SelectItem value="computers">computers</SelectItem>
                          <SelectItem value="history">history</SelectItem>
                          <SelectItem value="medical">medical</SelectItem>
                          <SelectItem value="poetry">poetry</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className=" text-sm flex  items-center gap-3">
              <div className=" text-white">Sorting by</div>
              <FormField
                control={form.control}
                name="sort"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="sm:w-[180px]">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="relevance">relevance</SelectItem>
                        <SelectItem value="newest">newest</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SearchForm;

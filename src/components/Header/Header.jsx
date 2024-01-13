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
import imgUrl from './img/literature-composition.jpg?url';


const Header = () => {
  return (
    <div className="space-y-5 p-7 bg-cover bg-center" style={{ backgroundImage: `url(${imgUrl})` }}>
      <h1 className="text-2xl text-white">Search for books</h1>
      <div className="flex flex-col gap-3 sm:flex-row sm:w-1/2 mx-auto items-center space-x-2">
        <Input type="text" placeholder="What are you looking for?" />
        <Button type="submit">Search</Button>
      </div>
      <div className="flex flex-col gap-5 sm:flex-row justify-center">
        <div className="text-sm flex items-center gap-3">
          <div className=" text-white">Categories</div>
          <Select defaultValue="all">
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
        </div>
        <div className=" text-sm flex  items-center gap-3">
          <div className=" text-white">Sorting by</div>
          <Select defaultValue="relevance">
            <SelectTrigger className="sm:w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">relevance</SelectItem>
              <SelectItem value="newest">newest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Header;

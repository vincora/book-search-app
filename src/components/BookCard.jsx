import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BookCard = ({ imageUrl = null, title = "", category = "", authors = "" }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{authors}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={imageUrl} alt={title}/>
      </CardContent>
      <CardFooter>
        <p>{category}</p>
      </CardFooter>
    </Card>
  );
};

export default BookCard;

import img from "../assets/31242.jpg";

async function createFileObject() {
  const response = await fetch(img);
  const blob = await response.blob();
  const file = new File([blob], "image.jpg", { type: blob.type });
  return file;
}

export const users = {
  1: {
    name: "Mduduzi Jele",
    email: "mduduzi@gmail.com",
    password: "mduduzi",
    myPosts: [
      {
        title: "Apple",
        description: "Apple releases new iphone with usb type c",
        dateTime: new Date(),
        views: 0,
        ratings: 0,
        image: createFileObject(),
        tag: "Technology",
        comment: [
          {
            message: "This scuks, why would they do it.",
            dayeTime: new Date(),
            name: "Slay89",
          },
        ],
      },
    ],
  },
  2: {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    password: "password",
    myPosts: [
      {
        title: "How to make a delicious chocolate cake",
        description:
          "This post will teach you how to make a delicious chocolate cake.",
        dateTime: new Date(),
        views: 0,
        ratings: 0,
        image: createFileObject(),
        tag: "Food",
        comment: [
          {
            message: "I agree! This pizza is amazing!",
            dayeTime: new Date(),
            name: "John Doe",
          },
        ],
      },
    ],
  },
  3: {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password",
    myPosts: [
      {
        title: "How to cook a perfect steak",
        description: "This post will teach you how to cook a perfect steak.",
        dateTime: new Date(),
        views: 0,
        ratings: 0,
        image: createFileObject(),
        tag: "Food",
        comment: [
          {
            message: "I agree! This pizza is amazing!",
            dayeTime: new Date(),
            name: "John Doe",
          },
          {
            message: "I agree! This pizza is amazing!",
            dayeTime: new Date(),
            name: "John Doe",
          },
        ],
      },
    ],
  },
  4: {
    name: "Susan Smith",
    email: "susan.smith@example.com",
    password: "password",
    myPosts: [
      {
        title: "The best places to visit in Paris",
        description: "This post lists the best places to visit in Paris.",
        dateTime: new Date(),
        views: 0,
        ratings: 0,
        image: createFileObject(),
        tag: "Travel",
        comment: [
          {
            message: "I agree! This pizza is amazing!",
            dayeTime: new Date(),
            name: "John Doe",
          },
          {
            message: "I agree! This pizza is amazing!",
            dayeTime: new Date(),
            name: "John Doe",
          },
          {
            message: "I agree! This pizza is amazing!",
            dayeTime: new Date(),
            name: "John Doe",
          },
        ],
      },
    ],
  },
  5: {
    name: "David Jones",
    email: "david.jones@example.com",
    password: "password",
    myPosts: [
      {
        title: "How to build a website",
        description:
          "This post will teach you how to build a website from scratch.",
        dateTime: new Date(),
        views: 0,
        ratings: 0,
        image: createFileObject(),
        tag: "Technology",
        comment: [
          {
            message: "I agree! This pizza is amazing!",
            dayeTime: new Date(),
            name: "John Doe",
          },
          {
            message: "I agree! This pizza is amazing!",
            dayeTime: new Date(),
            name: "John Doe",
          },
          {
            message: "I agree! This pizza is amazing!",
            dayeTime: new Date(),
            name: "John Doe",
          },
        ],
      },
    ],
  },
  6: {
    name: "Mary Johnson",
    email: "mary.johnson@example.com",
    password: "password",
    myPosts: [
      {
        title: "How to write a novel",
        description:
          "This post will teach you how to write a novel from start to finish.",
        dateTime: new Date(),
        views: 0,
        ratings: 0,
        image: createFileObject(),
        tag: "Writing",
        comment: [
          {
            message: "I agree! This pizza is amazing!",
            dayeTime: new Date(),
            name: "John Doe",
          },
          {
            message: "I agree! This pizza is amazing!",
            dayeTime: new Date(),
            name: "John Doe",
          },
          {
            message: "I agree! This pizza is amazing!",
            dayeTime: new Date(),
            name: "John Doe",
          },
          {
            message: "I agree! This pizza is amazing!",
            dayeTime: new Date(),
            name: "John Doe",
          },
          {
            message: "I agree! This pizza is amazing!",
            dayeTime: new Date(),
            name: "John Doe",
          },
        ],
      },
    ],
  },
  7: {
    name: "Michael Brown",
    email: "michael.brown@example.com",
    password: "password",
    myPosts: [
      {
        title: "How to start a business",
        description:
          "This post will teach you how to start a business from scratch.",
        dateTime: new Date(),
        views: 0,
        ratings: 0,
        image: createFileObject(),
        tag: "Business",
        comment: [
          {
            message: "I agree! This pizza is amazing!",
            dayeTime: new Date(),
            name: "John Doe",
          },
          {
            message: "I agree! This pizza is amazing!",
            dayeTime: new Date(),
            name: "John Doe",
          },
          {
            message: "I agree! This pizza is amazing!",
            dayeTime: new Date(),
            name: "John Doe",
          },
        ],
      },
    ],
  },
};

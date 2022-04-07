
import directory_creator from "./directory_creator";

directory_creator(
  "git_organization/git_project",
  "some-cool-stuff",
  () => {
    console.log("directory created successfully");
  },
  (error) => {
    console.log(error);
  }
);

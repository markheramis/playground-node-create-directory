const fs = require("fs");
const path = require("path");

/**
 *
 * @param String namespace This variable should contain the value passed from the Gitlab Webhook Event Data `event_data.object_attributes.source.path_with_namespace`
 * @param String branch This variable should contain the value passed from the Gitlab Webhook Event Data `event_data.object_attributes.source_branch
 * @param function success_callback
 * @param function error_callback
 */
let create_directory = (
  namespace,
  branch,
  success_callback = undefined,
  error_callback = undefined
) => {
  namespace = namespace.replace("/", "_");
  let directory_name = namespace + "_" + branch;

  fs.mkdir(path.join(__dirname, directory_name), (fs_error) => {
    if (fs_error && error_callback !== undefined) {
      error_callback(fs_error);
      return;
    }
    if (success_callback !== undefined) {
      success_callback();
    }
  });
};

exports.default = create_directory;

create_directory(
  "git_organization/git_project",
  "some-cool-stuff",
  () => {
    console.log("directory created successfully");
  },
  (error) => {
    console.log(error);
  }
);

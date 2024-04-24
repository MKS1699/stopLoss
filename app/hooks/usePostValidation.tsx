"use client";

import { useEffect, useState } from "react";
import { useAppSelector } from ".";

// result types declaration
type RESULT = {
  passed: boolean;
  message?: string;
  errorDetails?:
    | {
        errorField:
          | ""
          | "Title"
          | "Type"
          | "Image Links"
          | "Image Caption"
          | "Description"
          | "Authors"
          | "Body"
          | "Tags";
        errorMessage: string;
      }[]
    | {}[];
};

const usePostValidation = () => {
  const [result, setResult] = useState<RESULT>({
    message: "",
    passed: false,
    errorDetails: [
      {
        errorField: "",
        errorMessage: "",
      },
    ],
  });

  const [errorField, setErrorFields] = useState<string[]>([""]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // ##################################
  // Post Field which will be validated
  // ##################################
  // postTitle
  // postType
  // mainPost Image (image + caption)
  // postDescription
  // postAuthors
  // postTags
  // postBody (1 paragraph body at least)

  /* ----------------------
   * // Validation Types //
   * ----------------------
   * PostTitle : Cannot be empty.
   * PostType  : One of the provided types.
   * PostImage : Image Links (original required. thumb, medium
   *             links are optional), caption cannot be empty.
   * PostDescription : Cannot be empty.
   * PostAuthors : Cannot be empty.
   * PostTags : At very least 20 tags are there minimum and
   *            they cannot be empty.
   * PostBody : Making sure 1 paragraph is there minimum having
   *            body/content in it.
   */

  // post fields from state
  const Title = useAppSelector((state) => state.post.postTitle);
  const Type = useAppSelector((state) => state.post.postType);
  const ImageLink = useAppSelector(
    (state) => state.post.postImage.links.original
  );
  const ImageCaption = useAppSelector((state) => state.post.postImage.caption);
  const Description = useAppSelector((state) => state.post.postDescription);
  const Authors = useAppSelector((state) => state.post.postAuthors);
  const Tags = useAppSelector((state) => state.post.postTags);
  const Body = useAppSelector((state) => state.post.postParagraphs[0].paraBody);

  function ValidateFieldTypes() {
    const errorDetails: RESULT["errorDetails"] | {}[] = [];
    // Title Validation
    if (Title.length <= 0) {
      errorDetails[errorDetails.length] = {
        errorField: "Title",
        errorMessage: "Post Title cannot be empty.",
      };
    }
    // Type Validation
    if (Type === "") {
      errorDetails[errorDetails.length] = {
        errorField: "Type",
        errorMessage: "Post Type needs to be selected.",
      };
    }
    // Image Link Validation
    if (ImageLink.length <= 0) {
      errorDetails[errorDetails.length] = {
        errorField: "Image Link",
        errorMessage:
          "Image Link is not present. Upload Image if image uploaded re-upload it again.",
      };
    }
    // Image Caption Validation
    if (ImageCaption.length <= 0) {
      errorDetails[errorDetails.length] = {
        errorField: "Image Caption",
        errorMessage: "Please Provide Image Caption.",
      };
    }
    // Description Validation
    if (Description.length <= 0) {
      errorDetails[errorDetails.length] = {
        errorField: "Description",
        errorMessage: "Post description cannot be empty.",
      };
    }
    // Authors Validation
    // Authors are there
    if (Authors.length <= 0) {
      errorDetails[errorDetails.length] = {
        errorField: "Authors",
        errorMessage: "Authors need to be present.",
      };
    }
    // Authors are present and provided
    if (Authors.length > 0) {
      const authorIndex: number[] = [];
      Authors.map((author: string, index: number) => {
        if (author.length <= 0) {
          authorIndex[authorIndex.length] = index;
        }
      });
      if (authorIndex.length > 0) {
        errorDetails[errorDetails.length] = {
          errorField: "Authors",
          errorMessage: "Provided Authors cannot be empty.",
        };
      }
    }
    // Tags
    // Tags are there and unique
    if (Tags) {
      let checkDuplicateTags = () => new Set(Tags).size !== Tags.length;
      if (checkDuplicateTags()) {
        errorDetails[errorDetails.length] = {
          errorField: "Tags",
          errorMessage: "Duplicate Tags found.",
        };
      }
      if (Tags.length < 20) {
        errorDetails[errorDetails.length] = {
          errorField: "Tags",
          errorMessage: "Tags need to be provided.",
        };
      }
      // Tags are present and provided
      if (Tags.length >= 20) {
        const tagIndexError: number[] = [];
        Tags.map((tag: string, index: number) => {
          if (tag.length <= 0) {
            tagIndexError[tagIndexError.length] = index;
          }
        });
        if (tagIndexError.length > 0) {
          errorDetails[errorDetails.length] = {
            errorField: "Tags",
            errorMessage: "Provided Tags cannot be empty.",
          };
        }
      }
    }

    // Body Validation
    if (Body.length <= 0) {
      errorDetails[errorDetails.length] = {
        errorField: "Body",
        errorMessage: "Paragraph body cannot be empty",
      };
    }

    // update result
    // if error(s) are there
    if (errorDetails.length > 0) {
      setResult({
        passed: false,
        errorDetails:
          errorDetails.length > 0
            ? errorDetails
            : [
                {
                  errorField: "",
                  errorMessage: "",
                },
              ],
        message:
          "Fix the listed issues to publish post, or save post to fix the issues later.",
      });
    }
    // if error are not there
    if (errorDetails.length <= 0) {
      setResult({ passed: true });
    }
  }
  useEffect(() => {
    ValidateFieldTypes();
  }, [Title, Tags, Type, ImageLink, ImageCaption, Description, Authors, Body]);
  return result;
};

export default usePostValidation;

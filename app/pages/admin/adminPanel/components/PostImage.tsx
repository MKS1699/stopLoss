"use client";

import { useAppDispatch } from "@/app/hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { PostTitleBarPropsTypes } from "./PostTitleBar";
import {
  setMainHasImage,
  setPostMainImage,
  setPostParaHasImages,
  setPostParaImage,
} from "@/app/redux/slice/postSlice";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import { original } from "@reduxjs/toolkit";

interface PostImagePropsTypes extends PostTitleBarPropsTypes {
  paraID?: number;
  imageID?: number;
  type: "mainImage" | "paraImage";
  imageLabel: string;
  captionLabel: string;
}

const PostImage = ({
  screen,
  paraID,
  imageID,
  type,
  imageLabel,
  captionLabel,
}: PostImagePropsTypes) => {
  const dispatch = useAppDispatch();
  const [imageCaption, setImageCaption] = useState<string>("");
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    undefined
  );

  const [imageUploaded, setImageUploaded] = useState<boolean>(false);

  // function for setting values in the state slice
  function setStateSliceValues({
    type,
    ORIGINAL,
    MEDIUM,
    THUMBNAIL,
    caption,
    imageID,
    paraID,
  }: {
    paraID?: number;
    imageID?: number;
    ORIGINAL?: string;
    MEDIUM?: string;
    THUMBNAIL?: string;
    caption?: string;
    type: PostImagePropsTypes["type"];
  }): void {
    // main Image props
    if (type === "mainImage") {
      // main image links
      if (ORIGINAL) {
        if (MEDIUM) {
          if (THUMBNAIL) {
            dispatch(
              setPostMainImage({
                original: ORIGINAL,
                medium: MEDIUM,
                thumbnail: THUMBNAIL,
              })
            );
          } else {
            dispatch(
              setPostMainImage({
                original: ORIGINAL,
                medium: MEDIUM,
              })
            );
          }
        } else {
          dispatch(
            setPostMainImage({
              original: ORIGINAL,
              thumbnail: THUMBNAIL,
            })
          );
        }
      }
      // main image caption
      if (caption) {
        dispatch(
          setPostMainImage({
            caption,
          })
        );
      }
    }
    //setting post para images props
    if (type === "paraImage")
      if (typeof paraID === "number" && typeof imageID === "number") {
        if (paraID >= 0 && imageID >= 0) {
          {
            // para image links
            if (ORIGINAL) {
              if (MEDIUM) {
                if (THUMBNAIL) {
                  dispatch(
                    setPostParaImage({
                      paraID,
                      imageID,
                      original: ORIGINAL,
                      medium: MEDIUM,
                      thumbnail: THUMBNAIL,
                    })
                  );
                }
              } else {
                dispatch(
                  setPostParaImage({
                    paraID,
                    imageID,
                    original: ORIGINAL,
                    thumbnail: THUMBNAIL,
                  })
                );
              }
            }
            // para image caption
            if (caption) {
              dispatch(
                setPostParaImage({
                  paraID,
                  imageID,
                  caption,
                })
              );
            }
          }
        }
      }
  }

  // function for uploading image
  // need to change upload image function for guest mode
  // above feature at last
  async function uploadingImage(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      // image as form data
      const data = new FormData();
      data.append("image", e.target.files[0]);

      // axios config obj
      const config = {
        method: "post",
        url: "https://api.imgbb.com/1/upload",
        params: {
          key: "ab9a90ee9fbb39ab4ae0f7f60d2e8804",
        },
        data,
      };

      const res = await axios(config);

      // if image uploaded
      if (res.status === 200) {
        toast.success("Image uploaded successfully");
        // required obj from res
        const { image, thumb, medium } = res.data.data;
        setImageUploaded(true);
        let ORIGINAL: string = image.url;
        let MEDIUM: string = medium ? medium?.url : "";
        let THUMBNAIL: string = thumb ? thumb?.url : "";
        // preview url
        setPreviewImage(ORIGINAL);
        // image props
        if (ORIGINAL.length > 0) {
          if (MEDIUM.length > 0) {
            if (THUMBNAIL.length > 0) {
              if (type === "mainImage") {
                setStateSliceValues({ type, ORIGINAL, MEDIUM, THUMBNAIL });
              } else if (type === "paraImage") {
                setStateSliceValues({
                  type,
                  paraID,
                  imageID,
                  ORIGINAL,
                  MEDIUM,
                  THUMBNAIL,
                });
              }
            } else {
              if (type === "mainImage") {
                setStateSliceValues({ type, ORIGINAL, MEDIUM });
              } else if (type === "paraImage") {
                setStateSliceValues({
                  type,
                  paraID,
                  imageID,
                  ORIGINAL,
                  MEDIUM,
                });
              }
            }
          } else {
            if (type === "mainImage") {
              setStateSliceValues({ type, ORIGINAL, THUMBNAIL });
            } else if (type === "paraImage") {
              setStateSliceValues({
                type,
                paraID,
                imageID,
                ORIGINAL,
                THUMBNAIL,
              });
            }
          }
        }
        // has image props
        if (type === "mainImage") {
          dispatch(setMainHasImage(true));
        }
        if (typeof paraID === "number") {
          if (type === "paraImage" && paraID >= 0) {
            dispatch(setPostParaHasImages({ hasImages: true, paraID }));
          }
        }
      }
    }
  }

  // function for setting image caption
  useEffect(() => {
    if (type === "mainImage") {
      setStateSliceValues({ type, caption: imageCaption });
    } else if (type === "paraImage") {
      setStateSliceValues({
        type,
        paraID,
        imageID,
        caption: imageCaption,
      });
    }
  }, [imageCaption]);

  return (
    <div className="w-full h-full py-1 grid grid-flow-row px-1 gap-4">
      {/* Image uploading or changing uploaded image */}
      <div className="w-full h-full flex flex-col gap-2 relative">
        {/* Label for the image */}
        <label htmlFor={imageLabel} className="h-fit dark:text-white">
          {imageUploaded ? "Uploaded Image :" : "Please upload an Image."}
        </label>
        {imageUploaded && (
          <img
            src={previewImage}
            alt="Preview of uploaded Image"
            className="w-full h-full"
          />
        )}
        {imageCaption.length > 0 && (
          <div className="w-full h-auto text-center italic text-black text-sm dark:text-white dark:text-opacity-70">
            {imageCaption}
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          name="image-upload"
          id="image-upload"
          onChange={(
            e //handleImagePreview(e)
          ) => uploadingImage(e)}
          className="w-full h-auto"
        />
      </div>
      {/* Image Caption */}
      <div className="w-full h-full gap-1 grid grid-flow-row">
        <label htmlFor={captionLabel} className="dark:text-white">
          Caption
        </label>
        <input
          type="text"
          name={captionLabel}
          id={captionLabel}
          placeholder="Caption for Image"
          onChange={(e) => setImageCaption(e.target.value)}
          className="w-full h-full bg-[#4cb050] bg-opacity-50 outline-none rounded-md text-base px-2 py-1 self-end dark:border-none placeholder:text-[#003b31] placeholder:text-opacity-70"
        />
      </div>
    </div>
  );
};

export default PostImage;

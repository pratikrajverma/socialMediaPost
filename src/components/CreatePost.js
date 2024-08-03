import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { createProfile } from "../services/operations/profile";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AppContext } from "../context/profileContext";
 

const CreatePost = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loading, setLoading}  = useContext(AppContext);

  const navigate = useNavigate();

  const postCreationHandler = async ( data ) => {

    const formData = new FormData();
    formData.append('image', data.image[0]);
    formData.append('title', data.title );
    formData.append('description', data.description );
    formData.append('video', data.video[0] );
 

    const response = await createProfile( {formData, loading, setLoading});
   
  
    navigate("/");
  };

  const backhandler = () => {
    navigate(-1);
  };

  return (
    <div className=" flex flex-col relative justify-center items-center h-screen bg-sky-100">
      <form
        onSubmit={handleSubmit(postCreationHandler)}
        className="flex flex-col gap-3 bg-cyan-900 text-yellow-400 w-1/2 h-[80%] overflow-auto rounded-xl shadow-lg p-5 shadow-gray-500"
      >
        <label>Enter Title</label>
        <input
          type="text"
          {...register("title", { required: true })}
          className="p-3 bg-transparent border-2 rounded-md text-xl text-yellow-400 border-yellow-400 focus:outline-none"
        />
        {errors.title && <p className="text-red-500">title is required.</p>}

        <label>Enter Description</label>
        <input
          type="text"
          {...register("description", { required: true })}
          className="p-3 bg-transparent border-2 rounded-md text-xl text-yellow-400 border-yellow-400 focus:outline-none"
        />
        {errors.description && (
          <p className="text-red-500">description is required.</p>
        )}


        <label>Select Image</label>

        <input type="file" {...register("image", { required: true })} />
        {errors.image && <p className="text-red-500">image is required.</p>}
    



    
      <label>Select Video</label>

        <input type="file" {...register("video", { required: true })} />
        {errors.video && <p className="text-red-500">video is required.</p>}  





        <div className="flex justify-between">
          <button
            type="submit"
            className="border-2 border-yellow-500 p-3 rounded-lg hover:scale-105 font-bold"
          >
            Create Post
          </button>
          <div className="border  ">
            {" "}
            <button
              type="button"
              onClick={backhandler}
              className="   border-2  left-52 -top-16 p-3 px-5 bg-red-600 text-white  rounded-lg hover:scale-105 font-bold"
            >
              {" "}
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;

import { LegacyRef, useRef } from "react";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { getAllUsers } from "../store/users/thunks";
import { UseAppDispatch } from "../store/store";
import { filterUsers } from "../store/users/slice/users-slice";

interface SearchData {
  search?: string;
}
export const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = UseAppDispatch();
  async function getUsers() {
    const users = await dispatch(getAllUsers());
    return users;
  }
  const {
    handleBlur,
    handleChange,
    handleSubmit,

    values,
    resetForm,
  } = useFormik<SearchData>({
    initialValues: {
      search: "",
    },

    onSubmit: async (data) => {
      dispatch(filterUsers(data.search));
      resetForm();
    },
    validateOnChange: false,
  });

  const { handleSubmit: submitFile, setFieldValue: setFileValue } = useFormik({
    initialValues: {
      file: undefined,
    },

    onSubmit: async (data) => {
      const response = await fetch("http://localhost:3000/api/files", {
        method: "POST",
        body: data.file,
      });

      if (response.status === 200) {
        getUsers();
        Swal.fire("Document uploaded!", "", "success");
      }
    },
  });

  const onFileChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = !!event.target.files && event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file ?? "");
      setFileValue("file", formData);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-[200px] md:h-full justify-between items-center px-0 sm:px-10 md:px-14 my-5 gap-5 md:gap-0">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-2 md:gap-0"
      >
        <input
          type="text"
          className="border-black border-[1px] py-[8px] ms-4 md:ms-0 ps-4 md:w-[300px] text-[17px] shadow-slate-300 shadow-sm"
          placeholder="Search"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.search}
          name="search"
        ></input>
        <button
          type="submit"
          className="border-black border-[1px] py-[8px] ms-4 px-5 text-[17px] shadow-slate-300 shadow-sm bg-black text-white"
        >
          Send
        </button>
      </form>
      <form
        onSubmit={submitFile}
        className="flex flex-col md:flex-row gap-2 md:gap-0"
      >
        <button
          className="border-black border-[1px] py-[8px] px-6 ms-4 md:ms-0 text-[17px] shadow-slate-300 shadow-sm"
          onClick={() => inputRef.current?.click()}
          type="button"
        >
          Select File
        </button>
        <button
          type="submit"
          className="border-black border-[1px] py-[8px] ms-4 px-5 text-[17px] shadow-slate-300 shadow-sm bg-black text-white"
        >
          Upload
        </button>
      </form>

      <input
        type="file"
        accept="text/csv"
        ref={inputRef as LegacyRef<HTMLInputElement>}
        onChange={onFileChanged}
        className="hidden"
        name="file"
      ></input>
    </div>
  );
};

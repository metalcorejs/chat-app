import { useState, SyntheticEvent, useEffect } from "react";
import { TextField } from "../../ui/text_field";
import { Radio } from "../../ui/radio";

interface IInitState {
  username: string;
  userlastname: string;
  sex: string;
}

const useSignInForm = (init: IInitState) => {
  console.log("update");

  const getDataFromLocStorage = () => {
    const state = window.localStorage.getItem("fields");
    if (state) {
      const data = JSON.parse(state);
      if (typeof data === "object") return data;
    }
    return init;
  };

  const [fields, setFields] = useState<IInitState>(getDataFromLocStorage);

  useEffect(() => {
    window.localStorage.setItem("fields", JSON.stringify(fields));
  }, [fields]);

  const useSetField = (e: SyntheticEvent<HTMLInputElement>) => {
    const field = e.currentTarget.name;
    const value = e.currentTarget.value;
    setFields((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return { fields, useSetField };
};

export const SignIn = () => {
  const { fields, useSetField } = useSignInForm({
    username: "",
    userlastname: "",
    sex: "",
  });

  const { username, userlastname, sex } = fields;
  console.log("fields", fields);
  return (
    <form action='' className='signin'>
      <h2 className='signin__title'>Account Registration</h2>
      <TextField
        type='text'
        name='username'
        id='username'
        label='User name'
        placeholder='name...'
        className='signin__text-field'
        value={username}
        onChange={useSetField}
      />
      <TextField
        type='text'
        name='userlastname'
        id='userlastname'
        label='User last name'
        placeholder='last name...'
        className='signin__text-field'
        value={userlastname}
        onChange={useSetField}
      />
      <div className='signin__radios'>
        <Radio
          name='sex'
          id='male'
          label='Male'
          value='male'
          onChange={useSetField}
          isChecked={sex === "male"}
        />
        <Radio
          name='sex'
          id='female'
          label='Female'
          value='female'
          onChange={useSetField}
          isChecked={sex === "female"}
        />
      </div>
    </form>
  );
};

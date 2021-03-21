import { useState, SyntheticEvent } from "react";
import { TextField } from "../../ui/text_field";
import { Radio } from "../../ui/radio";

export const SignIn = () => {
  const [fields, setFields] = useState({ name: "", lastname: "", sex: "" });
  const useSetField = (e: SyntheticEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.name, e.currentTarget.value);
    const field = e.currentTarget.name;
    const value = e.currentTarget.value;
    setFields((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const { name, lastname, sex } = fields;
  console.log(name, lastname, sex);
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
        value={name}
        onChange={useSetField}
      />
      <TextField
        type='text'
        name='userlastname'
        id='userlastname'
        label='User last name'
        placeholder='last name...'
        className='signin__text-field'
        value={lastname}
        onChange={useSetField}
      />
      <div className='signin__radios'>
        <Radio
          name='sex'
          id='male'
          label='Male'
          value='male'
          onChange={useSetField}
        />
        <Radio
          name='sex'
          id='female'
          label='Female'
          value='female'
          onChange={useSetField}
        />
      </div>
    </form>
  );
};

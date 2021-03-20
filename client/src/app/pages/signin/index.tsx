import { TextField } from "../../ui/text_field";

export const SignIn = () => {
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
      />
      <TextField
        type='text'
        name='userlastname'
        id='userlastname'
        label='User last name'
        placeholder='last name...'
        className='signin__text-field'
      />
    </form>
  );
};

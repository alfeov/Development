import { useForm } from 'react-hook-form'

export function UsersCreateForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm({ mode: 'onBlur', defaultValues: { userName: '', userAge: '' } })

  const onSubmit = async ({ userName, userAge }) => {
    console.log(userName, userAge)
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          {...register('userName', {
            required: {
              value: true,
              message: 'This field is required',
            },
            pattern: {
              value: /^[A-Z_@]+$/i,
              message: 'Only latin symbols, _ and @',
            },
          })}
          aria-invalid={
            !!errors?.userName || (!!touchedFields?.userName && 'false') || null
          }
          aria-describedby='userName-helper'
        />
        {errors?.userName && (
          <small id='userName-helper'>{errors?.userName?.message}</small>
        )}
        <input
          type='number'
          {...register('userAge', {
            required: {
              value: true,
              message: 'This field is required',
            },
            min: {
              value: 0,
              message: 'Must be greater then 0',
            },
          })}
          aria-invalid={
            !!errors?.userAge || (!!touchedFields?.userAge && 'false') || null
          }
          aria-describedby='userAge-helper'
        />
        {errors?.userAge && (
          <small id='userAge-helper'>{errors?.userAge?.message}</small>
        )}
        <input type='submit' />
      </form>
    </>
  )
}

import { loadCreateUser } from '@/store/users/users-actions'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

export function UsersCreateForm() {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm({ mode: 'onBlur', defaultValues: { userName: '', userAge: '' } })

  const onSubmit = async ({ userName, userAge }) => {
    dispatch(loadCreateUser({ username: userName }))
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='Username'
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
          placeholder='Age'
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

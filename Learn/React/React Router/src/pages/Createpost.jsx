import { Form, useNavigation } from 'react-router'

export function Createpost() {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <>
      <h1>Create a new Post</h1>
      <Form action='/posts/new' method='post'>
        <label>
          Title:
          <input type='text' name='title' />
        </label>
        <label>
          Body:
          <input type='text' name='body' />
        </label>
        <input type='hidden' name='userId' value='1' />
        <input type='submit' value='Submit' disabled={isSubmitting} />
      </Form>
    </>
  )
}

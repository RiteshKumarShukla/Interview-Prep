import React from 'react'

export const UploadFile = () => {
  return (
    <div>
        <form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" />
</form>
    </div>
  )
}

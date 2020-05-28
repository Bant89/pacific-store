import React, { useState } from "react"
import axios from "axios"
import { Layout } from "../components/Layout"

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    is_admin: false,
  })
  const [avatar, setAvatar] = useState({})
  const [files, setFiles] = useState([])
  const individualformData = new FormData()
  const manyFormData = new FormData()

  const handleInputChange = e => {
    const target = e.target
    const name = target.name
    const value = target.value
    setUserInfo({ ...userInfo, [name]: value })
  }

  const handleImageChange = e => {
    if (e.target.files[0]) setAvatar(e.target.files[0])
  }

  const createUser = () => {
    axios({
      method: "post",
      url: "http://localhost:3000/users",
      data: userInfo,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => console.error(error))
  }

  const handleSubmit = e => {
    e.preventDefault()
    createUser()
  }

  const handleImageSubmit = e => {
    e.preventDefault()
    individualformData.append("file", avatar)
    axios({
      method: "put",
      url:
        "http://localhost:3000/photos/store/6a633bd1-b622-410b-ac7a-0cd6eff7547f",
      data: individualformData,
      headers: {
        "Content-Type": "multipart/form-data",
        cors: "no-mode",
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZWQ4ZGJmZGYtMzVkZi00ZGQ3LWEwN2MtM2I5NDViZmM0ZDBhIiwiZXhwIjoxNTkwNzA1NTM0fQ.3g6sTlhXcngjxLUQ0-0AI_sN60jxugo4cjshKohLYHo",
      },
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => console.error(error))
  }

  const handleFilesChange = e => {
    setFiles(e.target.files)
  }

  const handleProductSubmit = e => {
    e.preventDefault()
    let count = 1
    for (let file of files) {
      manyFormData.append(`images${count}`, file)
      count++
    }

    axios({
      method: "put",
      url:
        "http://localhost:3000/photos/product/1083f166-a01b-4953-ad67-e2c67cb656d5",
      data: manyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
        cors: "no-mode",
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZWQ4ZGJmZGYtMzVkZi00ZGQ3LWEwN2MtM2I5NDViZmM0ZDBhIiwiZXhwIjoxNTkwNzA1NTM0fQ.3g6sTlhXcngjxLUQ0-0AI_sN60jxugo4cjshKohLYHo",
      },
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => console.error(error))
  }

  return (
    <Layout>
      <form>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          onChange={handleInputChange}
          name="name"
          value={userInfo.name}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          onChange={handleInputChange}
          name="email"
          value={userInfo.email}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          onChange={handleInputChange}
          name="password"
          value={userInfo.password}
        />
        <br />
        <label htmlFor="password_confirmation">Password confirmation: </label>
        <input
          type="password"
          onChange={handleInputChange}
          name="password_confirmation"
          value={userInfo.password_confirmation}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <br />
      <form>
        <label htmlFor="photo">Profile pic: </label>
        <input
          type="file"
          onChange={handleImageChange}
          name="photo"
          accept="image/png, image/jpeg"
        />
        <br />
        <button onClick={handleImageSubmit}>Submit Image</button>
      </form>
      <form>
        <label htmlFor="productPics">Product pics: </label>
        <input
          type="file"
          onChange={handleFilesChange}
          name="productPhotos"
          multiple
          accept="image/png, image/jpeg"
        />
        <br />
        <button onClick={handleProductSubmit}>Submit</button>
      </form>
    </Layout>
  )
}

export default Register
